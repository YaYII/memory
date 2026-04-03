import asyncio
import logging
from typing import Dict, List, Optional, Any
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from enum import Enum
import json
import os
import chromadb
from chromadb.config import Settings as ChromaSettings

logger = logging.getLogger("mcp-memory.token_pool")


class ModelProvider(str, Enum):
    GLM = "glm"
    DEEPSEEK = "deepseek"
    OPENAI = "openai"
    ANTHROPIC = "anthropic"
    CUSTOM = "custom"


@dataclass
class TokenPoolConfig:
    """Token 池配置"""
    provider: str
    api_key: str
    base_url: Optional[str] = None
    priority: int = 50
    enabled: bool = True
    monthly_token_limit: int = 1000000
    daily_token_limit: int = 100000
    model: str = "default"
    extra_config: Dict[str, Any] = field(default_factory=dict)


@dataclass
class TokenUsage:
    """Token 使用记录"""
    provider: str
    tokens: int
    timestamp: datetime
    cost: float = 0.0


class TokenPoolManager:
    """Token 池管理器 - 跟踪和管理所有模型的 Token 使用（ChromaDB 存储）"""

    def __init__(
        self,
        data_path: Optional[str] = None,
        chroma_client: Optional[chromadb.Client] = None
    ):
        self.data_path = data_path or os.path.join(
            os.path.expanduser("~"), ".mcp_memory", "token_pool.json"
        )
        self.chroma_client = chroma_client
        self.collection: Optional[chromadb.Collection] = None
        self.pools: Dict[str, TokenPoolConfig] = {}
        self.usage_history: Dict[str, List[TokenUsage]] = {}
        self._lock = asyncio.Lock()
        self._init_collection()
        self._load()
        self._migrate_from_json()

    def _init_collection(self):
        """初始化 ChromaDB collection"""
        if self.chroma_client is None:
            from mcp_memory.core.config import settings
            chroma_path = settings.CHROMA_DATA_PATH
            os.makedirs(chroma_path, exist_ok=True)
            self.chroma_client = chromadb.PersistentClient(path=chroma_path)
        
        self.collection = self.chroma_client.get_or_create_collection(
            name="token_pool",
            metadata={"description": "Token pool configuration and usage tracking"}
        )

    def _load(self):
        """从 ChromaDB 加载 Token 池数据"""
        try:
            all_data = self.collection.get()
            if not all_data or not all_data.get("ids"):
                return
            
            for i, provider_id in enumerate(all_data["ids"]):
                metadata = all_data["metadatas"][i] if all_data.get("metadatas") else {}
                
                pool_config = TokenPoolConfig(
                    provider=metadata.get("provider", provider_id),
                    api_key=metadata.get("api_key", ""),
                    base_url=metadata.get("base_url"),
                    priority=int(metadata.get("priority", 50)),
                    enabled=metadata.get("enabled", "true").lower() == "true",
                    monthly_token_limit=int(metadata.get("monthly_token_limit", 1000000)),
                    daily_token_limit=int(metadata.get("daily_token_limit", 100000)),
                    model=metadata.get("model", "default"),
                    extra_config=json.loads(metadata.get("extra_config", "{}"))
                )
                self.pools[provider_id] = pool_config
                
                usage_history_str = metadata.get("usage_history", "[]")
                usage_list = json.loads(usage_history_str)
                self.usage_history[provider_id] = [
                    TokenUsage(
                        provider=u.get("provider", provider_id),
                        tokens=u.get("tokens", 0),
                        timestamp=datetime.fromisoformat(u["timestamp"]) if isinstance(u.get("timestamp"), str) else datetime.now(),
                        cost=u.get("cost", 0.0)
                    )
                    for u in usage_list
                ]
        except Exception as e:
            logger.warning("[TokenPool] Failed to load from ChromaDB: %s", e)

    def _save(self):
        """保存 Token 池数据到 ChromaDB"""
        try:
            existing_ids = set(self.collection.get().get("ids", []))
            
            for provider, cfg in self.pools.items():
                usage_data = [
                    {
                        "provider": u.provider,
                        "tokens": u.tokens,
                        "timestamp": u.timestamp.isoformat(),
                        "cost": u.cost
                    }
                    for u in self.usage_history.get(provider, [])
                ]
                
                metadata = {
                    "provider": cfg.provider,
                    "api_key": cfg.api_key,
                    "base_url": cfg.base_url or "",
                    "priority": str(cfg.priority),
                    "enabled": "true" if cfg.enabled else "false",
                    "monthly_token_limit": str(cfg.monthly_token_limit),
                    "daily_token_limit": str(cfg.daily_token_limit),
                    "model": cfg.model,
                    "extra_config": json.dumps(cfg.extra_config, ensure_ascii=False),
                    "usage_history": json.dumps(usage_data, ensure_ascii=False)
                }
                
                if provider in existing_ids:
                    self.collection.update(
                        ids=[provider],
                        metadatas=[metadata],
                        documents=[f"Token pool for {provider}"]
                    )
                else:
                    self.collection.add(
                        ids=[provider],
                        metadatas=[metadata],
                        documents=[f"Token pool for {provider}"]
                    )
        except Exception as e:
            logger.warning("[TokenPool] Failed to save to ChromaDB: %s", e)

    def _migrate_from_json(self):
        """自动迁移旧的 JSON 数据到 ChromaDB"""
        if not os.path.exists(self.data_path):
            return
        
        try:
            with open(self.data_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            pools_data = data.get("pools", {})
            usage_data = data.get("usage_history", {})
            
            if not pools_data:
                return
            
            logger.info("[TokenPool] Migrating %d pools from JSON to ChromaDB...", len(pools_data))
            
            for provider, pool_data in pools_data.items():
                if provider not in self.pools:
                    self.pools[provider] = TokenPoolConfig(**pool_data)
            
            for provider, usages in usage_data.items():
                if provider not in self.usage_history:
                    self.usage_history[provider] = [
                        TokenUsage(
                            provider=u["provider"],
                            tokens=u["tokens"],
                            timestamp=datetime.fromisoformat(u["timestamp"]),
                            cost=u.get("cost", 0.0)
                        )
                        for u in usages
                    ]
            
            self._save()
            
            backup_path = self.data_path + ".migrated"
            os.rename(self.data_path, backup_path)
            logger.info("[TokenPool] Migration complete. Old file backed up to: %s", backup_path)
            
        except Exception as e:
            logger.debug("[TokenPool] Migration failed (may already be migrated): %s", e)

    def register_pool(self, config: TokenPoolConfig):
        """注册一个新的 Token 池"""
        self.pools[config.provider] = config
        if config.provider not in self.usage_history:
            self.usage_history[config.provider] = []
        self._save()
        logger.info("[TokenPool] Registered: %s (priority: %d)", config.provider, config.priority)

    def get_available_pools(self) -> List[str]:
        """获取所有可用的池（启用状态）"""
        return [
            provider for provider, cfg in self.pools.items()
            if cfg.enabled and self.get_remaining_daily_tokens(provider) > 0
        ]

    def get_remaining_daily_tokens(self, provider: str) -> int:
        """获取指定提供商今天的剩余 Token"""
        if provider not in self.pools:
            return 0

        cfg = self.pools[provider]
        now = datetime.now()
        today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)

        used_today = sum(
            u.tokens for u in self.usage_history.get(provider, [])
            if u.timestamp >= today_start
        )

        return max(0, cfg.daily_token_limit - used_today)

    def get_remaining_monthly_tokens(self, provider: str) -> int:
        """获取指定提供商本月的剩余 Token"""
        if provider not in self.pools:
            return 0

        cfg = self.pools[provider]
        now = datetime.now()
        month_start = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)

        used_monthly = sum(
            u.tokens for u in self.usage_history.get(provider, [])
            if u.timestamp >= month_start
        )

        return max(0, cfg.monthly_token_limit - used_monthly)

    def record_usage(self, provider: str, tokens: int, cost: float = 0.0):
        """记录 Token 使用"""
        if provider not in self.usage_history:
            self.usage_history[provider] = []

        self.usage_history[provider].append(
            TokenUsage(provider=provider, tokens=tokens, timestamp=datetime.now(), cost=cost)
        )

        cutoff = datetime.now() - timedelta(days=90)
        self.usage_history[provider] = [
            u for u in self.usage_history[provider] if u.timestamp >= cutoff
        ]
        self._save()

    def is_pool_available(self, provider: str) -> bool:
        """检查池是否可用（只检查是否启用，不限制 Token）"""
        if provider not in self.pools:
            return False
        cfg = self.pools[provider]
        return cfg.enabled

    def disable_pool(self, provider: str):
        """禁用池"""
        if provider in self.pools:
            self.pools[provider].enabled = False
            self._save()
            logger.info("[TokenPool] Disabled: %s", provider)
            self._save()
    def enable_pool(self, provider: str):
        """启用池"""
        if provider in self.pools:
            self.pools[provider].enabled = True
            self._save()
            logger.info("[TokenPool] Enabled: %s", provider)

    def get_pool_status(self) -> Dict[str, Any]:
        """获取所有池的状态"""
        status = {}
        for provider, cfg in self.pools.items():
            daily_remaining = self.get_remaining_daily_tokens(provider)
            monthly_remaining = self.get_remaining_monthly_tokens(provider)
            status[provider] = {
                "enabled": cfg.enabled,
                "priority": cfg.priority,
                "daily_limit": cfg.daily_token_limit,
                "daily_remaining": daily_remaining,
                "monthly_limit": cfg.monthly_token_limit,
                "monthly_remaining": monthly_remaining,
                "daily_usage_percent": round((cfg.daily_token_limit - daily_remaining) / cfg.daily_token_limit * 100, 1) if cfg.daily_token_limit > 0 else 0,
                "is_available": cfg.enabled and daily_remaining > 0
            }
        return status

    def get_best_available_pool(self, preferred: Optional[str] = None) -> Optional[str]:
        """获取最佳可用池（优先使用指定的提供商）"""
        if preferred and self.is_pool_available(preferred):
            return preferred

        available = [
            (provider, cfg.priority)
            for provider, cfg in self.pools.items()
            if cfg.enabled and self.get_remaining_daily_tokens(provider) > 0
        ]

        if not available:
            return None

        available.sort(key=lambda x: x[1])
        return available[0][0]
