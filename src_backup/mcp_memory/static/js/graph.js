// graph.js - 3D Graph Visualization Module
// Wait for dependencies to load before initializing

let Graph = null;
let graphData = { nodes: [], links: [] };
let autoRotateEnabled = true;
let controls = null;
let scene = null;
let currentLayout = 'neural';
let initAttempts = 0;
const MAX_INIT_ATTEMPTS = 50;

// --- Configuration ---
// 三层记忆类型颜色映射 - 与后端保持一致
const TIERED_COLORS = {
    'storage': '#4A90E2',   // 蓝色 - 存储记忆
    'thinking': '#F5A623',  // 橙色 - 思维记忆
    'skill': '#7ED321',     // 绿色 - 技能记忆
    'entity': '#9013FE',    // 紫色 - 实体
    'category': '#BD10E0',  // 紫色 - 分类
    'Default': '#aaaaaa'
};

// 保留旧的颜色映射用于向后兼容
const COLORS = {
    'Coding': '#00ffff',
    'Config': '#ff00ff',
    'Personal': '#ffff00',
    'General': '#ffffff',
    'Entity': '#ff4500',
    'category': '#ffcc00',
    'Default': '#aaaaaa'
};

// Initialize when DOM is ready and libraries are loaded
function initGraph() {
    initAttempts++;
    
    // Check if libraries are loaded
    if (typeof ForceGraph3D === 'undefined') {
        if (initAttempts < MAX_INIT_ATTEMPTS) {
            console.log(`ForceGraph3D not loaded yet, retrying... (${initAttempts}/${MAX_INIT_ATTEMPTS})`);
            setTimeout(initGraph, 200);
        } else {
            console.error("ForceGraph3D failed to load after maximum attempts");
            showGraphError("3D图形库加载失败，请刷新页面重试");
        }
        return;
    }
    
    if (typeof d3 === 'undefined') {
        if (initAttempts < MAX_INIT_ATTEMPTS) {
            console.log(`D3 not loaded yet, retrying... (${initAttempts}/${MAX_INIT_ATTEMPTS})`);
            setTimeout(initGraph, 200);
        } else {
            console.error("D3 failed to load after maximum attempts");
        }
        return;
    }
    
    console.log("Initializing 3D Graph...");
    
    const container = document.getElementById('canvas-container');
    if (!container) {
        console.error("Canvas container not found");
        return;
    }
    
    try {
        // Create Graph
        Graph = ForceGraph3D({ controlType: 'orbit' })(container)
            .backgroundColor('#000510')
            .nodeColor(node => {
                // 优先使用后端传来的color字段
                if (node.color) return node.color;
                // 其次使用三层记忆类型颜色
                if (TIERED_COLORS[node.group]) return TIERED_COLORS[node.group];
                // 最后使用旧的颜色映射
                return COLORS[node.group] || COLORS[node.type] || COLORS['Default'];
            })
            .nodeVal(node => node.type === 'category' ? 6 : (node.type === 'memory' ? 4 : 2))
            .nodeLabel('label')
            .nodeResolution(16)
            .linkWidth(0.5)
            .linkColor(() => 'rgba(0, 255, 65, 0.15)')
            .linkDirectionalArrowLength(0)
            .linkDirectionalArrowRelPos(1)
            .linkCurvature(0.1)
            .linkOpacity(0.4)
            .dagMode(null)
            .dagLevelDistance(0)
            .numDimensions(3)
            .warmupTicks(100)
            .cooldownTicks(50)
            .onNodeHover(node => {
                if (node && node.type !== 'category') {
                    stopAutoRotate();
                    document.body.style.cursor = 'pointer';
                } else {
                    startAutoRotate();
                    document.body.style.cursor = 'default';
                }
            })
            .onNodeClick(node => {
                if (!node) return;
                
                // 跳过 category 类型节点，不触发点击事件
                if (node.type === 'category') {
                    console.log('Category node clicked - ignoring');
                    return;
                }
                
                stopAutoRotate();
                const safeNode = node || {};
                
                // Debug: log the node data to see what id is being passed
                console.log('Node clicked:', safeNode);
                
                // Ensure we have the correct memory_id - it could be in different properties
                const memoryId = safeNode.id || safeNode.memory_id;
                
                if (!memoryId) {
                    console.error('Node clicked but no memory ID found:', safeNode);
                    return;
                }
                
                const event = new CustomEvent('node-selected', {
                    detail: {
                        id: memoryId,
                        label: safeNode.label,
                        title: safeNode.title || safeNode.label || memoryId,
                        group: safeNode.group,
                        type: safeNode.type,
                        detail: safeNode.detail || safeNode.content || '',
                        content: safeNode.content || safeNode.detail || '',
                        timestamp: safeNode.timestamp || '',
                        user_id: safeNode.user_id || '',
                        scope: safeNode.scope || ''
                    }
                });
                window.dispatchEvent(event);
                
                // Highlight logic
                const distance = 40;
                const nx = node?.x || 1;
                const ny = node?.y || 1;
                const nz = node?.z || 1;
                const distRatio = 1 + distance / Math.hypot(nx, ny, nz);
                
                Graph.cameraPosition(
                    { x: nx * distRatio, y: ny * distRatio, z: nz * distRatio },
                    node,
                    3000
                );
                
                highlightNode(node.id);
            })
            .onBackgroundClick(() => {
                resetHighlight();
            });
        
        // Get controls
        controls = Graph.controls();
        
        // Start rotation
        rotationTick();
        
        // Handle resize
        window.addEventListener('resize', () => {
            if (Graph) {
                Graph.width(window.innerWidth);
                Graph.height(window.innerHeight);
            }
        });
        Graph.width(window.innerWidth);
        Graph.height(window.innerHeight);
        
        // Add initial data
        Graph.graphData({
            nodes: [
                { id: 'CORE', group: 'General', label: '认知核心', type: 'entity' },
                { id: 'MEM_INIT', group: 'Config', label: '系统已初始化', type: 'memory' }
            ],
            links: [
                { source: 'CORE', target: 'MEM_INIT' }
            ]
        });
        
        console.log("3D Graph initialized successfully");
        
        // Dispatch event to notify that graph is ready
        window.dispatchEvent(new CustomEvent('graph-ready'));
        
    } catch (error) {
        console.error("Failed to initialize 3D Graph:", error);
        showGraphError("3D图形初始化失败: " + error.message);
    }
}

function showGraphError(message) {
    const placeholder = document.getElementById('graph-placeholder');
    if (placeholder) {
        placeholder.innerHTML = `<div style="color: #ff4444; text-align: center; padding: 20px;">${message}</div>`;
        placeholder.style.display = 'block';
    }
}

function rotationTick() {
    if (controls) {
        controls.autoRotate = autoRotateEnabled;
        controls.autoRotateSpeed = -1.2;
        controls.update();
    }
    requestAnimationFrame(rotationTick);
}

// --- Exported Functions ---

export function updateGraph(newData) {
    if (!Graph) {
        console.warn("Graph not initialized yet");
        return;
    }
    
    console.log("收到图谱更新:", newData);
    
    const placeholder = document.getElementById('graph-placeholder');
    if (!newData || !newData.nodes || newData.nodes.length === 0) {
        if (placeholder) placeholder.style.display = 'block';
        document.getElementById('canvas-container').style.opacity = '0.2';
        return;
    } else {
        if (placeholder) placeholder.style.display = 'none';
        document.getElementById('canvas-container').style.opacity = '1';
    }
    
    if (!newData.nodes || !Array.isArray(newData.nodes)) {
        console.warn("收到无效的图谱数据:", newData);
        return;
    }
    
    const existingNodes = new Set(graphData.nodes.map(n => n.id));
    const existingNodeMap = new Map(graphData.nodes.map(n => [n.id, n]));
    const existingLinks = new Set(graphData.links.map(l => `${l.source.id || l.source}-${l.target.id || l.target}`));
    
    let hasChanges = false;
    
    newData.nodes.forEach(n => {
        let group = 'General';
        if (n.type === 'entity') group = 'Entity';
        else if (n.category) group = n.category;
        else if (n.label && (n.label.includes('配置') || n.label.includes('Config'))) group = 'Config';
        else if (n.label && (n.label.includes('代码') || n.label.includes('Coding'))) group = 'Coding';
        else if (n.label && (n.label.includes('画像') || n.label.includes('Personal'))) group = 'Personal';

        const title = n.title || n.label || n.id;
        const shortLabel = title && title.length > 14 ? `${title.slice(0, 14)}…` : title;
        const normalized = { ...n, title, label: shortLabel || n.id, group };

        if (!existingNodes.has(n.id)) {
            graphData.nodes.push(normalized);
            hasChanges = true;
        } else {
            const oldNode = existingNodeMap.get(n.id);
            if (!oldNode) return;
            const before = JSON.stringify({
                label: oldNode.label,
                title: oldNode.title,
                detail: oldNode.detail,
                timestamp: oldNode.timestamp,
                group: oldNode.group
            });
            Object.assign(oldNode, normalized);
            const after = JSON.stringify({
                label: oldNode.label,
                title: oldNode.title,
                detail: oldNode.detail,
                timestamp: oldNode.timestamp,
                group: oldNode.group
            });
            if (before !== after) hasChanges = true;
        }
    });
    
    newData.links.forEach(l => {
        const linkId = `${l.source}-${l.target}`;
        if (!existingLinks.has(linkId)) {
            graphData.links.push(l);
            hasChanges = true;
        }
    });

    if (hasChanges) {
        console.log("正在渲染图谱更新...", graphData);
        Graph.graphData(graphData);
    }
}

export function setLayout(layoutType) {
    if (!Graph || layoutType === currentLayout) return;
    currentLayout = layoutType;
    
    if (layoutType === 'skill') {
        Graph
            .dagMode('td')
            .dagLevelDistance(100)
            .onDagError(() => {
                console.warn("Graph contains cycles, but ForceGraph will handle it in DAG mode.");
            });
    } else {
        Graph.dagMode(null);
    }
    
    Graph.numDimensions(3);
}

export function startAutoRotate() {
    autoRotateEnabled = true;
}

export function stopAutoRotate() {
    autoRotateEnabled = false;
}

export function focusNodeById(nodeId) {
    if (!Graph) return;
    const node = graphData.nodes.find(n => String(n.id) === String(nodeId));
    if (!node) return;
    const distance = 40;
    const distRatio = 1 + distance / Math.hypot(node.x || 1, node.y || 1, node.z || 1);
    Graph.cameraPosition(
        { x: (node.x || 0) * distRatio, y: (node.y || 0) * distRatio, z: (node.z || 0) * distRatio },
        node,
        900
    );
}

export function resetFocus() {
    if (!Graph) return;
    
    Graph.nodeColor(node => {
        if (node.color) return node.color;
        if (TIERED_COLORS[node.group]) return TIERED_COLORS[node.group];
        return COLORS[node.group] || COLORS[node.type] || COLORS['Default'];
    });
    Graph.linkColor(() => 'rgba(0, 255, 65, 0.15)');
    Graph.linkWidth(0.5);
    
    Graph.cameraPosition(
        { x: 0, y: 0, z: 400 },
        { x: 0, y: 0, z: 0 },
        800
    );
    
    startAutoRotate();
}

export function highlightNode(nodeId) {
    if (!Graph) return;
    
    const node = graphData.nodes.find(n => n.id === nodeId);
    if (!node) return;
    
    const neighbors = new Set();
    const links = new Set();
    
    graphData.links.forEach(link => {
        const sourceId = link?.source?.id || link?.source;
        const targetId = link?.target?.id || link?.target;
        if (sourceId === nodeId || targetId === nodeId) {
            neighbors.add(sourceId);
            neighbors.add(targetId);
            links.add(link);
        }
    });
    
    neighbors.add(nodeId);
    
    Graph.nodeColor(n => {
        if (neighbors.has(n.id)) {
            if (n.color) return n.color;
            if (TIERED_COLORS[n.group]) return TIERED_COLORS[n.group];
            return COLORS[n.group] || COLORS['Default'];
        } else {
            return 'rgba(200,200,200,0.1)';
        }
    });
    
    Graph.linkColor(link => {
        if (links.has(link)) {
            return 'rgba(0,255,65,0.8)';
        } else {
            return 'rgba(255,255,255,0.02)';
        }
    });
    
    Graph.linkWidth(link => links.has(link) ? 2 : 0.5);
}

export function resetHighlight() {
    if (!Graph) return;
    
    Graph.nodeColor(node => {
        // 优先使用后端传来的color字段
        if (node.color) return node.color;
        // 其次使用三层记忆类型颜色
        if (TIERED_COLORS[node.group]) return TIERED_COLORS[node.group];
        // 最后使用旧的颜色映射
        return COLORS[node.group] || COLORS[node.type] || COLORS['Default'];
    });
    Graph.linkColor(() => 'rgba(0, 255, 65, 0.15)');
    Graph.linkWidth(0.5);
}

export function triggerSpark(nodeId) {
    // Spark effect disabled - requires THREE which is bundled inside 3d-force-graph
    // This is a visual enhancement that can be re-enabled if THREE is exposed
    console.log("Spark effect triggered for node:", nodeId);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGraph);
} else {
    // DOM already loaded
    initGraph();
}
