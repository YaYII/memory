# 三层记忆架构升级计划 (Memory System V2)

## 核心理念

**记忆系统应该自带智能**，而不是让AI智能体来做记忆管理工作。
- 输入：原始对话记录（自动存储）
- 处理：记忆系统自动总结、提炼
- 输出：精炼的总结信息给AI智能体
- 目标：降低AI智能体思考时间，提高响应效率

---

## 三层记忆架构

### 1. 存储记忆 (Storage Memory)
**职责**：保存所有原始对话记录

**特点**：
- 数据量大，完整保留对话历史
- 自动存储，无需AI干预
- 作为"事实来源"，可随时回溯

**数据结构**：
```json
{
  "memory_id": "uuid",
  "type": "storage",
  "content": "原始对话内容",
  "timestamp": "2026-03-13T12:00:00",
  "session_id": "对话会话ID",
  "participants": ["user", "ai"],
  "metadata": {
    "topic": "对话主题",
    "importance": 5
  }
}
```

---

### 2. 思维记忆 (Thinking Memory)
**职责**：对话的阶段性总结

**特点**：
- 定期或触发式自动总结
- 压缩存储记忆，提取关键信息
- 支持链接回原始存储记忆

**数据结构**：
```json
{
  "memory_id": "uuid",
  "type": "thinking",
  "content": "对话总结内容",
  "source_memories": ["storage_memory_id_1", "storage_memory_id_2"],
  "timestamp": "2026-03-13T12:00:00",
  "summary_type": "session|daily|weekly",
  "key_points": ["要点1", "要点2"],
  "metadata": {
    "confidence": 0.95,
    "version": 1
  }
}
```

---

### 3. 技能记忆 (Skill Memory)
**职责**：提取可复用的知识和技能

**特点**：
- 高度压缩的知识单元
- 跨会话、跨项目复用
- 支持版本管理和更新

**数据结构**：
```json
{
  "memory_id": "uuid",
  "type": "skill",
  "content": "技能描述",
  "source_thinking": ["thinking_memory_id"],
  "skill_type": "coding|config|workflow|knowledge",
  "tags": ["python", "async", "best-practice"],
  "timestamp": "2026-03-13T12:00:00",
  "usage_count": 10,
  "effectiveness": 0.9,
  "metadata": {
    "verified": true,
    "author": "system"
  }
}
```

---

## 工作流程

### 写入流程
```
对话发生
    ↓
[存储记忆] 自动保存原始记录
    ↓
[思维记忆] 记忆系统自动总结（异步）
    ↓
[技能记忆] 提取可复用知识（异步）
```

### 查询流程
```
AI智能体查询
    ↓
[技能记忆] 快速匹配相关技能
    ↓
[思维记忆] 获取上下文总结
    ↓
(可选) [存储记忆] 回溯原始对话
    ↓
返回精炼信息给AI智能体
```

---

## 实施计划

### Phase 1: 基础架构改造
- [ ] 扩展 MemoryItem 模型，支持 `type` 字段
- [ ] 创建三层记忆的存储集合
- [ ] 实现记忆之间的链接关系

### Phase 2: 自动总结系统
- [ ] 实现存储记忆 → 思维记忆的自动总结
- [ ] 实现思维记忆 → 技能记忆的自动提取
- [ ] 添加总结触发器（时间/数量阈值）

### Phase 3: 智能查询系统
- [ ] 实现分层查询接口
- [ ] 优先查询技能记忆，其次思维记忆
- [ ] 支持回溯到存储记忆

### Phase 4: 反馈与修正
- [ ] AI智能体可以标记记忆不准确
- [ ] 支持手动更新思维记忆和技能记忆
- [ ] 实现记忆版本管理

---

## 技术实现要点

### 1. 记忆链接机制
```python
class MemoryLink:
    source_id: str      # 源记忆ID
    target_id: str      # 目标记忆ID
    link_type: str      # "summarized_from" | "extracted_from" | "related_to"
    confidence: float   # 链接置信度
```

### 2. 自动总结策略
- **实时总结**：单条对话超过1000字符时触发
- **定时总结**：每30分钟总结一次会话
- **批量总结**：每天凌晨总结前一天的所有对话

### 3. 查询优化
- 技能记忆：使用向量检索 + 标签匹配
- 思维记忆：使用关键词 + 时间范围
- 存储记忆：使用全文检索 + 会话ID

---

## 与现有系统的兼容性

- 保持现有的 `write_memory` 和 `read_memory` 接口
- 新增 `write_storage_memory` 用于原始记录
- 新增 `query_skill_memory` 用于快速查询
- 后台自动处理总结和提取

---

## 预期收益

1. **降低AI思考时间**：直接获取精炼信息，无需自己总结
2. **提高响应速度**：技能记忆快速匹配
3. **知识可复用**：跨项目、跨会话复用技能
4. **可追溯性**：随时回溯到原始对话
5. **可修正性**：不准确的总结可以被标记和修正
