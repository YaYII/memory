import { updateGraph, triggerSpark } from './graph.js';

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
                document.getElementById('activity').innerText = "PROCESSING";
                document.getElementById('activity').style.color = "#ff00ff";
                document.getElementById('activity').style.textShadow = "0 0 10px #ff00ff";
                
                setTimeout(() => {
                    document.getElementById('activity').innerText = "IDLE";
                    document.getElementById('activity').style.color = "#00ff41";
                    document.getElementById('activity').style.textShadow = "none";
                }, 1000);
            }
        } catch (e) {
            console.error("Error parsing SSE log:", e);
        }
    };
    
    evtSource.onerror = (err) => {
        console.error("SSE Connection Error:", err);
        document.getElementById('status').innerText = "RECONNECTING";
        document.getElementById('status').style.color = "#ffff00";
    };
    
    evtSource.onopen = () => {
        document.getElementById('status').innerText = "ONLINE";
        document.getElementById('status').style.color = "#00ff41";
        addLog("神经连接已建立 (SSE Stream Active)", "success");
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
        const graph = await graphRes.json();
        // Simple adapter to match D3 format expected by updateGraph
        graph.nodes.forEach(n => {
            if (!n.label) n.label = n.id.substring(0, 10) + '...';
        });
        document.getElementById('entity-count').innerText = graph.nodes.filter(n => n.type === 'entity').length;
        updateGraph(graph);

    } catch (e) {
        console.error("Connection lost:", e);
    }
}

// Start systems
initLogStream();
setInterval(fetchState, 5000); // Poll graph/stats less frequently (5s)
fetchState();

addLog("正在初始化神经连接...", "info");
addLog("加载认知图谱模型...", "info");
