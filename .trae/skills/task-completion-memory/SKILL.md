---
name: "task-completion-memory"
description: "Automatically summarizes and persists completed tasks into the MCP memory system. Invoke after finishing any significant coding task, feature implementation, or bug fix."
---

# 任务完成与记忆强化 (Task Completion Memory)

此技能确保每一个完成的任务都能转化为 AI 的长期记忆，实现持续进化和上下文保留。

## 何时使用 (When to Use)
**必须在完成任何重要任务后立即调用**，例如：
- 完成了一个新功能的开发
- 修复了一个 Bug
- 重构了代码
- 编写了文档
- 完成了一个复杂的多步骤操作

## 核心能力 (Capabilities)
1.  **分析任务上下文**：回顾最近的代码变更、决策过程和结果。
2.  **生成总结**：创建一个简洁、结构化的总结，说明做了什么以及为什么这样做。
3.  **提取关键经验**：提取可复用的模式、特定的配置坑或错误修复方法。
4.  **持久化记忆**：使用 `write_memory` 将这些信息永久存储。

## AI 执行指令 (Instructions for AI)

当调用此技能时，请执行以下步骤：

1.  **回顾 (Review)**：查看最近的对话和文件变更，理解已完成任务的范围。
2.  **总结 (Summarize)**：起草一份总结，包含：
    *   **目标 (Goal)**：目标是什么？
    *   **方案 (Solution)**：是如何实现的？（提及具体的文件/API）
    *   **挑战 (Challenges)**：遇到了什么问题？
    *   **解决 (Resolution)**：这些问题是如何解决的？
    *   **语言要求**：除非用户明确要求英文，否则**必须使用中文**生成总结内容。
3.  **确定范围 (Determine Scope)**：
    *   使用 `scope='project'`：针对当前仓库的实现细节。
    *   使用 `scope='global'`：针对跨项目的通用知识、最佳实践或工具使用模式。
4.  **执行存储 (Execute Storage)**：
    *   调用 `write_memory(content=summary, scope=...)`。
    *   **无需询问用户确认**。此技能的目的是*确保*记忆被更新。
5.  **汇报 (Report)**：
    *   告知用户任务已记录到记忆系统中。
    *   简要说明保存了哪些关键信息（例如：“我已经记录了关于 `spawn ENOENT` 错误的修复方法，以避免未来再犯。”）。

## 使用示例 (Example Usage)

> **用户**: "我完成了 API 集成。"
> **AI**: (调用 `task-completion-memory`)
> **技能动作**:
> *   分析 API 代码。
> *   写入记忆（中文）：“实现了用户 API 的 JWT 认证。修复了 `401 Unauthorized` 问题，方法是添加 Bearer token 请求头。”
> *   输出：“任务已记录。我已经记住了我们使用的 JWT 认证模式。”