"""遗忘机制 — 基于 Ebbinghaus 衰减曲线"""

import math
from datetime import datetime, timedelta


class ForgettingMechanism:
    def __init__(self):
        pass

    def calculate_decay(self, last_accessed: datetime, importance: float = 1.0) -> float:
        if isinstance(last_accessed, str):
            try:
                last_accessed = datetime.fromisoformat(last_accessed)
            except (ValueError, TypeError):
                last_accessed = datetime.now() - timedelta(days=1)
        hours_elapsed = max(0.01, (datetime.now() - last_accessed).total_seconds() / 3600)
        retention = math.exp(-hours_elapsed / (24 * importance * 7))
        return round(max(0.05, retention), 3)
