// Remove imports since we are using UMD Globals
// import ForceGraph3D from '3d-force-graph';
// import * as THREE from 'three';
// import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
// import SpriteText from 'three-spritetext';

// Ensure Globals are available
if (typeof ForceGraph3D === 'undefined' || typeof THREE === 'undefined') {
    console.error("Critical Error: Three.js or ForceGraph3D globals not loaded.");
}

// --- Configuration ---
const COLORS = {
    'Coding': '#00ffff',
    'Config': '#ff00ff',
    'Personal': '#ffff00',
    'General': '#ffffff',
    'Entity': '#ff4500',
    'Default': '#aaaaaa'
};

// --- 1. 3D Graph Initialization ---
// Access globals directly
const Graph = ForceGraph3D({ controlType: 'orbit' })(document.getElementById('canvas-container'))
    .backgroundColor('#000510')
    .nodeColor(node => COLORS[node.group] || COLORS['Default'])
    .nodeVal(node => node.type === 'memory' ? 4 : 2)
    .nodeLabel('label')
    .nodeResolution(16) // Lower resolution for performance
    .linkWidth(0.5)
    .linkColor(() => 'rgba(0, 255, 65, 0.15)')
    .linkOpacity(0.3)
    .nodeThreeObject(node => {
        // Use global SpriteText
        const sprite = new SpriteText(node.label || node.id);
        sprite.material.depthWrite = false; // Transparent sprite
        sprite.color = COLORS[node.group] || COLORS['Default'];
        sprite.textHeight = 2;
        return sprite;
    })
    .onNodeClick(node => {
        // Aim at node from outside it
        const distance = 40;
        const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
        Graph.cameraPosition(
            { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
            node, // lookAt ({ x, y, z })
            3000  // ms transition duration
        );
    });

// Force a resize to ensure it fills the container
window.addEventListener('resize', () => {
    Graph.width(window.innerWidth);
    Graph.height(window.innerHeight);
});
Graph.width(window.innerWidth);
Graph.height(window.innerHeight);

// Add initial dummy data to verify rendering immediately
Graph.graphData({
    nodes: [
        { id: 'CORE', group: 'General', label: 'Cognitive Core', type: 'entity' },
        { id: 'MEM_INIT', group: 'Config', label: 'System Initialized', type: 'memory' }
    ],
    links: [
        { source: 'CORE', target: 'MEM_INIT' }
    ]
});

// --- Post-Processing Effects (Bloom) ---
// Access THREE global for UnrealBloomPass if loaded via script tag
// Note: In UMD, UnrealBloomPass might be attached to THREE or global depending on the build.
// Standard Three.js examples usually attach to THREE if loaded after.
// But unpkg raw files might assume modules. 
// We loaded examples/js/... files which are for UMD. They usually modify THREE namespace.
// Let's check THREE.UnrealBloomPass
const BloomPass = THREE.UnrealBloomPass || window.UnrealBloomPass;
if (BloomPass) {
    const bloomPass = new BloomPass();
    bloomPass.strength = 2.0;
    bloomPass.radius = 1;
    bloomPass.threshold = 0.1;
    Graph.postProcessingComposer().addPass(bloomPass);
} else {
    console.warn("UnrealBloomPass not found in globals.");
}

// --- Custom Particle System (Data Dust) ---
// We inject a Three.js PointCloud into the scene
const scene = Graph.scene();
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 2000; // Spread across space
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particlesMaterial = new THREE.PointsMaterial({
    size: 2,
    color: 0x00ff41,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Animate particles
function animateParticles() {
    particlesMesh.rotation.y += 0.0005;
    particlesMesh.rotation.x += 0.0002;
    requestAnimationFrame(animateParticles);
}
animateParticles();


// --- 2. Data Management ---
let graphData = { nodes: [], links: [] };

export function updateGraph(newData) {
    console.log("Graph update received:", newData);
    
    // Safety check: ensure newData is valid
    if (!newData || !newData.nodes || !Array.isArray(newData.nodes)) {
        console.warn("Invalid graph data received:", newData);
        return;
    }
    
    // Simple heuristic: if backend returns empty, don't overwrite the dummy data if we haven't loaded real data yet
    if (newData.nodes.length === 0 && graphData.nodes.length > 0) return;

    const existingNodes = new Set(graphData.nodes.map(n => n.id));
    const existingLinks = new Set(graphData.links.map(l => `${l.source.id || l.source}-${l.target.id || l.target}`));
    
    let hasChanges = false;
    
    newData.nodes.forEach(n => {
        if (!existingNodes.has(n.id)) {
            // Assign category group based on metadata or type
            let group = 'General';
            if (n.type === 'entity') group = 'Entity';
            else if (n.category) group = n.category; // If backend provides category
            // Fallback heuristics for demo if backend data is raw
            else if (n.label && n.label.includes('配置')) group = 'Config';
            else if (n.label && n.label.includes('代码')) group = 'Coding';
            else if (n.label && n.label.includes('画像')) group = 'Personal';
            
            graphData.nodes.push({ ...n, group });
            hasChanges = true;
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
        console.log("Rendering graph updates...", graphData);
        Graph.graphData(graphData);
    }
}

export function triggerSpark(nodeId) {
    // 3D Spark: Emit particles or flash
    // Since we can't easily emit particles in this wrapper, we pulse the node
    const node = graphData.nodes.find(n => n.id === nodeId);
    if (!node) return;

    // Flash effect logic would go here if extending ThreeJS materials
    // For now, we rely on the log stream for activity feedback
}
