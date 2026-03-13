import { updateGraph, setLayout, startAutoRotate, stopAutoRotate, focusNodeById } from './graph.js';

// Ensure system logs are initialized
console.log("主程序 App.js 已初始化");

// --- 0. UI Controls ---
const PROFILE_LABELS = {
    light: '轻量',
    standard: '标准',
    aggressive: '激进'
};

function setProfileActiveButton(profile) {
    ['light', 'standard', 'aggressive'].forEach(p => {
        const btn = document.getElementById(`profile-${p}`);
        if (btn) btn.classList.toggle('active', p === profile);
    });
}

async function switchEvolutionProfile(profile) {
    try {
        const res = await fetch(`/dashboard/evolution/profile?profile=${profile}`, { method: 'POST' });
        if (!res.ok) {
            throw new Error(`切换失败: ${res.status}`);
        }
        setProfileActiveButton(profile);
        document.getElementById('evolution-profile').innerText = PROFILE_LABELS[profile] || profile;
        addLog(`已切换进化策略为 ${PROFILE_LABELS[profile] || profile}`, 'success');
    } catch (e) {
        addLog(`切换进化策略失败: ${e.message}`, 'error');
    }
}

document.getElementById('view-neural').addEventListener('click', () => {
    document.getElementById('view-neural').classList.add('active');
    document.getElementById('view-skill').classList.remove('active');
    setLayout('neural');
    addLog("正在应用神经图谱布局...", "info");
    
    // Quick animation effect for the placeholder if it's visible
    const ph = document.getElementById('graph-placeholder');
    if (ph && ph.style.display !== 'none') {
        ph.style.opacity = '0.5';
        setTimeout(() => ph.style.opacity = '1', 200);
    }
});

document.getElementById('view-skill').addEventListener('click', () => {
    document.getElementById('view-skill').classList.add('active');
    document.getElementById('view-neural').classList.remove('active');
    setLayout('skill');
    addLog("正在应用技能树布局...", "info");

    const ph = document.getElementById('graph-placeholder');
    if (ph && ph.style.display !== 'none') {
        ph.style.opacity = '0.5';
        setTimeout(() => ph.style.opacity = '1', 200);
    }
});

document.getElementById('rebuild-btn').addEventListener('click', async () => {
    const btn = document.getElementById('rebuild-btn');
    btn.disabled = true;
    btn.innerText = "扫描中 (Scanning...)";
    addLog("正在请求后台全量扫描记忆库...", "warn");
    
    try {
        const res = await fetch('/dashboard/rebuild_graph', { method: 'POST' });
        if (res.ok) {
            addLog("扫描请求已接受，请观察左侧日志流获取进度。", "success");
        } else {
            addLog("请求失败，请检查服务器连接。", "error");
        }
    } catch (e) {
        addLog(`网络错误: ${e.message}`, "error");
    } finally {
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = "手动扫描现有记忆 (Scan Memories)";
        }, 5000);
    }
});

document.getElementById('profile-light').addEventListener('click', () => switchEvolutionProfile('light'));
document.getElementById('profile-standard').addEventListener('click', () => switchEvolutionProfile('standard'));
document.getElementById('profile-aggressive').addEventListener('click', () => switchEvolutionProfile('aggressive'));

// --- 3. Log Stream Logic ---
const logContent = document.getElementById('log-content');
const detailModal = document.getElementById('detail-modal');
const detailCloseBtn = document.getElementById('detail-close');
const detailSaveBtn = document.getElementById('detail-save');
const detailBody = document.getElementById('detail-body');
const memorySearchInput = document.getElementById('memory-search-input');
const memorySearchBtn = document.getElementById('memory-search-btn');
const memorySearchResults = document.getElementById('memory-search-results');
let selectedMemoryNode = null;
let lastLogMsg = "";

function detectLogType(msg = '') {
    if (msg.includes('失败') || msg.includes('错误') || msg.includes('❌')) return 'error';
    if (msg.includes('[DEEPSEEK]') || msg.includes('成功') || msg.includes('✅')) return 'success';
    if (msg.includes('警告') || msg.includes('重连') || msg.includes('扫描中')) return 'warn';
    return 'info';
}

function addLog(msg, type = 'info') {
    const div = document.createElement('div');
    div.className = 'log-line';
    const time = new Date().toLocaleTimeString();
    div.innerHTML = `<span class="log-time">[${time}]</span><span class="log-${type}">${msg}</span>`;
    
    logContent.appendChild(div);
    // Keep only last 20 logs
    while (logContent.children.length > 20) {
        logContent.removeChild(logContent.firstChild);
    }
    // Auto scroll to bottom
    logContent.scrollTop = logContent.scrollHeight;
}

function addThinkingStep(msg) {
    if (!interactionContent) return;
    
    // Clear placeholder if it exists
    const placeholder = interactionContent.querySelector('.thinking-placeholder');
    if (placeholder) {
        interactionContent.removeChild(placeholder);
    }
    
    const div = document.createElement('div');
    div.className = 'thinking-step';
    const time = new Date().toLocaleTimeString();
    // Simple parsing for "Step X: ..." format if available, otherwise just text
    div.innerHTML = `<span style="color: #ff00ff; font-weight: bold;">></span> ${msg}`;
    
    interactionContent.appendChild(div);
    interactionContent.scrollTop = interactionContent.scrollHeight;
    
    // Keep last 10 steps to avoid overflow
    while (interactionContent.children.length > 10) {
        interactionContent.removeChild(interactionContent.firstChild);
    }
}

async function openDetailModal(node) {
    const title = node.title || node.label || node.id;
    selectedMemoryNode = node;
    stopAutoRotate();
    detailModal.style.display = 'flex';
    document.getElementById('detail-title').innerText = title || '-';
    document.getElementById('detail-type').innerText = node.type || '-';
    document.getElementById('detail-group').innerText = node.group || '-';
    document.getElementById('detail-time').innerText = node.timestamp || '-';
    
    // If detail is empty or it looks truncated (simple heuristic), fetch full content
    let content = node.detail || node.content || '';
    if (node.type === 'memory' && node.id) {
        detailBody.value = "正在加载详细内容...";
        detailBody.readOnly = true;
        try {
            const res = await fetch(`/dashboard/memory/${encodeURIComponent(node.id)}`);
            if (res.ok) {
                const data = await res.json();
                content = data.content || content;
                // Update local node reference
                node.detail = content;
                node.timestamp = data.timestamp || node.timestamp;
                node.user_id = data.user_id || node.user_id;
                document.getElementById('detail-time').innerText = node.timestamp || '-';
            }
        } catch (e) {
            console.error("Failed to fetch memory details:", e);
            content = content || `无法加载详情 (ID: ${node.id})`;
        }
    }
    
    detailBody.value = content || `节点ID: ${node.id || '-'}`;

    const canEdit = node.type === 'memory' && !!node.id;
    detailBody.readOnly = !canEdit;
    detailSaveBtn.style.display = canEdit ? 'block' : 'none';
}

// --- Dispatch Event for Node Click (to be caught by React/Vue if needed, or just logging here) ---
window.addEventListener('node-selected', (e) => {
    console.log("Node Selected Event Received:", e.detail);
    const node = e.detail;
    const title = node.title || node.label || node.id;
    addLog(`选定节点: ${title}（${node.group || 'General'}）`, 'info');
    openDetailModal(node);
});

function closeDetailModal() {
    selectedMemoryNode = null;
    detailModal.style.display = 'none';
    startAutoRotate();
}

detailCloseBtn.addEventListener('click', closeDetailModal);
detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeDetailModal();
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailModal.style.display !== 'none') {
        closeDetailModal();
    }
});

detailSaveBtn.addEventListener('click', async () => {
    if (!selectedMemoryNode || selectedMemoryNode.type !== 'memory') return;
    const content = detailBody.value || '';
    if (!content.trim()) {
        addLog('记忆内容不能为空', 'warn');
        return;
    }
    detailSaveBtn.disabled = true;
    detailSaveBtn.innerText = '保存中...';
    try {
        const res = await fetch('/dashboard/memory/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                memory_id: selectedMemoryNode.id,
                user_id: selectedMemoryNode.user_id,
                content
            })
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.detail || `状态码 ${res.status}`);
        }
        selectedMemoryNode.detail = content;
        addLog(`记忆已保存: ${selectedMemoryNode.id.slice(0, 8)}`, 'success');
        closeDetailModal();
        await fetchState();
    } catch (e) {
        addLog(`保存失败: ${e.message}`, 'error');
    } finally {
        detailSaveBtn.disabled = false;
        detailSaveBtn.innerText = '保存记忆';
    }
});

function renderSearchResults(items = []) {
    if (!items.length) {
        memorySearchResults.innerHTML = '';
        return;
    }
    memorySearchResults.innerHTML = items.map(item => `
        <div class="search-item" data-memory-id="${item.id}" data-user-id="${item.user_id || ''}">
            <div style="color:#00ffff; margin-bottom:2px;">${item.title || item.id}</div>
            <div style="color:#00ff41; opacity:0.9; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${(item.content || '').slice(0, 44)}</div>
            <div style="color:#008f11; margin-top:2px;">${item.timestamp || ''}</div>
        </div>
    `).join('');

    memorySearchResults.querySelectorAll('.search-item').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-memory-id');
            const userId = el.getAttribute('data-user-id');
            focusNodeById(id);
            openDetailModal({
                id,
                user_id: userId,
                type: 'memory',
                group: 'General',
                title: el.querySelector('div')?.innerText || id,
                detail: items.find(x => x.id === id)?.content || '',
                timestamp: items.find(x => x.id === id)?.timestamp || ''
            });
        });
    });
}

async function doSearchMemories() {
    const query = (memorySearchInput.value || '').trim();
    if (!query) {
        memorySearchResults.innerHTML = '';
        return;
    }
    try {
        const res = await fetch(`/dashboard/memory/search?query=${encodeURIComponent(query)}&limit=15`);
        const data = await res.json();
        renderSearchResults(data.items || []);
        addLog(`搜索完成：${(data.items || []).length} 条结果`, 'info');
    } catch (e) {
        addLog(`搜索失败: ${e.message}`, 'error');
    }
}

memorySearchBtn.addEventListener('click', doSearchMemories);
memorySearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearchMemories();
});

// --- Real-time Log Streaming (SSE) ---
function initLogStream() {
    const evtSource = new EventSource("/dashboard/events");
    
    evtSource.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            const msg = data.message;
            
            if (msg !== lastLogMsg) {
                lastLogMsg = msg;
                addLog(msg, detectLogType(msg));
                
                // If it's a DeepSeek/Cognitive log, also add to interaction panel
                if (msg.includes('DeepSeek') || msg.includes('认知') || msg.includes('思考') || msg.includes('分析')) {
                    addThinkingStep(msg.replace(/\[.*?\]\s*/, '')); // Remove timestamp prefix if present
                }
                
                // Visual feedback for activity
                document.getElementById('activity').innerText = "处理中";
                document.getElementById('activity').style.color = "#ff00ff";
                document.getElementById('activity').style.textShadow = "0 0 10px #ff00ff";
                
                setTimeout(() => {
                    document.getElementById('activity').innerText = "待机";
                    document.getElementById('activity').style.color = "#00ff41";
                    document.getElementById('activity').style.textShadow = "none";
                }, 1000);
            }
        } catch (e) {
            console.error("解析 SSE 日志出错:", e);
        }
    };
    
    evtSource.onerror = (err) => {
        console.error("SSE 连接错误:", err);
        document.getElementById('status').innerText = "重连中";
        document.getElementById('status').style.color = "#ffff00";
    };
    
    evtSource.onopen = () => {
        document.getElementById('status').innerText = "在线";
        document.getElementById('status').style.color = "#00ff41";
        addLog("神经连接已建立 (SSE 流已激活)", "success");
    };
}

// --- 4. Polling Loop (Stats & Graph only) ---
async function fetchState() {
    try {
        // Stats
        const statsRes = await fetch('/dashboard/stats');
        const stats = await statsRes.json();
        document.getElementById('mem-count').innerText = stats.memory_count;
        document.getElementById('deepseek-state').innerText = stats.deepseek_enabled ? '已启用' : '未启用';
        document.getElementById('deepseek-state').style.color = stats.deepseek_enabled ? '#00ffff' : '#ffff00';

        // Evolution Status
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
initLogStream();
setInterval(fetchState, 5000); // Poll graph/stats less frequently (5s)
fetchState();

addLog("正在初始化神经连接...", "info");
addLog("加载认知图谱模型...", "info");
