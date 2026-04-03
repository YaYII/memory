#!/usr/bin/env python3
"""
记忆系统种子数据导入脚本

用途：在新环境中首次运行时，自动写入 CLI 使用技能、系统架构、开发规划等基础记忆。
其他 AI 智能体克隆项目后运行此脚本即可开始使用。

运行方式：
    .venv/bin/python seed_memories.py
"""

import sys
from pathlib import Path

project_root = Path(__file__).parent
sys.path.insert(0, str(project_root / "src"))

from mcp_memory.memory.manager import MemoryManager


def seed_memories():
    """写入基础记忆数据"""
    manager = MemoryManager()
    
    seeds = [
        {
            "user_id": "system",
            "content": """【技能名称】写入记忆（write）
【用途】将重要信息保存到记忆系统，供后续会话检索
【命令格式】
mcp-memory-local write "记忆内容" --title "标题" --keywords "关键词1,关键词2" --scope project --user <user_id> --json --quiet

【参数说明】
- 记忆内容（必填）：要保存的信息
- --title, -t：记忆标题（建议提供，便于检索）
- --keywords, -k：关键词，逗号分隔（建议3-5个）
- --scope, -s：作用域，project（项目专属，默认）或 global（跨项目共享）
- --user, -u：用户ID（默认default_user）
- --type：内容类型，note（默认）| code | config | workflow | task
- --json：输出JSON格式（AI智能体必须使用）
- --quiet, -q：静默模式，仅输出JSON到stdout

【AI使用场景】
1. 用户告知项目配置 → 写入project scope
2. 用户表达编程偏好 → 写入global scope
3. 总结对话要点 → 写入project scope
4. 提取可复用知识点 → 写入global scope

【JSON输出示例】
{"status":"success","memory_id":"abc123...","title":"标题","scope":"project","keywords":["key1","key2"]}

【注意事项】
- 写入前建议先用 check-duplicate 检查是否已存在相似记忆
- 内容必须使用简体中文（除非是代码或技术术语）
- scope=global 用于跨项目通用的知识/偏好""",
            "scope": "global",
            "title": "记忆系统CLI - 写入记忆技能",
            "keywords": ["write", "写入记忆", "保存记忆", "CLI命令"],
            "content_type": "note",
        },
        {
            "user_id": "system",
            "content": """【技能名称】搜索记忆（read）
【用途】根据查询内容检索相关记忆
【命令格式】
mcp-memory-local read "查询内容" --top-k 5 --scope project --type storage --user <user_id> --json --quiet

【参数说明】
- 查询内容（必填）：搜索关键词或语义查询
- --top-k, -k：返回结果数量（默认5）
- --scope, -s：按作用域过滤，project 或 global
- --type, -t：按记忆类型过滤，storage 或 thinking 或 skill
- --user, -u：用户ID
- --json：输出JSON格式（AI智能体必须使用）
- --quiet, -q：静默模式

【AI使用场景】
1. 开始新任务前 → 搜索项目相关记忆
2. 回答用户问题时 → 搜索用户偏好记忆
3. 编写代码前 → 搜索项目配置和技术栈记忆
4. 解决bug时 → 搜索相关历史经验

【JSON输出示例】
{"status":"success","query":"查询","count":2,"memories":[{"content":"...","title":"...","score":0.95,"memory_type":"storage","timestamp":"...","id":"...","scope":"project"}],"profiles":[]}

【注意事项】
- 搜索结果按综合评分排序（向量+关键词+时间+重要性）
- score > 0.8 表示高度相关
- 同时检索项目记忆和全局记忆""",
            "scope": "global",
            "title": "记忆系统CLI - 搜索记忆技能",
            "keywords": ["read", "搜索记忆", "检索", "查询", "CLI命令"],
            "content_type": "note",
        },
        {
            "user_id": "system",
            "content": """【技能名称】列出记忆（list）
【用途】浏览记忆库中的记忆列表
【命令格式】
mcp-memory-local list --type all --scope project --limit 20 --user <user_id> --json --quiet

【参数说明】
- --type, -t：记忆类型，all（默认）| storage | thinking | skill
- --scope, -s：作用域过滤，project 或 global
- --limit, -l：显示数量（默认20）
- --user, -u：用户ID
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 用户询问"我有哪些记忆" → 使用list
2. 查看特定类型的记忆 → --type skill 查看技能记忆
3. 浏览全局偏好 → --scope global

【JSON输出示例】
{"status":"success","count":5,"memories":[{"memory_id":"...","content":"...","memory_type":"storage","title":"...","scope":"project","timestamp":"...","keywords":[],"tags":[]}]}""",
            "scope": "global",
            "title": "记忆系统CLI - 列出记忆技能",
            "keywords": ["list", "列出记忆", "浏览记忆", "CLI命令"],
            "content_type": "note",
        },
        {
            "user_id": "system",
            "content": """【技能名称】查看记忆详情（show）
【用途】查看某条记忆的完整信息
【命令格式】
mcp-memory-local show <memory_id> --json --quiet

【参数说明】
- memory_id（必填）：记忆ID（可用完整ID或前缀）
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 搜索结果中看到某条记忆 → 用show查看完整内容
2. 用户询问某条记忆的详细信息

【JSON输出示例】
{"status":"success","memory":{"memory_id":"...","content":"完整内容","title":"...","memory_type":"storage","user_id":"...","scope":"project","timestamp":"...","keywords":[],"tags":[],"content_type":"note"}}""",
            "scope": "global",
            "title": "记忆系统CLI - 查看记忆详情技能",
            "keywords": ["show", "记忆详情", "查看记忆", "CLI命令"],
            "content_type": "note",
        },
        {
            "user_id": "system",
            "content": """【技能名称】更新记忆（update）
【用途】修改已有记忆的内容或元数据
【命令格式】
mcp-memory-local update <memory_id> "新内容" --title "新标题" --keywords "新关键词" --user <user_id> --json --quiet

【参数说明】
- memory_id（必填）：记忆ID
- 新内容（必填）：更新后的记忆内容
- --title, -t：新标题（可选）
- --keywords, -k：新关键词，逗号分隔（可选）
- --user, -u：用户ID
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 用户纠正了之前的信息 → 更新对应记忆
2. 项目配置变更 → 更新配置记忆
3. 补充记忆内容 → 追加或修改内容

【JSON输出示例】
{"status":"success","memory_id":"abc123...","message":"Memory updated"}""",
            "scope": "global",
            "title": "记忆系统CLI - 更新记忆技能",
            "keywords": ["update", "更新记忆", "修改记忆", "CLI命令"],
            "content_type": "note",
        },
        {
            "user_id": "system",
            "content": """【技能名称】删除记忆（delete）
【用途】删除不再需要的记忆
【命令格式】
mcp-memory-local delete <memory_id> --force --user <user_id> --json --quiet

【参数说明】
- memory_id（必填）：记忆ID
- --force, -f：强制删除，跳过确认提示（AI必须使用）
- --user, -u：用户ID
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 用户要求删除某条记忆
2. 清理过期/错误的记忆
3. 记忆合并后删除源记忆

【注意】AI调用时必须加 --force 参数，否则会进入交互确认模式

【JSON输出示例】
{"status":"success","memory_id":"abc123...","message":"Deleted"}""",
            "scope": "global",
            "title": "记忆系统CLI - 删除记忆技能",
            "keywords": ["delete", "删除记忆", "CLI命令"],
            "content_type": "note",
        },
        {
            "user_id": "system",
            "content": """【技能名称】检查重复记忆（check-duplicate）
【用途】写入新记忆前检查是否已存在相似内容
【命令格式】
mcp-memory-local check-duplicate "要检查的内容" --threshold 0.95 --user <user_id> --json --quiet

【参数说明】
- 内容（必填）：要检查是否重复的内容
- --threshold：相似度阈值，0.0-1.0（默认0.95）
- --user, -u：用户ID
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 写入记忆前 → 先检查是否已存在，避免重复
2. 用户告知信息 → 检查是否已经记录过

【推荐工作流】
# 1. 先检查重复
mcp-memory-local check-duplicate "项目使用FastAPI" --threshold 0.9 --json --quiet
# 2. 如果 has_duplicates=false，则写入
mcp-memory-local write "项目使用FastAPI框架" --title "项目框架" --json --quiet

【JSON输出示例】
{"status":"success","query":"内容","threshold":0.95,"has_duplicates":false,"duplicates":[],"similar":[{"content":"...","score":0.7}]}""",
            "scope": "global",
            "title": "记忆系统CLI - 重复检测技能",
            "keywords": ["check-duplicate", "重复检测", "相似检测", "去重", "CLI命令"],
            "content_type": "note",
        },
        {
            "user_id": "system",
            "content": """【技能名称】系统统计（stats）
【用途】查看记忆系统的统计信息
【命令格式】
mcp-memory-local stats --json --quiet

【参数说明】
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 用户询问"我有多少记忆"
2. 了解记忆系统状态

【JSON输出示例】
{"status":"success","total_memories":50,"storage_count":30,"thinking_count":15,"skill_count":5,"data_path":"/home/user/.mcp_memory/chroma"}""",
            "scope": "global",
            "title": "记忆系统CLI - 系统统计技能",
            "keywords": ["stats", "统计", "记忆数量", "CLI命令"],
            "content_type": "note",
        },
        {
            "user_id": "system",
            "content": """【技能名称】深度反思（reflect）
【用途】触发记忆系统的自我整理和优化
【命令格式】
mcp-memory-local reflect --user <user_id> --json --quiet

【参数说明】
- --user, -u：用户ID
- --json：输出JSON格式
- --quiet, -q：静默模式

【AI使用场景】
1. 长时间工作后 → 触发反思，整理记忆
2. 记忆库变得混乱时 → 触发去重和合并
3. 任务完成时 → 触发反思总结

【作用】
- 将原始存储记忆蒸馏为思维记忆
- 从思维记忆提取可复用的技能记忆
- 合并重复记忆

【JSON输出示例】
{"status":"success","message":"Reflection completed","result":{"new_thinking":2,"new_skills":1}}""",
            "scope": "global",
            "title": "记忆系统CLI - 深度反思技能",
            "keywords": ["reflect", "深度反思", "记忆整理", "自我优化", "CLI命令"],
            "content_type": "note",
        },
        {
            "user_id": "system",
            "content": """【AI智能体使用记忆系统的最佳实践】

【1. 开始对话时】
# 搜索项目相关记忆和用户偏好
mcp-memory-local read "项目配置 技术栈" --top-k 5 --json --quiet
mcp-memory-local read "用户偏好 编程习惯" --scope global --top-k 3 --json --quiet

【2. 写入信息前】
# 先检查重复
mcp-memory-local check-duplicate "要写入的内容" --threshold 0.9 --json --quiet
# 如果没有重复，再写入
mcp-memory-local write "内容" --title "标题" --keywords "关键词" --scope project --json --quiet

【3. 什么时候用 project scope】
- 项目特定的配置、技术栈、架构决策
- 当前任务的上下文和进展
- 项目相关的bug和解决方案

【4. 什么时候用 global scope】
- 用户的编程偏好和习惯
- 通用的技术知识和最佳实践
- 跨项目可复用的经验

【5. 什么时候用 check-duplicate】
- 每次写入前都应该检查
- 阈值建议用 0.9（宽松）到 0.95（严格）

【6. 什么时候用 reflect】
- 长时间会话结束时
- 记忆库积累较多时（>50条）
- 用户要求整理记忆时

【7. 重要：所有AI调用都必须加 --json --quiet】
这确保输出是纯JSON，没有其他干扰文本""",
            "scope": "global",
            "title": "记忆系统CLI - AI智能体最佳实践",
            "keywords": ["最佳实践", "AI使用指南", "工作流", "使用规范"],
            "content_type": "note",
        },
        {
            "user_id": "system",
            "content": """【系统架构】
本项目是一个 AI 记忆系统，采用 CLI-first 设计模式，废弃了旧的 MCP 协议模式。

【核心模块】
1. src/mcp_memory/cli_local.py - 本地 CLI 工具（主要使用方式，无需服务器）
   - write: 写入记忆
   - read: 搜索记忆（混合索：向量+BM25+图谱）
   - list: 列出记忆
   - show: 查看记忆详情
   - update: 更新记忆
   - delete: 删除记忆
   - check-duplicate: 重复/相似检测
   - stats: 系统统计
   - reflect: 深度反思（触发进化引擎）
   - bootstrap-skills: 将 CLI 使用技能写入记忆
   - interactive: 交互式 TUI 模式
   所有命令支持 --json --quiet 参数，输出机器可读的 JSON

2. src/mcp_memory/cli.py - HTTP API CLI 客户端（需要服务器）
   - 通过 HTTP 调用后端 API
   - 包含 server start/stop/status 管理

3. src/mcp_memory/server.py - FastAPI HTTP 服务器
   - REST API: /memory/write, /memory/read, /memory/delete, /memory/reflect
   - 三层记忆 API: /tiered/storage/write, /tiered/thinking/write, /tiered/skill/write
   - 仪表盘: /dashboard/stats, /dashboard/evolution/status
   - 健康检查: /health
   - 静态文件: /static (原生 HTML), /vue (Vue 前端)

4. src/mcp_memory/memory/manager.py - 记忆管理器
   - 统一写入入口，调用 MemoryStore
   - 后台 LLM 增强（enhance_memory_background）

5. src/mcp_memory/memory/long_term.py - 统一存储层
   - ChromaDB 向量存储
   - BM25 关键词索引（jieba 中文分词）
   - NetworkX 知识图谱
   - 混合搜索评分: 0.4*Vector + 0.25*Keyword + 0.2*Recency + 0.1*Importance + 0.05*Instinct
   - 自动去重（相似度>0.95则强化旧记忆）
   - 三层记忆: storage/thinking/skill

6. src/mcp_memory/memory/tiered_evolution.py - 三层记忆进化引擎
   - Storage -> Thinking: 原始记忆蒸馏为语义经验
   - Thinking -> Skill: 从经验中提取可复用技能
   - 按项目/作用域分组处理

7. src/mcp_memory/llm/ - LLM 提供商适配层
   - 支持 DeepSeek, OpenAI, Anthropic, GLM
   - Token 池管理（日/月限额）
   - 优先级路由

8. src/mcp_memory/core/config.py - 配置管理
   - Pydantic Settings，环境变量优先
   - 自动项目 ID 生成（CWD 路径哈希）

【数据存储】
- 向量数据: ~/.mcp_memory/chroma/
- 知识图谱: ~/.mcp_memory/chroma/knowledge_graph.json
- 数据持久化，服务关闭不丢失

【已废弃】
- src/mcp_memory/main.py (MCP bridge) - 已删除
- mcp[cli] 依赖 - 已从 pyproject.toml 移除""",
            "scope": "global",
            "title": "系统架构与功能说明",
            "keywords": ["系统架构", "功能模块", "CLI工具", "存储层", "三层记忆"],
            "content_type": "note",
        },
        {
            "user_id": "system",
            "content": """【技术栈】
- Python >= 3.10
- FastAPI + Uvicorn (HTTP 服务)
- ChromaDB (向量数据库)
- NetworkX (知识图谱)
- rank-bm25 + jieba (关键词搜索)
- Pydantic v2 (数据验证)
- Typer + Rich (CLI)
- Textual (TUI)
- DeepSeek / OpenAI / Anthropic / GLM (LLM)
- sentence-transformers (向量嵌入)

【构建工具】
- hatchling (构建系统)
- ruff (代码风格)
- pytest (测试)
- mypy (类型检查)

【CLI 入口】
- mcp-memory-local: 本地直接操作（推荐）
- mcp-memory-cli: HTTP API 客户端
- memory: TUI 交互界面""",
            "scope": "global",
            "title": "技术栈和依赖",
            "keywords": ["技术栈", "依赖", "Python", "FastAPI", "ChromaDB"],
            "content_type": "note",
        },
        {
            "user_id": "system",
            "content": """【项目后续开发规划】

【P0 - 高优先级】
1. 完善测试覆盖：为 CLI 命令和核心存储层编写单元测试
2. 优化 ChromaDB 查询性能：大规模记忆下的检索优化
3. 完善错误处理：CLI 命令的错误提示更友好
4. 数据迁移工具：提供从旧版 MCP 模式迁移的脚本

【P1 - 中优先级】
5. 记忆标签系统增强：支持多标签组合查询
6. 记忆版本历史：记录每次修改的历史
7. 记忆导出/导入：支持 JSON 格式备份和恢复
8. CLI 命令补全：typer 的 shell completion 支持
9. 日志系统增强：结构化日志输出，支持 JSON 格式

【P2 - 低优先级】
10. TUI 界面增强：更友好的交互体验
11. Web 仪表盘增强：Vue 前端功能完善
12. 多用户支持：更好的权限和隔离机制
13. 记忆热度衰减策略优化：更智能的遗忘机制
14. 插件系统：支持自定义记忆处理器

【开发规范】
- 代码风格：ruff format + ruff check
- 类型检查：mypy
- 测试：pytest tests/
- 提交前运行：ruff check src/ && ruff format src/

【注意事项】
- 数据目录 ~/.mcp_memory/chroma/ 不在 git 中，需要用户自行配置或自动创建
- .env 文件不在 git 中，新用户需复制 .env.example 并配置
- 至少需要一个 LLM API Key 才能使用自动增强和进化功能""",
            "scope": "global",
            "title": "项目后续开发规划",
            "keywords": ["开发规划", "roadmap", "待办事项", "优先级"],
            "content_type": "note",
        },
    ]
    
    written = []
    for seed in seeds:
        memory_id = manager.write_memory(
            user_id=seed["user_id"],
            content=seed["content"],
            project_id="",
            scope=seed["scope"],
            title=seed["title"],
            keywords=seed["keywords"],
            content_type=seed["content_type"],
            auto_enhance=False,
        )
        written.append({"title": seed["title"], "memory_id": memory_id})
    
    print(f"✅ 成功写入 {len(written)} 条种子记忆：")
    for w in written:
        print(f"  - {w['title']} → {w['memory_id'][:12]}...")
    print(f"\n💡 其他 AI 智能体现在可以使用以下命令检索这些技能：")
    print(f'   mcp-memory-local read "CLI使用" --type note --json --quiet')
    print(f'   mcp-memory-local read "最佳实践" --type note --json --quiet')


if __name__ == "__main__":
    seed_memories()
