# Vue 3 + TypeScript 前端部署指南

## 📋 部署方式说明

**重要：Vue前端构建后会集成到后端服务中，由后端的22888端口统一提供服务，而不是单独开端口。**

---

## 🚀 快速部署

### **方式1：使用构建脚本（推荐）**

```bash
# macOS/Linux
cd frontend
chmod +x build.sh
./build.sh

# Windows
cd frontend
build.bat
```

### **方式2：手动构建**

```bash
cd frontend
npm install        # 首次需要安装依赖
npm run build      # 构建项目
```

### **访问地址**

构建完成后，访问：**http://localhost:22888/vue/**

---

## 📁 构建输出

构建后的静态文件会输出到：

```
src/mcp_memory/static_vue/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── ...
```

---

## 🔧 配置说明

### **1. Vite配置 (vite.config.ts)**

```typescript
export default defineConfig({
  plugins: [vue()],
  base: '/vue/',  // 重要：设置基础路径为/vue/
  build: {
    outDir: '../src/mcp_memory/static_vue',  // 输出到后端静态目录
    emptyOutDir: true
  }
})
```

**关键点：**
- `base: '/vue/'` - 设置基础路径，确保资源引用正确
- `outDir` - 输出到后端的 `static_vue` 目录

### **2. 后端配置 (server.py)**

```python
# Mount Vue static files (if exists)
vue_static_dir = os.path.join(os.path.dirname(__file__), "static_vue")
if os.path.exists(vue_static_dir):
    app.mount("/vue", StaticFiles(directory=vue_static_dir, html=True), name="vue")
```

**关键点：**
- 自动检测 `static_vue` 目录是否存在
- 挂载到 `/vue` 路径
- `html=True` 支持SPA应用

---

## 🌐 URL路由

| URL | 说明 |
|-----|------|
| `http://localhost:22888/` | 原始HTML前端 |
| `http://localhost:22888/vue/` | Vue前端（构建后） |
| `http://localhost:22888/dashboard/*` | API接口 |
| `http://localhost:22888/static/*` | 原始静态文件 |

---

## 🔄 开发 vs 生产

### **开发模式（带热重载）**

```bash
cd frontend
npm run dev
```

访问：http://localhost:3000

**特点：**
- ✅ 热重载
- ✅ 快速开发
- ❌ 需要单独端口

### **生产模式（集成到后端）**

```bash
cd frontend
npm run build
```

访问：http://localhost:22888/vue/

**特点：**
- ✅ 统一端口
- ✅ 生产优化
- ✅ 集成部署
- ❌ 无热重载

---

## 📊 部署流程

```
┌─────────────────┐
│  Vue源代码       │
│  frontend/src/  │
└────────┬────────┘
         │ npm run build
         ↓
┌─────────────────┐
│  Vite构建       │
│  编译+优化      │
└────────┬────────┘
         │ 输出
         ↓
┌─────────────────┐
│  静态文件        │
│  static_vue/    │
└────────┬────────┘
         │ FastAPI挂载
         ↓
┌─────────────────┐
│  后端服务        │
│  :22888/vue/    │
└─────────────────┘
```

---

## 🛠️ 常见问题

### **Q1: 构建后访问404？**

**A:** 检查以下几点：
1. 确认 `static_vue` 目录已生成
2. 确认后端服务已重启
3. 检查 `vite.config.ts` 中的 `base` 配置

### **Q2: 资源加载失败？**

**A:** 确保 `base: '/vue/'` 已正确设置

### **Q3: API请求失败？**

**A:** 检查API路径配置：
```typescript
// src/api/memory.ts
const api = axios.create({
  baseURL: 'http://localhost:22888',  // 后端地址
  timeout: 30000
})
```

### **Q4: 如何切换前端版本？**

**A:** 
- 原始前端：http://localhost:22888/
- Vue前端：http://localhost:22888/vue/

---

## 📝 部署检查清单

- [ ] 安装依赖：`npm install`
- [ ] 构建项目：`npm run build`
- [ ] 检查输出：`ls -la ../src/mcp_memory/static_vue/`
- [ ] 重启后端服务
- [ ] 访问测试：http://localhost:22888/vue/

---

## 🎯 最佳实践

1. **开发阶段**：使用 `npm run dev` 进行快速开发
2. **测试阶段**：使用 `npm run build` 构建并测试集成效果
3. **生产部署**：构建后部署到生产环境

---

## 📚 相关文档

- [Vue 3 文档](https://vuejs.org/)
- [Vite 构建配置](https://vitejs.dev/config/)
- [FastAPI 静态文件](https://fastapi.tiangolo.com/tutorial/static-files/)

---

**总结：Vue前端构建后集成到后端服务，统一通过22888端口访问，路径为 `/vue/`。** 🎉
