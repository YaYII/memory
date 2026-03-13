import { updateGraph, highlightNode, resetHighlight } from './graph.js';

// Global state
let currentGraphData = { nodes: [], links: [] };
let logEventSource = null;
let currentMemoryType = 'all';
let currentMemoryId = null;

// Profile labels
const PROFILE_LABELS = {
    'light': '轻量',
    'standard': '标准',
    'aggressive': '激进'
};

// Log buffer for display
const LOG_BUFFER = [];
const MAX_LOGS = 50;

function addLog(msg, type = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    LOG_BUFFER.push({ time: timestamp, msg, type });
    if (LOG_BUFFER.length > MAX_LOGS) LOG_BUFFER.shift();
    
    const logContent = document.getElementById('log-content');
    if (logContent) {
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        entry.innerText = `[${timestamp}] ${msg}`;
        logContent.appendChild(entry);
        logContent.scrollTop = logContent.scrollHeight;
    }
}

function detectLogType(msg = '') {
    if (msg.includes('失败') || msg.includes('错误') || msg.includes('❌')) return 'error';
    if (msg.includes('[GLM]') || msg.includes('[DEEPSEEK]') || msg.includes('成功') || msg.includes('✅')) return 'success';
    if (msg.includes('警告') || msg.includes('重连') || msg.includes('扫描中')) return 'warn';
    return 'info';
}

// Current LLM provider info
let currentLLMProvider = '未知';
let currentLLMModel = '';

async function fetchLLMStatus() {
    try {
        const res = await fetch('/dashboard/llm/status');
        if (res.ok) {
            const status = await res.json();
            currentLLMProvider = status.preferred_provider || '未知';
            
            // Update LLM state display
            const llmStateEl = document.getElementById('llm-state');
            const thinkingTitleEl = document.getElementById('thinking-title');
            
            if (status.available_providers && status.available_providers.length > 0) {
                const providerText = status.available_providers.join(', ').toUpperCase();
                llmStateEl.innerText = `${currentLLMProvider.toUpperCase()} 已启用`;
                llmStateEl.style.color = '#00ffff';
                
                if (thinkingTitleEl) {
                    thinkingTitleEl.innerText = `深度思考 (${currentLLMProvider.toUpperCase()} THINKING)`;
                }
            } else {
                llmStateEl.innerText = '未启用';
                llmStateEl.style.color = '#ffff00';
            }
        }
    } catch (e) {
        console.error('获取 LLM 状态失败:', e);
    }
}

async function fetchState() {
    try {
        // Stats
        const statsRes = await fetch('/dashboard/stats');
        const stats = await statsRes.json();
        document.getElementById('mem-count').innerText = stats.memory_count;
        
        // Get LLM status
        await fetchLLMStatus();

        // Evolution status
        const evoRes = await fetch('/dashboard/evolution/status');
        if (evoRes.ok) {
            const evo = await evoRes.json();
            const profile = evo.profile || 'standard';
            document.getElementById('evolution-profile').innerText = PROFILE_LABELS[profile] || profile;
            setProfileActiveButton(profile);
        }

        // Graph
        const graphRes = await fetch('/dashboard/graph');
        if (!graphRes.ok) {
            throw new Error(`Graph API returned ${graphRes.status}`);
        }
        
        const graph = await graphRes.json();
        
        // Safety check: ensure graph has nodes/links
        if (!graph.nodes) graph.nodes = [];
        if (!graph.links) graph.links = [];
        
        // Simple adapter to match D3 format expected by updateGraph
        graph.nodes.forEach(n => {
            if (!n.label) n.label = n.id.substring(0, 10) + '...';
        });
        document.getElementById('entity-count').innerText = graph.nodes.filter(n => n.type === 'entity').length;
        updateGraph(graph);

    } catch (e) {
        console.error("连接断开:", e);
        document.getElementById('status').innerText = "异常";
        document.getElementById('status').style.color = "#ff0000";
    }
}

// Start systems
setInterval(fetchState, 5000); // Poll graph/stats less frequently (5s)
fetchState();

addLog("正在初始化神经连接...", "info");
addLog("加载认知图谱模型...", "info");

// ============================================================
// 三层记忆系统功能 (Tiered Memory System)
// ============================================================

// 加载三层记忆统计
async function loadTieredStats() {
    try {
        const res = await fetch('/tiered/stats');
        if (res.ok) {
            const stats = await res.json();
            document.getElementById('skill-count').innerText = stats.skill_count || 0;
            document.getElementById('thinking-count').innerText = stats.thinking_count || 0;
            document.getElementById('storage-count').innerText = stats.storage_count || 0;
        }
    } catch (e) {
        console.error('加载三层记忆统计失败:', e);
    }
}

// 加载记忆列表
async function loadMemoryList(type = 'all') {
    const listEl = document.getElementById('memory-list');
    listEl.innerHTML = '<div class="memory-item-placeholder">加载中...</div>';
    
    try {
        const userId = 'yangying'; // 默认用户
        const res = await fetch(`/tiered/query?query=&user_id=${userId}&memory_type=${type}&limit=20`);
        
        if (!res.ok) {
            throw new Error('查询失败');
        }
        
        const data = await res.json();
        const memories = data.memories || [];
        
        if (memories.length === 0) {
            listEl.innerHTML = '<div class="memory-item-placeholder">暂无记忆</div>';
            return;
        }
        
        listEl.innerHTML = '';
        memories.forEach(memory => {
            const item = createMemoryItem(memory);
            listEl.appendChild(item);
        });
    } catch (e) {
        console.error('加载记忆列表失败:', e);
        listEl.innerHTML = '<div class="memory-item-placeholder">加载失败</div>';
    }
}

// 创建记忆项元素
function createMemoryItem(memory) {
    const div = document.createElement('div');
    div.className = `memory-item ${memory.memory_type}`;
    div.dataset.id = memory.memory_id;
    
    const typeLabels = {
        'skill': '技能',
        'thinking': '思维',
        'storage': '存储'
    };
    
    div.innerHTML = `
        <div class="memory-item-header">
            <span class="memory-item-type ${memory.memory_type}">${typeLabels[memory.memory_type]}</span>
            <span style="font-size: 9px; color: #666;">${new Date(memory.timestamp).toLocaleDateString()}</span>
        </div>
        <div class="memory-item-content">${memory.content.substring(0, 100)}${memory.content.length > 100 ? '...' : ''}</div>
    `;
    
    div.addEventListener('click', () => showMemoryDetail(memory.memory_id));
    
    return div;
}

// 显示记忆详情
async function showMemoryDetail(memoryId) {
    try {
        const res = await fetch(`/tiered/memory/${memoryId}?include_sources=true`);
        if (!res.ok) throw new Error('获取详情失败');
        
        const detail = await res.json();
        const memory = detail.memory;
        
        currentMemoryId = memoryId;
        
        // 填充详情
        document.getElementById('tiered-detail-type').innerText = 
            memory.memory_type === 'skill' ? '技能记忆' :
            memory.memory_type === 'thinking' ? '思维记忆' : '存储记忆';
        document.getElementById('tiered-detail-confidence').innerText = 
            (memory.metadata?.confidence || 1.0).toFixed(2);
        document.getElementById('tiered-detail-time').innerText = 
            new Date(memory.timestamp).toLocaleString();
        document.getElementById('tiered-detail-tags').innerText = 
            (memory.metadata?.tags || []).join(', ') || '无';
        document.getElementById('tiered-detail-content').innerText = memory.content;
        
        // 显示源记忆
        const sourcesSection = document.getElementById('tiered-detail-sources-section');
        const sourcesList = document.getElementById('tiered-detail-sources');
        
        if (detail.sources && detail.sources.length > 0) {
            sourcesSection.style.display = 'block';
            sourcesList.innerHTML = '';
            detail.sources.forEach(source => {
                const item = document.createElement('div');
                item.className = 'source-item';
                item.innerText = `[${source.memory_type}] ${source.content.substring(0, 50)}...`;
                item.addEventListener('click', () => showMemoryDetail(source.memory_id));
                sourcesList.appendChild(item);
            });
        } else {
            sourcesSection.style.display = 'none';
        }
        
        // 显示弹窗
        document.getElementById('tiered-detail-modal').style.display = 'flex';
        
    } catch (e) {
        console.error('显示记忆详情失败:', e);
        alert('获取记忆详情失败');
    }
}

// 搜索记忆
async function searchMemories() {
    const query = document.getElementById('tiered-search-input').value.trim();
    if (!query) {
        loadMemoryList(currentMemoryType);
        return;
    }
    
    const listEl = document.getElementById('memory-list');
    listEl.innerHTML = '<div class="memory-item-placeholder">搜索中...</div>';
    
    try {
        const userId = 'yangying';
        const res = await fetch(`/tiered/query?query=${encodeURIComponent(query)}&user_id=${userId}&memory_type=${currentMemoryType}&limit=20`);
        
        if (!res.ok) throw new Error('搜索失败');
        
        const data = await res.json();
        const memories = data.memories || [];
        
        if (memories.length === 0) {
            listEl.innerHTML = '<div class="memory-item-placeholder">未找到匹配的记忆</div>';
            return;
        }
        
        listEl.innerHTML = '';
        memories.forEach(memory => {
            const item = createMemoryItem(memory);
            listEl.appendChild(item);
        });
        
    } catch (e) {
        console.error('搜索记忆失败:', e);
        listEl.innerHTML = '<div class="memory-item-placeholder">搜索失败</div>';
    }
}

// 追溯记忆起源
async function traceMemoryOrigin() {
    if (!currentMemoryId) return;
    
    try {
        const res = await fetch(`/tiered/memory/${currentMemoryId}/trace?max_depth=3`);
        if (!res.ok) throw new Error('追溯失败');
        
        const data = await res.json();
        const chain = data.chain || [];
        
        if (chain.length <= 1) {
            alert('该记忆没有可追溯的源记忆');
            return;
        }
        
        // 构建追溯信息
        let traceInfo = '记忆追溯链:\n\n';
        chain.forEach((item, index) => {
            const indent = '  '.repeat(index);
            traceInfo += `${indent}[${item.memory_type}] ${item.content.substring(0, 50)}...\n`;
        });
        
        alert(traceInfo);
        
    } catch (e) {
        console.error('追溯记忆起源失败:', e);
        alert('追溯失败');
    }
}

// 提供反馈
async function provideFeedback() {
    if (!currentMemoryId) return;
    
    const comment = prompt('请输入反馈说明（可选）:');
    if (comment === null) return; // 用户取消
    
    try {
        const res = await fetch(`/tiered/memory/${currentMemoryId}/feedback`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                memory_id: currentMemoryId,
                user_id: 'yangying',
                feedback_type: 'inaccurate',
                comment: comment || '标记为不准确'
            })
        });
        
        if (res.ok) {
            alert('反馈已记录，感谢你的贡献！');
        } else {
            throw new Error('提交失败');
        }
        
    } catch (e) {
        console.error('提交反馈失败:', e);
        alert('提交反馈失败');
    }
}

// 事件监听器
document.addEventListener('DOMContentLoaded', () => {
    // 记忆类型切换
    document.querySelectorAll('.memory-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.memory-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentMemoryType = tab.dataset.type;
            loadMemoryList(currentMemoryType);
        });
    });
    
    // 搜索按钮
    document.getElementById('tiered-search-btn')?.addEventListener('click', searchMemories);
    
    // 搜索框回车
    document.getElementById('tiered-search-input')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchMemories();
    });
    
    // 关闭详情弹窗
    document.getElementById('tiered-detail-close')?.addEventListener('click', () => {
        document.getElementById('tiered-detail-modal').style.display = 'none';
    });
    
    // 追溯起源按钮
    document.getElementById('tiered-detail-trace')?.addEventListener('click', traceMemoryOrigin);
    
    // 反馈按钮
    document.getElementById('tiered-detail-feedback')?.addEventListener('click', provideFeedback);
    
    // 点击弹窗外部关闭
    document.getElementById('tiered-detail-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'tiered-detail-modal') {
            document.getElementById('tiered-detail-modal').style.display = 'none';
        }
    });
    
    // 初始化
    loadTieredStats();
    loadMemoryList('all');
    
    // 初始化神经日志流
    initLogStream();
    
    // 定期刷新统计
    setInterval(loadTieredStats, 10000);
});

// Profile button handlers
function setProfileActiveButton(profile) {
    document.querySelectorAll('#profile-light, #profile-standard, #profile-aggressive').forEach(btn => {
        btn.classList.remove('active');
    });
    const btn = document.getElementById(`profile-${profile}`);
    if (btn) btn.classList.add('active');
}

document.getElementById('profile-light')?.addEventListener('click', () => setEvolutionProfile('light'));
document.getElementById('profile-standard')?.addEventListener('click', () => setEvolutionProfile('standard'));
document.getElementById('profile-aggressive')?.addEventListener('click', () => setEvolutionProfile('aggressive'));

async function setEvolutionProfile(profile) {
    try {
        const res = await fetch(`/dashboard/evolution/profile?profile=${profile}`, { method: 'POST' });
        if (res.ok) {
            setProfileActiveButton(profile);
            addLog(`进化策略已切换为: ${PROFILE_LABELS[profile]}`, 'success');
        }
    } catch (e) {
        console.error('设置进化策略失败:', e);
    }
}

// View switcher
document.getElementById('view-neural')?.addEventListener('click', () => {
    document.getElementById('view-neural').classList.add('active');
    document.getElementById('view-skill').classList.remove('active');
    // Switch to neural view logic here
});

document.getElementById('view-skill')?.addEventListener('click', () => {
    document.getElementById('view-skill').classList.add('active');
    document.getElementById('view-neural').classList.remove('active');
    // Switch to skill tree view logic here
});

// Rebuild button
document.getElementById('rebuild-btn')?.addEventListener('click', async () => {
    try {
        const res = await fetch('/dashboard/rebuild_graph', { method: 'POST' });
        if (res.ok) {
            addLog('全量扫描已启动', 'success');
        }
    } catch (e) {
        console.error('启动重建失败:', e);
    }
});

// Search functionality
document.getElementById('memory-search-btn')?.addEventListener('click', async () => {
    const query = document.getElementById('memory-search-input').value;
    if (!query) return;
    
    try {
        const res = await fetch('/memory/read', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: 'yangying', query: query, limit: 5 })
        });
        
        if (res.ok) {
            const results = await res.json();
            const resultsDiv = document.getElementById('memory-search-results');
            resultsDiv.innerHTML = '';
            
            results.forEach(item => {
                const div = document.createElement('div');
                div.className = 'log-entry info';
                div.style.cursor = 'pointer';
                div.innerText = item.content.substring(0, 50) + '...';
                div.addEventListener('click', () => {
                    // Show detail modal
                    document.getElementById('detail-title').innerText = '记忆详情';
                    document.getElementById('detail-type').innerText = item.type || 'memory';
                    document.getElementById('detail-group').innerText = item.group || 'general';
                    document.getElementById('detail-time').innerText = new Date(item.timestamp).toLocaleString();
                    document.getElementById('detail-body').value = item.content;
                    document.getElementById('detail-modal').style.display = 'flex';
                });
                resultsDiv.appendChild(div);
            });
        }
    } catch (e) {
        console.error('搜索失败:', e);
    }
});

// Detail modal close
document.getElementById('detail-close')?.addEventListener('click', () => {
    document.getElementById('detail-modal').style.display = 'none';
});

document.getElementById('detail-save')?.addEventListener('click', async () => {
    // Save memory logic here
    document.getElementById('detail-modal').style.display = 'none';
});

// Click outside to close modal
window.addEventListener('click', (e) => {
    const modal = document.getElementById('detail-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize SSE connection for logs
function initLogStream() {
    if (logEventSource) {
        logEventSource.close();
    }
    
    try {
        logEventSource = new EventSource('/dashboard/events');
        
        logEventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.message) {
                    addLog(data.message, detectLogType(data.message));
                    
                    // If it's a LLM/Cognitive log, also add to interaction panel
                    if (data.message.includes('[GLM]') || data.message.includes('[DEEPSEEK]') || 
                        data.message.includes('认知') || data.message.includes('思考') || data.message.includes('分析')) {
                        addThinkingStep(data.message.replace(/\[.*?\]\s*/, ''));
                    }
                }
            } catch (e) {
                // If not JSON, treat as plain text
                addLog(event.data, detectLogType(event.data));
            }
        };
        
        logEventSource.onopen = () => {
            addLog('神经日志流已连接', 'success');
        };
        
        logEventSource.onerror = (e) => {
            console.error('日志流连接错误:', e);
            addLog('神经日志流连接中断，5秒后重试...', 'warn');
            // Auto reconnect after 5 seconds
            setTimeout(initLogStream, 5000);
        };
        
    } catch (e) {
        console.error('初始化日志流失败:', e);
        addLog('神经日志流初始化失败', 'error');
    }
}

// Log event function for global access
window.logEvent = function(msg) {
    addLog(msg, detectLogType(msg));
    
    // If it's a LLM/Cognitive log, also add to interaction panel
    if (msg.includes('[GLM]') || msg.includes('[DEEPSEEK]') || msg.includes('认知') || msg.includes('思考') || msg.includes('分析')) {
        addThinkingStep(msg.replace(/\[.*?\]\s*/, ''));
    }
};

function addThinkingStep(content) {
    const container = document.getElementById('interaction-content');
    const placeholder = container.querySelector('.thinking-placeholder');
    if (placeholder) placeholder.remove();
    
    const step = document.createElement('div');
    step.className = 'thinking-step';
    step.innerText = content;
    container.appendChild(step);
    container.scrollTop = container.scrollHeight;
}

// Expose functions globally for graph.js
window.highlightNode = highlightNode;
window.resetHighlight = resetHighlight;
