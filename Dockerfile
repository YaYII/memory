# ─────────────────────────────────────────────────────────────────────────────
# Stage 1: Builder — 安装依赖（利用层缓存）
# ─────────────────────────────────────────────────────────────────────────────
FROM python:3.11-slim AS builder

WORKDIR /build

# 系统依赖（编译 chromadb 和 sentence-transformers 所需）
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc g++ build-essential git curl \
    && rm -rf /var/lib/apt/lists/*

# 先复制依赖文件，利用 Docker 层缓存
COPY pyproject.toml requirements.txt ./

# 安装到本地路径（方便 COPY 到最终镜像）
RUN pip install --upgrade pip && \
    pip install --no-cache-dir --prefix=/install -r requirements.txt

# 安装项目本身（editable 模式）
COPY src/ ./src/
RUN pip install --no-cache-dir --prefix=/install -e .

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2: Runtime — 最小化运行镜像
# ─────────────────────────────────────────────────────────────────────────────
FROM python:3.11-slim AS runtime

# 安全：不以 root 运行
RUN groupadd -r mcp && useradd -r -g mcp -s /bin/false mcp

WORKDIR /app

# 运行时系统库（sentence-transformers 需要 libgomp）
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgomp1 curl \
    && rm -rf /var/lib/apt/lists/*

# 从 builder 复制已安装的包
COPY --from=builder /install /usr/local

# 复制应用代码
COPY --chown=mcp:mcp src/ ./src/
COPY --chown=mcp:mcp .env.example ./.env.example

# 创建数据目录（挂载持久化卷）
RUN mkdir -p /data/chroma && chown -R mcp:mcp /data

# 环境变量默认值
ENV PYTHONPATH=/app/src \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    MCP_MEMORY_HOST=0.0.0.0 \
    MCP_MEMORY_PORT=22888 \
    CHROMA_DATA_PATH=/data/chroma \
    MCP_LOG_FORMAT=json \
    MCP_LOG_LEVEL=INFO

EXPOSE 22888

# 健康检查（使用浅层 liveness 接口）
HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:22888/health || exit 1

USER mcp

# 启动命令（不使用 reload，生产环境只用单 worker）
CMD ["python", "-m", "uvicorn", "mcp_memory.server:app", \
     "--host", "0.0.0.0", \
     "--port", "22888", \
     "--no-access-log", \
     "--log-config", "/dev/null"]
