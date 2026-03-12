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

// --- 4. Polling Loop ---
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
        // Assuming backend returns {nodes: [{id, ...}], links: [{source, target}]}
        // We add a 'label' property for display if missing
        graph.nodes.forEach(n => {
            if (!n.label) n.label = n.id.substring(0, 10) + '...';
        });
        document.getElementById('entity-count').innerText = graph.nodes.filter(n => n.type === 'entity').length;
        updateGraph(graph);

        // Logs
        const logsRes = await fetch('/dashboard/logs');
        const logsData = await logsRes.json();
        const latestLog = logsData.logs[logsData.logs.length - 1];
        
        if (latestLog && latestLog.message !== lastLogMsg) {
            lastLogMsg = latestLog.message;
            addLog(latestLog.message);
            
            document.getElementById('activity').innerText = "PROCESSING";
            document.getElementById('activity').style.color = "#ff00ff";
            document.getElementById('activity').style.textShadow = "0 0 10px #ff00ff";
            
            // Simulate random sparks when active
            setTimeout(() => {
                document.getElementById('activity').innerText = "IDLE";
                document.getElementById('activity').style.color = "#00ff41";
                document.getElementById('activity').style.textShadow = "none";
            }, 1000);
        }

    } catch (e) {
        console.error("Connection lost:", e);
        document.getElementById('status').innerText = "OFFLINE";
        document.getElementById('status').style.color = "#ff0000";
    }
}

setInterval(fetchState, 2000);
fetchState();

addLog("正在初始化神经连接...", "info");
addLog("加载认知图谱模型...", "info");
