<template>
  <div class="graph-wrapper">
    <div ref="graphContainer" class="graph-container-3d"></div>
    <a :href="backUrl" class="back-btn">← 返回笔记目录</a>
    <div v-if="selectedLink" class="link-modal-overlay" @click.self="selectedLink = null">
      <div class="link-modal">
        <h4>概念关系</h4>
        <p class="link-rel">
          <span class="node-tag">{{ sourceLabel }}</span>
          <span class="arrow">→</span>
          <span class="node-tag">{{ targetLabel }}</span>
        </p>
        <p class="link-desc">{{ selectedLink.label }}</p>
        <button @click="selectedLink = null">关闭</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  nodes: { type: Array, default: () => [] },
  edges: { type: Array, default: () => [] },
  backUrl: { type: String, default: './' }
})

const graphContainer = ref(null)
const selectedLink = ref(null)

const sourceLabel = computed(() => {
  if (!selectedLink.value) return ''
  const n = props.nodes.find(node => node.id === selectedLink.value.source)
  return n ? n.label : selectedLink.value.source
})

const targetLabel = computed(() => {
  if (!selectedLink.value) return ''
  const n = props.nodes.find(node => node.id === selectedLink.value.target)
  return n ? n.label : selectedLink.value.target
})

let graphInstance = null
let resizeObserver = null

onMounted(async () => {
  const ForceGraph3D = await import('3d-force-graph')
  const fg = ForceGraph3D.default

  const data = {
    nodes: props.nodes.map(n => ({ ...n })),
    links: props.edges.map(e => ({ id: e.id, source: e.source, target: e.target, label: e.label }))
  }

  graphInstance = fg()(graphContainer.value)
    .graphData(data)
    .nodeLabel('label')
    .nodeColor(() => '#4f46e5')
    .nodeRelSize(7)
    .nodeOpacity(0.95)
    .linkWidth(1.2)
    .linkColor(() => '#64748b')
    .linkOpacity(0.6)
    .linkDirectionalArrowLength(8)
    .linkDirectionalArrowRelPos(1)
    .linkDirectionalArrowColor(() => '#64748b')
    .backgroundColor('#0f172a')
    .showNavInfo(false)
    .onNodeClick(node => {
      if (node.url) {
        window.location.href = node.url
      }
    })
    .onLinkClick(link => {
      selectedLink.value = link
    })
    .onBackgroundClick(() => {
      selectedLink.value = null
    })

  graphInstance.width(graphContainer.value.clientWidth)
  graphInstance.height(graphContainer.value.clientHeight)

  resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect
      graphInstance.width(width).height(height)
    }
  })
  resizeObserver.observe(graphContainer.value)
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  if (graphInstance) {
    try {
      graphInstance._deinit()
    } catch (e) {
      // ignore cleanup errors
    }
  }
})
</script>

<style scoped>
.graph-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}
.graph-container-3d {
  width: 100%;
  height: 100%;
  cursor: grab;
}
.graph-container-3d:active {
  cursor: grabbing;
}
.back-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 101;
  background: rgba(30, 41, 59, 0.8);
  color: #e2e8f0;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(148, 163, 184, 0.2);
  transition: background 0.2s;
}
.back-btn:hover {
  background: rgba(51, 65, 85, 0.9);
}
.link-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 102;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
}
.link-modal {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 24px;
  max-width: 380px;
  width: 90%;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  color: #e2e8f0;
}
.link-modal h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
  color: #94a3b8;
  font-weight: 500;
}
.link-rel {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 12px 0;
  flex-wrap: wrap;
}
.node-tag {
  background: #334155;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 13px;
  color: #f8fafc;
}
.arrow {
  color: #64748b;
  font-size: 14px;
}
.link-desc {
  margin: 0 0 20px 0;
  font-size: 15px;
  line-height: 1.6;
  color: #f1f5f9;
}
.link-modal button {
  background: #4f46e5;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.2s;
}
.link-modal button:hover {
  background: #4338ca;
}
</style>
