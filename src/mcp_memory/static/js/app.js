import { updateGraph, triggerSpark } from './graph.js';

// Ensure system logs are initialized
console.log("主程序 App.js 已初始化");

// --- 3. Log Stream Logic ---
const logContent = document.getElementById('log-content');
let lastLogMsg = "";

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

// --- Dispatch Event for Node Click (to be caught by React/Vue if needed, or just logging here) ---
window.addEventListener('node-selected', (e) => {
    const node = e.detail;
    addLog(`选定节点: ${node.label || node.id} (${node.group})`, 'info');
    // Here we could open a side panel or modal
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
                addLog(msg);
                
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
    }
}

// Start systems
initLogStream();
setInterval(fetchState, 5000); // Poll graph/stats less frequently (5s)
fetchState();

addLog("正在初始化神经连接...", "info");
addLog("加载认知图谱模型...", "info");
