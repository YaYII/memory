import ForceGraph3D from '3d-force-graph';
import * as THREE from 'three';
// Remove the .js extension to let import map / module resolution handle it (especially for esm.sh)
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass';
import SpriteText from 'three-spritetext';

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
        // Use SpriteText for labels to avoid "DragControls" issues and improve visibility
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

// --- Post-Processing Effects (Bloom) ---
const bloomPass = new UnrealBloomPass();
bloomPass.strength = 2.0;
bloomPass.radius = 1;
bloomPass.threshold = 0.1;
Graph.postProcessingComposer().addPass(bloomPass);

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
