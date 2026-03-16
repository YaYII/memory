.PHONY: help install dev test lint format clean docker-build docker-up docker-down

# ─── 帮助 ────────────────────────────────────────────────────────────────────
help:
	@echo ""
	@echo "  MCP Memory — 开发命令"
	@echo ""
	@echo "  make install     安装依赖（开发环境）"
	@echo "  make dev         启动开发服务器（热重载）"
	@echo "  make test        运行测试 + 覆盖率"
	@echo "  make lint        Ruff 代码检查"
	@echo "  make format      Ruff 自动格式化"
	@echo "  make clean       清理缓存"
	@echo "  make docker-build 构建 Docker 镜像"
	@echo "  make docker-up   启动 Docker Compose"
	@echo "  make docker-down 停止 Docker Compose"
	@echo ""

# ─── 环境 ────────────────────────────────────────────────────────────────────
install:
	python -m venv .venv
	.venv/bin/pip install --upgrade pip
	.venv/bin/pip install -r requirements.txt
	.venv/bin/pip install -e .
	@echo "✅ 安装完成。运行: source .venv/bin/activate"

# ─── 开发 ────────────────────────────────────────────────────────────────────
dev:
	@source .venv/bin/activate 2>/dev/null || true
	MCP_LOG_FORMAT=text MCP_LOG_LEVEL=DEBUG \
	uvicorn mcp_memory.server:app \
		--host 127.0.0.1 \
		--port 22888 \
		--reload \
		--reload-dir src \
		--no-access-log

# ─── 测试 ────────────────────────────────────────────────────────────────────
test:
	CHROMA_DATA_PATH=/tmp/test_chroma MCP_LOG_LEVEL=WARNING \
	.venv/bin/pytest tests/ \
		--cov=src/mcp_memory \
		--cov-report=term-missing \
		--cov-fail-under=40 \
		-x -q

test-verbose:
	CHROMA_DATA_PATH=/tmp/test_chroma \
	.venv/bin/pytest tests/ -v --tb=short

# ─── 代码质量 ─────────────────────────────────────────────────────────────────
lint:
	.venv/bin/ruff check src/ tests/

format:
	.venv/bin/ruff format src/ tests/
	.venv/bin/ruff check src/ tests/ --fix

# ─── 清理 ────────────────────────────────────────────────────────────────────
clean:
	find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
	find . -type d -name .pytest_cache -exec rm -rf {} + 2>/dev/null || true
	find . -type d -name "*.egg-info" -exec rm -rf {} + 2>/dev/null || true
	find . -name "*.pyc" -delete 2>/dev/null || true
	rm -rf /tmp/test_chroma
	@echo "✅ 清理完成"

# ─── Docker ──────────────────────────────────────────────────────────────────
docker-build:
	docker build -t mcp-memory:latest .

docker-up:
	docker compose up -d
	@echo "✅ 服务启动中，健康检查: http://localhost:22888/health"

docker-down:
	docker compose down

docker-logs:
	docker compose logs -f mcp-memory

# ─── 数据库操作 ───────────────────────────────────────────────────────────────
stats:
	.venv/bin/python -c "from mcp_memory.memory.manager import MemoryManager; m=MemoryManager(); s=m.store.get_tiered_stats(); print(s)"
