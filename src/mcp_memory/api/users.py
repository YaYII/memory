"""
用户管理 API 路由
GET /users/list      — 列出所有用户
DELETE /users/delete  — 删除用户及其数据
GET /usage/stats      — 获取使用统计
"""

import logging
from fastapi import APIRouter, Request, HTTPException
from typing import List, Dict, Any
from datetime import datetime, timedelta

from mcp_memory.server_state import get_state

logger = logging.getLogger("mcp-memory.api.users")
router = APIRouter(prefix="/users", tags=["Users"])


@router.get("/list")
async def list_users(request: Request):
    """列出系统中的所有用户"""
    state = get_state(request)
    try:
        users = state.memory_manager.store.get_all_users()
        return {"users": users}
    except Exception as e:
        logger.error("Failed to list users: %s", e)
        raise HTTPException(status_code=500, detail=str(e))


@router.delete("/delete")
async def delete_user(user_id: str, request: Request, force: bool = False):
    """删除用户及其所有记忆数据"""
    state = get_state(request)
    try:
        success = state.memory_manager.store.delete_user(user_id, force=force)
        if success:
            return {"status": "deleted", "user_id": user_id}
        else:
            raise HTTPException(status_code=404, detail="User not found")
    except Exception as e:
        logger.error("Failed to delete user: %s", e)
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/usage")
async def get_usage(user_id: str, request: Request, period: str = "7d"):
    """获取用户使用统计"""
    state = get_state(request)
    try:
        usage = state.memory_manager.store.get_user_usage(user_id, period)
        return usage
    except Exception as e:
        logger.error("Failed to get usage: %s", e)
        raise HTTPException(status_code=500, detail=str(e))
