from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional, Literal
import uuid
from mcp_memory.core.config import settings

class MemoryItem(BaseModel):
    """
    记忆项模型：属性由系统配置决定
    """
    memory_id: str = Field(default_factory=lambda: str(uuid.uuid4()), description="记忆唯一ID")
    content: str = Field(..., description="记忆内容")
    user_id: str = Field(..., description="记忆所有者ID")
    
    # 元数据（由ENV配置注入）
    scope: str = Field(..., description="记忆作用域")
    project_id: str = Field(..., description="项目ID")
    is_shared: bool = Field(..., description="是否共享")
    
    timestamp: datetime = Field(default_factory=datetime.now, description="记忆产生时间")
    
    # 认知增强字段 (Inspired by Generative Agents)
    importance: float = Field(1.0, description="记忆重要性权重 (1-10)")
    last_accessed: Optional[datetime] = Field(default_factory=datetime.now, description="最后访问时间")
    access_count: int = Field(0, description="访问次数（用于衡量记忆活跃度）")

class ReadMemoryRequest(BaseModel):
    """
    读取记忆请求
    """
    user_id: str = Field(..., description="当前用户ID")
    query: str = Field(..., description="查询内容/当前上下文")
    limit: int = Field(10, description="返回记忆数量限制")
    project_id: Optional[str] = Field(None, description="通常无需填写。仅当需要强制跨项目检索时使用。默认自动锁定当前项目。")

class WriteMemoryRequest(BaseModel):
    """
    写入记忆请求
    """
    user_id: str = Field(..., description="当前用户ID")
    content: str = Field(..., description=f"需记忆的内容（必须使用{settings.MCP_MEMORY_LANGUAGE}，禁止使用其他语言）")
    project_id: Optional[str] = Field(None, description="通常无需填写。系统会自动根据当前路径生成唯一ID。")
    scope: Literal["project", "global"] = Field("project", description="关键：AI需判断。'project'=当前项目专属(默认)；'global'=通用知识/用户偏好。")

class DeleteMemoryRequest(BaseModel):
    """
    删除记忆请求
    """
    memory_id: str = Field(..., description="要删除的记忆ID")
    user_id: str = Field(..., description="当前用户ID（必须是记忆的所有者才能删除）")


class MCPResponse(BaseModel):
    """
    通用响应结构
    """
    code: int = Field(..., description="状态码")
    message: str = Field(..., description="提示信息")
    data: Optional[dict] = Field(None, description="响应数据")
