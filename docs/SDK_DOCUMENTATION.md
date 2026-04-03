# Python SDK 文档

## 📚 目录

- [概述](#概述)
- [安装](#安装)
- [快速开始](#快速开始)
- [客户端初始化](#客户端初始化)
- [核心方法](#核心方法)
  - [写入记忆](#写入记忆)
  - [读取/搜索记忆](#读取搜索记忆)
  - [列出记忆](#列出记忆)
  - [获取记忆详情](#获取记忆详情)
  - [删除记忆](#删除记忆)
  - [获取统计信息](#获取统计信息)
  - [触发反思](#触发反思)
  - [批量操作](#批量操作)
  - [导入/导出](#导入导出)
- [数据模型](#数据模型)
- [高级用法](#高级用法)
- [错误处理](#错误处理)
- [最佳实践](#最佳实践)

---

## 概述

MCP Memory Python SDK 提供了一个简单易用的接口，用于与记忆系统交互。支持两种模式：

1. **本地模式** - 直接操作数据库，无需启动服务器
2. **远程模式** - 通过 HTTP API 调用远程服务器

---

## 安装

### 基本安装

```bash
cd /path/to/project
pip install -e .
```

### 依赖要求

- Python >= 3.10
- httpx
- pydantic

---

## 快速开始

### 本地模式示例

```python
from mcp_memory import MemoryClient

# 创建本地客户端
client = MemoryClient(mode="local")

try:
    # 写入记忆
    result = client.write_memory(
        user_id="user_001",
        content="Python 是一种解释型、高级、通用的编程语言。",
        title="Python 编程语言介绍",
        tags=["编程", "Python"],
        keywords=["Python", "编程语言", "解释型"],
        scope="global"
    )
    print(f"写入成功: {result}")

    # 搜索记忆
    memories = client.read_memory(
        user_id="user_001",
        query="Python",
        limit=5
    )
    print(f"找到 {len(memories)} 条相关记忆")

finally:
    client.close()
```

### 远程模式示例

```python
from mcp_memory import MemoryClient

# 创建远程客户端
client = MemoryClient(
    mode="remote",
    base_url="http://127.0.0.1:22888",
    timeout=30.0
)

try:
    # 使用上下文管理器
    with MemoryClient(mode="remote") as client:
        # 写入记忆
        result = client.write_memory(
            user_id="user_001",
            content="这是一条远程写入的记忆",
            title="远程示例",
            scope="project"
        )
        print(f"写入成功: {result}")

        # 获取统计信息
        stats = client.get_stats()
        print(f"总记忆数: {stats['memory_count']}")

finally:
    client.close()
```

---

## 客户端初始化

### 构造函数参数

```python
MemoryClient(
    mode: Literal["local", "remote"] = "remote",
    base_url: str = "http://127.0.0.1:22888",
    api_key: Optional[str] = None,
    timeout: float = 30.0,
)
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `mode` | str | "remote" | 运行模式："local" 或 "remote" |
| `base_url` | str | "http://127.0.0.1:22888" | 远程服务器地址（仅远程模式） |
| `api_key` | str | None | API 密钥（仅远程模式，可选） |
| `timeout` | float | 30.0 | 请求超时时间（秒） |

### 上下文管理器

推荐使用上下文管理器自动管理资源：

```python
with MemoryClient(mode="local") as client:
    # 使用 client
    result = client.write_memory(...)
# 自动关闭
```

---

## 核心方法

### 写入记忆

```python
def write_memory(
    self,
    user_id: str,
    content: str,
    memory_type: Literal["storage", "thinking", "skill"] = "storage",
    project_id: Optional[str] = None,
    scope: Literal["project", "global"] = "project",
    source_memories: Optional[List[str]] = None,
    session_id: Optional[str] = None,
    tags: Optional[List[str]] = None,
    title: Optional[str] = None,
    keywords: Optional[List[str]] = None,
) -> Dict[str, Any]
```

#### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `user_id` | str | 必填 | 用户 ID |
| `content` | str | 必填 | 记忆内容 |
| `memory_type` | str | "storage" | 记忆类型：storage/thinking/skill |
| `project_id` | str | None | 项目 ID |
| `scope` | str | "project" | 作用域：project/global |
| `source_memories` | List[str] | None | 源记忆 ID 列表 |
| `session_id` | str | None | 会话 ID |
| `tags` | List[str] | None | 标签列表 |
| `title` | str | None | 记忆标题 |
| `keywords` | List[str] | None | 关键词列表 |

#### 返回值

```python
{
    "id": "memory_id_here",
    "status": "success"
}
```

#### 示例

```python
# 基本写入
result = client.write_memory(
    user_id="user_001",
    content="这是一条记忆内容"
)

# 完整写入
result = client.write_memory(
    user_id="user_001",
    content="Python 是一种编程语言...",
    memory_type="storage",
    scope="global",
    title="Python 介绍",
    tags=["编程", "Python"],
    keywords=["Python", "编程语言"]
)
```

### 读取/搜索记忆

```python
def read_memory(
    self,
    user_id: str,
    query: str,
    limit: int = 10,
    memory_type: Optional[Literal["storage", "thinking", "skill", "all"]] = "all",
    project_id: Optional[str] = None,
) -> List[Dict[str, Any]]
```

#### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `user_id` | str | 必填 | 用户 ID |
| `query` | str | 必填 | 查询内容 |
| `limit` | int | 10 | 返回数量限制 |
| `memory_type` | str | "all" | 记忆类型过滤 |
| `project_id` | str | None | 项目 ID |

#### 返回值

```python
[
    {
        "id": "memory_id",
        "title": "记忆标题",
        "content": "记忆内容",
        "timestamp": "2024-01-01T00:00:00",
        "scope": "project",
        "memory_type": "storage",
        "score": 0.95
    }
]
```

#### 示例

```python
# 简单搜索
memories = client.read_memory(
    user_id="user_001",
    query="Python"
)

# 带限制的搜索
memories = client.read_memory(
    user_id="user_001",
    query="数据库",
    limit=20,
    memory_type="storage"
)
```

### 列出记忆

```python
def list_memories(
    self,
    query: str = "",
    limit: int = 20,
) -> Dict[str, Any]
```

#### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `query` | str | "" | 搜索关键词（空字符串列出所有） |
| `limit` | int | 20 | 返回数量限制 |

#### 返回值

```python
{
    "items": [
        {
            "id": "memory_id",
            "title": "记忆标题",
            "content": "记忆内容",
            "timestamp": "2024-01-01T00:00:00",
            "scope": "project",
            "memory_type": "storage"
        }
    ]
}
```

#### 示例

```python
# 列出所有记忆
result = client.list_memories(limit=50)

# 搜索并列出
result = client.list_memories(query="Python", limit=20)
```

### 获取记忆详情

```python
def get_memory(
    self,
    memory_id: str,
) -> Optional[Dict[str, Any]]
```

#### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `memory_id` | str | 必填 | 记忆 ID |

#### 返回值

```python
{
    "id": "memory_id",
    "content": "记忆内容",
    "timestamp": "2024-01-01T00:00:00",
    "scope": "project",
    "user_id": "user_001",
    "memory_type": "storage",
    "title": "记忆标题",
    "keywords": ["关键词1", "关键词2"]
}
```

#### 示例

```python
memory = client.get_memory("abc123def456")
if memory:
    print(f"标题: {memory['title']}")
    print(f"内容: {memory['content']}")
else:
    print("记忆不存在")
```

### 删除记忆

```python
def delete_memory(
    self,
    user_id: str,
    memory_id: str,
) -> Dict[str, Any]
```

#### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `user_id` | str | 必填 | 用户 ID |
| `memory_id` | str | 必填 | 记忆 ID |

#### 返回值

```python
{
    "status": "deleted",
    "id": "memory_id"
}
```

#### 示例

```python
result = client.delete_memory("user_001", "abc123def456")
print(result)
```

### 获取统计信息

```python
def get_stats(self) -> Dict[str, Any]
```

#### 返回值

```python
{
    "memory_count": 100,
    "tiered_breakdown": {
        "storage": 60,
        "thinking": 30,
        "skill": 10
    },
    "llm_enabled": True,
    "providers_count": 3,
    "preferred_provider": "deepseek",
    "data_path": "/path/to/data"
}
```

#### 示例

```python
stats = client.get_stats()
print(f"总记忆数: {stats['memory_count']}")
print(f"存储层: {stats['tiered_breakdown']['storage']}")
print(f"思维层: {stats['tiered_breakdown']['thinking']}")
print(f"技能层: {stats['tiered_breakdown']['skill']}")
```

### 触发反思

```python
def reflect(self, user_id: str) -> Dict[str, Any]
```

#### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `user_id` | str | 必填 | 用户 ID |

#### 返回值

```python
{
    "status": "started",
    "message": "Autonomous evolution cycle triggered"
}
```

#### 示例

```python
result = client.reflect("user_001")
print(result)
```

### 批量操作

#### 批量写入

```python
def batch_write(
    self,
    memories: List[Dict[str, Any]],
) -> Dict[str, Any]
```

##### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `memories` | List[Dict] | 必填 | 记忆列表，每个记忆项包含 write_memory 需要的参数 |

##### 返回值

```python
{
    "total": 10,
    "success": 8,
    "failed": 2,
    "results": [
        {"success": True, "result": {...}},
        {"success": False, "error": "error message"}
    ]
}
```

##### 示例

```python
memories = [
    {
        "user_id": "user_001",
        "content": "记忆 1",
        "title": "标题 1"
    },
    {
        "user_id": "user_001",
        "content": "记忆 2",
        "title": "标题 2"
    }
]

result = client.batch_write(memories)
print(f"成功: {result['success']}/{result['total']}")
```

#### 批量删除

```python
def batch_delete(
    self,
    user_id: str,
    memory_ids: List[str],
) -> Dict[str, Any]
```

##### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `user_id` | str | 必填 | 用户 ID |
| `memory_ids` | List[str] | 必填 | 记忆 ID 列表 |

##### 示例

```python
result = client.batch_delete(
    "user_001",
    ["id1", "id2", "id3"]
)
print(f"成功: {result['success']}/{result['total']}")
```

### 导入/导出

#### 导入记忆

```python
def import_memories(
    self,
    file_path: str,
    user_id: str,
) -> Dict[str, Any]
```

##### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `file_path` | str | 必填 | JSON 文件路径 |
| `user_id` | str | 必填 | 用户 ID |

##### 示例

```python
result = client.import_memories("import.json", "user_001")
print(result)
```

#### 导出记忆

```python
def export_memories(
    self,
    file_path: str,
    query: str = "",
    limit: int = 100,
) -> Dict[str, Any]
```

##### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `file_path` | str | 必填 | 输出 JSON 文件路径 |
| `query` | str | "" | 搜索关键词 |
| `limit` | int | 100 | 导出数量限制 |

##### 示例

```python
result = client.export_memories(
    "export.json",
    query="Python",
    limit=50
)
print(f"导出了 {result['exported_count']} 条记忆")
```

---

## 数据模型

### WriteMemoryRequest

```python
class WriteMemoryRequest(BaseModel):
    user_id: str
    content: str
    memory_type: Literal["storage", "thinking", "skill"] = "storage"
    project_id: Optional[str] = None
    scope: Literal["project", "global"] = "project"
    source_memories: List[str] = Field(default_factory=list)
    session_id: Optional[str] = None
    tags: List[str] = Field(default_factory=list)
    title: Optional[str] = None
    keywords: List[str] = Field(default_factory=list)
```

### ReadMemoryRequest

```python
class ReadMemoryRequest(BaseModel):
    user_id: str
    query: str
    limit: int = 10
    memory_type: Optional[Literal["storage", "thinking", "skill", "all"]] = "all"
    project_id: Optional[str] = None
```

### DeleteMemoryRequest

```python
class DeleteMemoryRequest(BaseModel):
    memory_id: str
    user_id: str
```

---

## 高级用法

### 异步操作

SDK 内部使用异步操作，但对外提供同步接口。

### 自定义错误处理

```python
from mcp_memory import MemoryClient
import httpx

try:
    client = MemoryClient(mode="remote")
    result = client.write_memory(...)
except httpx.HTTPStatusError as e:
    print(f"HTTP 错误: {e.response.status_code}")
    print(f"错误内容: {e.response.text}")
except Exception as e:
    print(f"其他错误: {e}")
finally:
    client.close()
```

### 重试机制

对于网络请求，可以使用 tenacity 实现重试：

```python
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=2, max=10))
def safe_write_memory(client, **kwargs):
    return client.write_memory(**kwargs)
```

---

## 错误处理

### 常见错误

| 错误 | 说明 | 解决方案 |
|------|------|---------|
| `ImportError` | 本地模式缺少依赖 | 确保已安装完整包 |
| `httpx.ConnectError` | 无法连接服务器 | 检查服务器是否启动 |
| `httpx.HTTPStatusError` | HTTP 错误 | 检查状态码和错误信息 |

### 最佳错误处理实践

```python
from mcp_memory import MemoryClient

def safe_memory_operation():
    client = None
    try:
        client = MemoryClient(mode="remote")
        
        # 尝试操作
        result = client.write_memory(
            user_id="user_001",
            content="测试内容"
        )
        
        return {"success": True, "result": result}
        
    except Exception as e:
        return {"success": False, "error": str(e)}
    finally:
        if client:
            client.close()
```

---

## 最佳实践

### 1. 使用上下文管理器

```python
with MemoryClient(mode="local") as client:
    # 在这里使用 client
    pass
```

### 2. 合理使用批量操作

```python
# 不推荐：逐条写入
for item in items:
    client.write_memory(**item)

# 推荐：批量写入
client.batch_write(items)
```

### 3. 限制搜索结果数量

```python
# 不推荐：获取所有结果
memories = client.read_memory(query="...", limit=1000)

# 推荐：限制数量
memories = client.read_memory(query="...", limit=20)
```

### 4. 错误重试

对于重要的写入操作，实现重试机制：

```python
from tenacity import retry, stop_after_attempt

@retry(stop=stop_after_attempt(3))
def important_write(client, **kwargs):
    return client.write_memory(**kwargs)
```

### 5. 定期清理

定期删除不再需要的记忆：

```python
def cleanup_old_memories(client, user_id, days=30):
    # 获取旧记忆
    # 删除它们
    pass
```

---

## 相关文档

- [CLI 使用文档](./CLI_USAGE.md) - 命令行工具使用文档
- [README](../README.md) - 项目主文档
- [快速开始](../QUICK_START.md) - 快速入门指南
