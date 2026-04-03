"""
MCP Memory - A biologically-inspired, self-evolving AI memory system

This package provides:
- MemoryClient: Python SDK for interacting with MCP Memory
- Complete memory management system with local and remote modes
- Biologically inspired memory architecture
"""

from mcp_memory.sdk import (
    MemoryClient,
    WriteMemoryRequest,
    ReadMemoryRequest,
    DeleteMemoryRequest,
    UpdateMemoryRequest,
)

__version__ = "2.1.0"
__all__ = [
    "MemoryClient",
    "WriteMemoryRequest",
    "ReadMemoryRequest",
    "DeleteMemoryRequest",
    "UpdateMemoryRequest",
]
