from typing import Dict, List, Tuple

class SimpleBufferWindowMemory:
    """
    简易的滑动窗口记忆实现（替代LangChain组件）
    """
    def __init__(self, k: int = 5):
        self.k = k
        self.chat_memory: List[Tuple[str, str]] = []

    def save_context(self, inputs: Dict[str, str], outputs: Dict[str, str]):
        """
        保存对话上下文
        """
        input_str = inputs.get("input", "")
        output_str = outputs.get("output", "")
        self.chat_memory.append((input_str, output_str))
        if len(self.chat_memory) > self.k:
            self.chat_memory = self.chat_memory[-self.k:]

    def load_memory_variables(self, inputs: Dict) -> Dict[str, str]:
        """
        加载记忆变量（格式化为字符串）
        """
        buffer = []
        for inp, out in self.chat_memory:
            buffer.append(f"Human: {inp}")
            buffer.append(f"AI: {out}")
        return {"history": "\n".join(buffer)}

class ShortTermMemory:
    """
    短期记忆管理器
    """
    def __init__(self, k: int = 5):
        # 键：user_id -> 值：Memory实例
        self._memories: Dict[str, SimpleBufferWindowMemory] = {}
        self.k = k

    def get_memory(self, user_id: str) -> SimpleBufferWindowMemory:
        """
        获取用户的短期记忆实例
        """
        if user_id not in self._memories:
            self._memories[user_id] = SimpleBufferWindowMemory(k=self.k)
        return self._memories[user_id]

    def add_interaction(self, user_id: str, input_text: str, output_text: str):
        """
        添加一次交互记录
        """
        memory = self.get_memory(user_id)
        memory.save_context({"input": input_text}, {"output": output_text})

    def get_context(self, user_id: str) -> str:
        """
        获取上下文内容
        """
        memory = self.get_memory(user_id)
        # 加载记忆变量
        messages = memory.load_memory_variables({})
        if "history" in messages:
            return str(messages["history"])
        return ""
