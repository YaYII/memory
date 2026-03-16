#!/usr/bin/env python3
"""
TUI交互式记忆系统主入口
基于textual库实现的命令行界面，支持AI智能体进行记忆系统的交互操作
"""

import asyncio
from pathlib import Path
from typing import Optional

from textual.app import App, ComposeResult
from textual.containers import Container, Horizontal, Vertical
from textual.widgets import (
    Header, Footer, Input, Button, TextArea, Static,
    ListView, ListItem, DataTable, Tabs,
    Label, Checkbox, Select, LoadingIndicator, Log
)
from textual.screen import Screen
from textual.reactive import reactive
from textual.binding import Binding
from textual.message import Message
from textual.timer import Timer
from textual import events

from mcp_memory.memory.manager import MemoryManager
from mcp_memory.memory.tiered_manager import TieredMemoryManager
from mcp_memory.models.data_models import MemoryItem
from mcp_memory.core.config import settings

import json
import uuid
from datetime import datetime
import logging

# 设置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class LoadingScreen(Screen):
    """加载屏幕"""

    def compose(self) -> ComposeResult:
        yield LoadingIndicator()
        yield Static("正在初始化记忆系统...", id="loading-text")


class MemoryDetailsScreen(Screen):
    """记忆详情查看屏幕"""

    memory_item: reactive[MemoryItem] = reactive(None)

    def compose(self) -> ComposeResult:
        with Container(id="memory-details"):
            yield Static("记忆详情", classes="title")
            yield Static(f"ID: {self.memory_item.id}", id="memory-id")
            yield Static(f"标题: {self.memory_item.title}", id="memory-title")
            yield Static(f"类型: {self.memory_item.content_type}", id="memory-type")
            yield Static(f"创建时间: {self.memory_item.timestamp}", id="memory-timestamp")
            yield Static(f"字符数: {self.memory_item.char_count}", id="memory-chars")
            yield Static("关键词:", id="keywords-label")
            yield Static(", ".join(self.memory_item.keywords), id="memory-keywords")
            yield Static("标签:", id="tags-label")
            yield Static(", ".join(self.memory_item.tags), id="memory-tags")
            yield Static("内容:", id="content-label")
            yield TextArea(self.memory_item.content, id="memory-content", read_only=True)
            yield Horizontal(
                Button("编辑", id="edit-btn", variant="primary"),
                Button("删除", id="delete-btn", variant="error"),
                Button("返回", id="back-btn"),
                classes="button-group"
            )


class SearchScreen(Screen):
    """搜索屏幕"""

    def compose(self) -> ComposeResult:
        with Container(id="search-container"):
            yield Static("搜索记忆", classes="title")
            yield Input(placeholder="输入搜索关键词...", id="search-input")
            yield Button("搜索", id="search-btn", variant="primary")
            yield Button("高级搜索", id="advanced-search-btn")
            yield ListView(id="search-results")
            yield Button("返回", id="back-btn")


class MemoryListWidget(ListView):
    """记忆列表组件"""

    def __init__(self, memories: list = None):
        super().__init__()
        self.memories = memories or []
        self.update_memories()

    def update_memories(self):
        """更新记忆列表"""
        self.clear()
        for memory in self.memories:
            item = ListItem(f"[{memory.content_type}] {memory.title[:50]}...")
            item.data = memory
            self.append(item)

    def get_selected_memory(self) -> Optional[MemoryItem]:
        """获取选中的记忆"""
        if self.highlighted is None:
            return None
        return self.highlighted.data


class TUIApp(App):
    """TUI主应用"""

    CSS_PATH = Path(__file__).parent / "simple_style.css"

    BINDINGS = [
        Binding("q", "quit", "退出"),
        Binding("n", "new_memory", "新建记忆"),
        Binding("s", "search", "搜索"),
        Binding("r", "refresh", "刷新"),
        Binding("h", "help", "帮助"),
        Binding("f", "fullscreen", "全屏"),
    ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.memory_manager = MemoryManager()
        self.tiered_manager = TieredMemoryManager(
            memory_store=self.memory_manager.store,
            data_path=settings.CHROMA_DATA_PATH
        )
        self.current_user = "cli_user"
        self.current_project = settings.MCP_PROJECT_ID
        self.memories = []
        self.search_results = []

        # 当前屏幕
        self.current_screen = "main"

    async def on_mount(self) -> None:
        """应用启动时初始化"""
        await self.push_screen(LoadingScreen())
        # 模拟加载延迟
        await asyncio.sleep(1)
        await self.refresh_memory_list()

    async def refresh_memory_list(self) -> None:
        """刷新记忆列表"""
        try:
            # 获取所有记忆
            self.memories = self.memory_manager.store.get_memories(
                user_id=self.current_user,
                project_id=self.current_project
            )
            # 更新UI
            if hasattr(self, 'memory_list'):
                self.memory_list.update_memories()
        except Exception as e:
            logger.error(f"刷新记忆列表失败: {e}")

    async def action_quit(self) -> None:
        """退出应用"""
        self.exit()

    async def action_new_memory(self) -> None:
        """新建记忆"""
        self.push_screen(NewMemoryScreen(self))

    async def action_search(self) -> None:
        """搜索记忆"""
        self.push_screen(SearchScreen())

    async def action_refresh(self) -> None:
        """刷新列表"""
        await self.refresh_memory_list()

    async def action_help(self) -> None:
        """显示帮助"""
        self.push_screen(HelpScreen())

    async def action_fullscreen(self) -> None:
        """切换全屏"""
        if self.fullscreen:
            self.exit_fullscreen()
        else:
            self.enter_fullscreen()

    def compose(self) -> ComposeResult:
        """构建UI"""
        yield Header()

        with Container(id="main-container"):
            # 左侧面板
            with Horizontal(classes="sidebar"):
                yield Static("记忆系统", id="logo")
                yield Static(f"用户: {self.current_user}", id="user-info")
                yield Static(f"项目: {self.current_project}", id="project-info")

                with Container(classes="stats"):
                    yield Static("统计", classes="section-title")
                    yield Static(f"总记忆: {len(self.memories)}", id="total-memories")
                    yield Static(f"今日新增: {len([m for m in self.memories if m.timestamp.date() == datetime.now().date()])}", id="today-memories")

                yield Button("新建", id="new-btn", variant="primary")
                yield Button("搜索", id="search-btn")
                yield Button("刷新", id="refresh-btn")
                yield Button("帮助", id="help-btn")

            # 右侧主内容区
            with Container(id="content-area"):
                yield Static("记忆列表", id="list-title")
                self.memory_list = MemoryListWidget(self.memories)
                yield self.memory_list

                yield Tabs(
                    "详情",
                    "图谱",
                    "统计",
                    "设置",
                    id="content-tabs"
                )

        yield Footer()

    def on_list_view_selected(self, event: ListView.Selected) -> None:
        """列表项选中事件"""
        memory = event.item.data
        if memory:
            self.push_screen(MemoryDetailsScreen(memory_item=memory))

    def on_button_pressed(self, event: Button.Pressed) -> None:
        """按钮点击事件"""
        if event.button.id == "new-btn":
            self.action_new_memory()
        elif event.button.id == "search-btn":
            self.action_search()
        elif event.button.id == "refresh-btn":
            self.action_refresh()
        elif event.button.id == "help-btn":
            self.action_help()


class NewMemoryScreen(Screen):
    """新建记忆屏幕"""

    def compose(self) -> ComposeResult:
        with Container(id="new-memory-container"):
            yield Static("新建记忆", classes="title")

            with Container(classes="form-group"):
                yield Static("标题:", classes="form-label")
                yield Input(placeholder="输入记忆标题...", id="title-input")

                yield Static("内容:", classes="form-label")
                yield TextArea(placeholder="输入记忆内容...", id="content-area")

                yield Static("类型:", classes="form-label")
                yield Select(
                    [("note", "笔记"), ("task", "任务"), ("idea", "想法"), ("meeting", "会议"), ("code", "代码")],
                    id="type-select",
                    value="note"
                )

                yield Static("关键词:", classes="form-label")
                yield Input(placeholder="关键词1, 关键词2...", id="keywords-input")

                yield Static("标签:", classes="form-label")
                yield Input(placeholder="标签1, 标签2...", id="tags-input")

                yield Checkbox("自动增强", value=True, id="auto-enhance")

            yield Horizontal(
                Button("保存", id="save-btn", variant="primary"),
                Button("取消", id="cancel-btn"),
                classes="button-group"
            )

    def on_button_pressed(self, event: Button.Pressed) -> None:
        if event.button.id == "save-btn":
            self.save_memory()
        elif event.button.id == "cancel-btn":
            self.app.pop_screen()

    def save_memory(self) -> None:
        """保存记忆"""
        title = self.query_one("#title-input", Input).value
        content = self.query_one("#content-area", TextArea).text
        memory_type = self.query_one("#type-select", Select).value
        keywords_str = self.query_one("#keywords-input", Input).value
        tags_str = self.query_one("#tags-input", Input).value
        auto_enhance = self.query_one("#auto-enhance", Checkbox).value

        if not title or not content:
            self.notify("标题和内容不能为空！", severity="error")
            return

        keywords = [k.strip() for k in keywords_str.split(",") if k.strip()]
        tags = [t.strip() for t in tags_str.split(",") if t.strip()]

        try:
            # 保存记忆
            memory_id = self.app.memory_manager.write_memory(
                user_id=self.app.current_user,
                content=content,
                project_id=self.app.current_project,
                title=title,
                content_type=memory_type,
                keywords=keywords,
                tags=tags,
                auto_enhance=auto_enhance
            )

            self.notify(f"记忆保存成功！ID: {memory_id}", severity="information")
            self.app.pop_screen()
        except Exception as e:
            self.notify(f"保存失败: {str(e)}", severity="error")


class HelpScreen(Screen):
    """帮助屏幕"""

    def compose(self) -> ComposeResult:
        with Container(id="help-container"):
            yield Static("使用帮助", classes="title")

            with Container(classes="help-section"):
                yield Static("快捷键", classes="section-title")
                yield Static("• q - 退出应用")
                yield Static("• n - 新建记忆")
                yield Static("• s - 搜索记忆")
                yield Static("• r - 刷新列表")
                yield Static("• h - 显示帮助")
                yield Static("• f - 切换全屏")

            with Container(classes="help-section"):
                yield Static("操作说明", classes="section-title")
                yield Static("1. 使用方向键导航记忆列表")
                yield Static("2. Enter键查看记忆详情")
                yield Static("3. Delete键删除选中的记忆")
                yield Static("4. Tab键切换UI焦点")
                yield Static("5. Esc键返回上一级")

            yield Button("返回", id="back-btn")


def main():
    """主函数"""
    app = TUIApp()
    app.run()


if __name__ == "__main__":
    main()