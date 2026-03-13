from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional, Literal, List, Dict, Any
import uuid
from mcp_memory.core.config import settings


class MemoryItem(BaseModel):
    """
    记忆项模型：支持三层记忆架构
    - storage: 存储记忆（原始对话）
    - thinking: 思维记忆（总结）
    - skill: 技能记忆（可复用知识）
    """
    memory_id: str = Field(default_factory=lambda: str(uuid.uuid4()), description="记忆唯一ID")
    content: str = Field(..., description="记忆内容")
    user_id: str = Field(..., description="记忆所有者ID")
    
    # 三层记忆类型
    memory_type: Literal["storage", "thinking", "skill"] = Field(
        "storage", 
        description="记忆类型: storage=原始存储, thinking=思维总结, skill=技能提取"
    )
    
    # 元数据（由ENV配置注入）
    scope: str = Field(..., description="记忆作用域")
    project_id: str = Field(..., description="项目ID")
    is_shared: bool = Field(..., description="是否共享")
    
    timestamp: datetime = Field(default_factory=datetime.now, description="记忆产生时间")
    
    # 认知增强字段
    importance: float = Field(1.0, description="记忆重要性权重 (1-10)")
    last_accessed: Optional[datetime] = Field(default_factory=datetime.now, description="最后访问时间")
    access_count: int = Field(0, description="访问次数")
    
    # 三层记忆关联字段
    source_memories: List[str] = Field(default_factory=list, description="源记忆ID列表（用于链接）")
    session_id: Optional[str] = Field(None, description="对话会话ID（仅storage类型使用）")
    summary_type: Optional[Literal["session", "daily", "weekly", "manual"]] = Field(
        None, 
        description="总结类型（仅thinking类型使用）"
    )
    skill_type: Optional[Literal["coding", "config", "workflow", "knowledge", "best_practice"]] = Field(
        None,
        description="技能类型（仅skill类型使用）"
    )
    tags: List[str] = Field(default_factory=list, description="标签列表")
    confidence: float = Field(1.0, description="置信度（0-1）")
    version: int = Field(1, description="版本号")
    verified: bool = Field(False, description="是否已验证")
    
    class Config:
        json_schema_extra = {
            "example": {
                "memory_id": "uuid",
                "content": "示例内容",
                "user_id": "user_001",
                "memory_type": "thinking",
                "scope": "project",
                "project_id": "project_001",
                "is_shared": False,
                "source_memories": ["uuid1", "uuid2"],
                "summary_type": "session",
                "tags": ["python", "async"],
                "confidence": 0.95
            }
        }


class MemoryLink(BaseModel):
    """
    记忆链接模型：建立记忆之间的关系
    """
    link_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    source_id: str = Field(..., description="源记忆ID")
    target_id: str = Field(..., description="目标记忆ID")
    link_type: Literal["summarized_from", "extracted_from", "related_to", "supersedes"] = Field(
        ...,
        description="链接类型"
    )
    confidence: float = Field(1.0, description="链接置信度")
    timestamp: datetime = Field(default_factory=datetime.now)
    metadata: Dict[str, Any] = Field(default_factory=dict)


class ReadMemoryRequest(BaseModel):
    """
    读取记忆请求
    """
    user_id: str = Field(..., description="当前用户ID")
    query: str = Field(..., description="查询内容/当前上下文")
    limit: int = Field(10, description="返回记忆数量限制")
    memory_type: Optional[Literal["storage", "thinking", "skill", "all"]] = Field(
        "all",
        description="记忆类型过滤"
    )
    project_id: Optional[str] = Field(None, description="通常无需填写。仅当需要强制跨项目检索时使用。默认自动锁定当前项目。")


class WriteMemoryRequest(BaseModel):
    """
    写入记忆请求
    """
    user_id: str = Field(..., description="当前用户ID")
    content: str = Field(..., description=f"需记忆的内容（必须使用{settings.MCP_MEMORY_LANGUAGE}，禁止使用其他语言）")
    memory_type: Literal["storage", "thinking", "skill"] = Field(
        "storage",
        description="记忆类型"
    )
    project_id: Optional[str] = Field(None, description="通常无需填写。系统会自动根据当前路径生成唯一ID。")
    scope: Literal["project", "global"] = Field("project", description="关键：AI需判断。'project'=当前项目专属(默认)；'global'=通用知识/用户偏好。")
    source_memories: List[str] = Field(default_factory=list, description="源记忆ID列表")
    session_id: Optional[str] = Field(None, description="对话会话ID")
    tags: List[str] = Field(default_factory=list, description="标签列表")


class DeleteMemoryRequest(BaseModel):
    """
    删除记忆请求
    """
    memory_id: str = Field(..., description="要删除的记忆ID")
    user_id: str = Field(..., description="当前用户ID（必须是记忆的所有者才能删除）")


class UpdateMemoryRequest(BaseModel):
    """
    更新记忆请求
    """
    memory_id: str = Field(..., description="要更新的记忆ID")
    user_id: str = Field(..., description="当前用户ID（必须是记忆的所有者才能修改）")
    content: str = Field(..., description=f"更新后的记忆内容（必须使用{settings.MCP_MEMORY_LANGUAGE}）")
    reason: Optional[str] = Field(None, description="更新原因")


class MemoryFeedbackRequest(BaseModel):
    """
    记忆反馈请求：用于标记记忆不准确或需要改进
    """
    memory_id: str = Field(..., description="记忆ID")
    user_id: str = Field(..., description="用户ID")
    feedback_type: Literal["inaccurate", "outdated", "incomplete", "wrong_scope"] = Field(..., description="反馈类型")
    comment: Optional[str] = Field(None, description="具体说明")
    suggested_content: Optional[str] = Field(None, description="建议的修正内容")


class StorageMemoryCreate(BaseModel):
    """
    存储记忆创建请求（原始对话记录）
    """
    content: str = Field(..., description="原始对话内容")
    user_id: str = Field(..., description="用户ID")
    session_id: str = Field(..., description="对话会话ID")
    participants: List[str] = Field(default_factory=list, description="参与者列表")
    topic: Optional[str] = Field(None, description="对话主题")
    project_id: Optional[str] = Field(None, description="项目ID")
    scope: Literal["project", "global"] = Field("project", description="作用域")


class ThinkingMemoryCreate(BaseModel):
    """
    思维记忆创建请求（总结）
    """
    content: str = Field(..., description="总结内容")
    user_id: str = Field(..., description="用户ID")
    source_memories: List[str] = Field(..., description="源存储记忆ID列表")
    summary_type: Literal["session", "daily", "weekly", "manual"] = Field("session", description="总结类型")
    key_points: List[str] = Field(default_factory=list, description="关键要点")
    project_id: Optional[str] = Field(None, description="项目ID")
    scope: Literal["project", "global"] = Field("project", description="作用域")


class SkillMemoryCreate(BaseModel):
    """
    技能记忆创建请求（可复用知识）
    """
    content: str = Field(..., description="技能描述")
    user_id: str = Field(..., description="用户ID")
    source_thinking: List[str] = Field(..., description="源思维记忆ID列表")
    skill_type: Literal["coding", "config", "workflow", "knowledge", "best_practice"] = Field(..., description="技能类型")
    tags: List[str] = Field(default_factory=list, description="标签列表")
    project_id: Optional[str] = Field(None, description="项目ID")
    scope: Literal["project", "global"] = Field("global", description="作用域（技能通常全局共享）")


class QueryMemoryResponse(BaseModel):
    """
    查询记忆响应
    """
    memories: List[MemoryItem] = Field(default_factory=list, description="记忆列表")
    total: int = Field(0, description="总数")
    query_time_ms: int = Field(0, description="查询耗时（毫秒）")
    has_more: bool = Field(False, description="是否有更多结果")


class MCPResponse(BaseModel):
    """
    通用响应结构
    """
    code: int = Field(..., description="状态码")
    message: str = Field(..., description="提示信息")
    data: Optional[dict] = Field(None, description="响应数据")
