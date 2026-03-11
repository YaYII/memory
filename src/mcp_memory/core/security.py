import json
import os
from typing import Dict, List, Optional
from app.models.data_models import TeamInfo
from datetime import datetime

class TeamManager:
    """
    团队权限和成员管理器（基于本地JSON文件存储）
    """
    def __init__(self, storage_path: str = "data/teams.json"):
        self.storage_path = storage_path
        self._teams: Dict[str, TeamInfo] = {}
        self._load_teams()

    def _load_teams(self):
        """
        从文件加载团队数据
        """
        if not os.path.exists(self.storage_path):
            return
        try:
            with open(self.storage_path, "r", encoding="utf-8") as f:
                content = f.read().strip()
                if not content:
                    return
                data = json.loads(content)
                for tid, tinfo in data.items():
                    # Pydantic自动处理datetime字段
                    self._teams[tid] = TeamInfo(**tinfo)
        except Exception as e:
            print(f"加载团队数据失败: {e}")
            self._teams = {}

    def _save_teams(self):
        """
        保存团队数据到文件
        """
        data = {}
        for tid, tinfo in self._teams.items():
            # 兼容Pydantic v2
            t_dict = tinfo.model_dump() if hasattr(tinfo, "model_dump") else tinfo.dict()
            # 序列化datetime
            if "create_time" in t_dict and isinstance(t_dict["create_time"], datetime):
                t_dict["create_time"] = t_dict["create_time"].isoformat()
            data[tid] = t_dict
        
        os.makedirs(os.path.dirname(self.storage_path), exist_ok=True)
        with open(self.storage_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

    def get_team(self, team_id: str) -> Optional[TeamInfo]:
        """
        根据ID获取团队信息
        """
        return self._teams.get(team_id)

    def create_team(self, team_info: TeamInfo):
        """
        创建新团队
        """
        self._teams[team_info.team_id] = team_info
        self._save_teams()

    def add_member(self, team_id: str, user_id: str, operator_id: str) -> bool:
        """
        添加团队成员
        
        Args:
            team_id: 团队ID
            user_id: 待添加用户ID
            operator_id: 操作人ID（需为管理员或创建者）
        """
        team = self.get_team(team_id)
        if not team:
            return False
        # 权限检查
        if operator_id != team.creator and operator_id not in team.admins:
            return False
        
        if user_id not in team.members:
            team.members.append(user_id)
            self._save_teams()
        return True

    def remove_member(self, team_id: str, user_id: str, operator_id: str) -> bool:
        """
        移除团队成员
        """
        team = self.get_team(team_id)
        if not team:
            return False
        if operator_id != team.creator and operator_id not in team.admins:
            return False
            
        if user_id in team.members:
            team.members.remove(user_id)
            self._save_teams()
        return True

    def is_member(self, team_id: str, user_id: str) -> bool:
        """
        检查用户是否为团队成员
        """
        team = self.get_team(team_id)
        if not team:
            return False
        return user_id in team.members

team_manager = TeamManager()
