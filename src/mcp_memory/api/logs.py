from fastapi import APIRouter
from datetime import datetime
from typing import List, Dict, Any, Callable

router = APIRouter(prefix="/logs", tags=["Logs"])

_system_logs: List[Dict[str, Any]] = []

_log_listeners: List[Callable] = []


def add_log(message: str, log_type: str = "info"):
    """添加系统日志"""
    timestamp = datetime.now().strftime("%H:%M:%S")
    log_entry = {
        "time": timestamp,
        "message": message,
        "type": log_type
    }
    _system_logs.append(log_entry)
    if len(_system_logs) > 100:
        _system_logs.pop(0)
    
    for listener in _log_listeners:
        try:
            listener(log_entry)
        except Exception:
            pass


def get_logs() -> List[Dict[str, Any]]:
    """获取所有日志"""
    return _system_logs[-50:]


def clear_logs():
    """清空日志"""
    _system_logs.clear()


@router.get("")
async def fetch_logs():
    """获取系统日志"""
    return get_logs()


@router.delete("")
async def clear_system_logs():
    """清空系统日志"""
    clear_logs()
    return {"status": "ok", "message": "日志已清空"}
