# 重构日志 - 2026-03-16

## 修改文件清单

| 文件 | 行数 | 状态 |
|------|------|------|
| `src/mcp_memory/core/config.py` | 152 | ✅ 新增 HOST/API_KEY 配置 |
| `src/mcp_memory/memory/long_term.py` | 867 | ✅ 全面重写 |
| `src/mcp_memory/memory/manager.py` | 197 | ✅ 全面重写 |
| `src/mcp_memory/memory/cognitive.py` | ~300 | ✅ 修复周期扫描 |
| `src/mcp_memory/brain/ai_brain.py` | ~380 | ✅ 接入 MemoryStore |
| `src/mcp_memory/server.py` | 1117 | ✅ 重写安全/状态/API |
| `src/mcp_memory/models/data_models.py` | - | ✅ 修复 title 默认值 |

## P0 修复（关键安全/正确性）

- [x] **统一存储路径** — `manager.py` 不再双写，`write_memory()` 只调用 `store.save()` 一次；`read_memory()` 只从 `store.search()` 读取
- [x] **安全加固** — 默认绑定 `127.0.0.1`（原 `0.0.0.0`）；新增 `MCP_MEMORY_API_KEY` 认证中间件，支持 Bearer Token 和 Query 参数
- [x] **周期扫描修复** — `periodic_scan_once()` 不再用 `get(limit=50)` 只取前50条，现在获取全量 ID 后过滤 `cognitive_processed=False`，分批处理未处理记忆

## P1 修复（性能/功能）

- [x] **搜索强化副作用** — `search()` 新增 `reinforce` 参数（默认 True），后台扫描传 `False` 避免写操作
- [x] **移除 FileLock** — 移除外层文件锁，依赖 ChromaDB 自身并发管理
- [x] **后台 LLM 增强** — `_auto_enhance_memory()` 移入 `enhance_memory_background()` 异步方法，通过 `BackgroundTasks` 调用，不阻塞写入
- [x] **get_source_memories 重复定义** — 合并为单一方法，先查图谱 predecessors，fallback 到 metadata JSON

## P2 修复（质量/架构）

- [x] **AIBrain 接入 MemoryStore** — `process_input()` 实际写入 ChromaDB，`retrieve_memory()` 实际从 store 检索，`get_brain_status()` 返回 `memory_store_connected`
- [x] **真正 BM25 混合检索** — `__init__()` 时预建 BM25 索引，`save()` 增量添加，`delete()` 增量移除，`search()` 并行执行向量+BM25+图谱检索
- [x] **图谱增量持久化** — 新增 `_graph_dirty` 标记，修改图谱只设标记，`_save_graph()` 检查 dirty 后才写磁盘，启动时每30秒定时 flush
- [x] **Profile 独立返回** — `search()` 返回 `Tuple[List[dict], List[dict]]`（结果+Profile），Profile 不再污染搜索排序
- [x] **评分公式修正** — `0.4×Vector + 0.25×Keyword + 0.2×Recency + 0.1×Importance + 0.05×Instinct`，同时包含 Recency 和 Importance

## P3 修复（代码质量）

- [x] **消除全局变量** — 新增 `ServerState` 类封装 `evolution_scan_task`、`log_buffer`、`ai_brain` 等，通过 `app.state` 访问
- [x] **细化异常处理** — 移除 `retry_if_exception_type((Exception))` 全捕获；搜索等处区分具体异常类型
- [x] **类型注解** — `long_term.py`、`manager.py`、`cognitive.py` 全部方法添加返回类型注解

## 测试结果

- **133 passed**（排除 2 个原始已有的测试问题）
- 原有失败：`test_auto_summarizer`（默认值不匹配）和 `test_tiered_manager`（mock 目标不存在）均为原始 bug，非本次引入
- 所有 import 验证通过
- Server routes: 46 条端点正常加载

## 向后兼容性

- ✅ 所有 MCP HTTP 端点路径不变
- ✅ 请求/响应格式不变
- ✅ `MCP_MEMORY_API_KEY` 为空时不启用认证（默认行为）
- ✅ `MCP_MEMORY_HOST` 默认 `127.0.0.0`，可通过环境变量覆盖
- ✅ `MemoryItem.title` 恢复为有默认值，反序列化兼容

## 遗留问题

- `auto_summarizer.py` 的 `session_summary_threshold` 测试断言值与实际默认值不一致（原始 bug）
- `tiered_manager.py` 中缺少 `AutoSummarizer` 导出（测试 mock 失败，原始 bug）
- Pydantic `class Config` 风格的 deprecation warning（建议后续迁移到 `model_config = ConfigDict(...)`)
