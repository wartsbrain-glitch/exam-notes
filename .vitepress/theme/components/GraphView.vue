<template>
  <div ref="cyContainer" class="graph-container"></div>
  <div v-if="selectedEdge" class="edge-tooltip">
    <div class="edge-content">{{ selectedEdge }}</div>
    <button @click="selectedEdge = null">关闭</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  nodes: { type: Array, default: () => [] },
  edges: { type: Array, default: () => [] }
})

const cyContainer = ref(null)
const selectedEdge = ref(null)

onMounted(async () => {
  const cytoscape = await import('cytoscape')
  const cy = cytoscape.default({
    container: cyContainer.value,
    elements: [
      ...props.nodes.map(n => ({ data: { id: n.id, label: n.label, url: n.url } })),
      ...props.edges.map(e => ({ data: { id: e.id, source: e.source, target: e.target, label: e.label } }))
    ],
    style: [
      {
        selector: 'node',
        style: {
          'background-color': '#4f46e5',
          'label': 'data(label)',
          'color': '#fff',
          'font-size': '14px',
          'text-valign': 'center',
          'text-halign': 'center',
          'width': '80px',
          'height': '40px',
          'shape': 'roundrectangle',
          'border-width': 2,
          'border-color': '#4338ca'
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 2,
          'line-color': '#94a3b8',
          'target-arrow-color': '#94a3b8',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
          'label': 'data(label)',
          'font-size': '11px',
          'color': '#64748b',
          'text-background-color': '#fff',
          'text-background-opacity': 0.8,
          'text-background-padding': '2px'
        }
      },
      {
        selector: 'node:hover',
        style: {
          'background-color': '#6366f1',
          'border-color': '#4f46e5'
        }
      }
    ],
    layout: {
      name: 'cose',
      padding: 20,
      nodeRepulsion: 400000,
      idealEdgeLength: 100,
      gravity: 0.1
    }
  })

  cy.on('tap', 'node', function(evt) {
    const node = evt.target
    const url = node.data('url')
    if (url) {
      window.location.href = url
    }
  })

  cy.on('tap', 'edge', function(evt) {
    const edge = evt.target
    selectedEdge.value = edge.data('label') || '关联'
  })

  cy.on('tap', function(evt) {
    if (evt.target === cy) {
      selectedEdge.value = null
    }
  })
})
</script>

<style scoped>
.graph-container {
  width: 100%;
  height: 500px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
}
.edge-tooltip {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  z-index: 1000;
  max-width: 400px;
}
.edge-content {
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.6;
}
.edge-tooltip button {
  background: #4f46e5;
  color: #fff;
  border: none;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
