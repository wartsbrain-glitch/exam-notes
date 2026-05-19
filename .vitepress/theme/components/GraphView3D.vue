<template>
  <div class="graph-wrapper">
    <div ref="graphContainer" class="graph-container-3d"></div>
    <a :href="backUrl" class="back-btn">← 返回笔记目录</a>

    <!-- 配色面板 -->
    <div class="color-panel">
      <button class="color-toggle" @click="showPanel = !showPanel">
        {{ showPanel ? '收起' : '🎨 配色' }}
      </button>
      <div v-if="showPanel" class="color-picker">
        <label>
          <span>背景</span>
          <input type="color" v-model="currentBg" />
        </label>
        <label>
          <span>节点</span>
          <input type="color" v-model="currentNode" />
        </label>
        <label>
          <span>文字</span>
          <input type="color" v-model="currentText" />
        </label>
        <label>
          <span>连线</span>
          <input type="color" v-model="currentLink" />
        </label>
      </div>
    </div>

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
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

const props = defineProps({
  nodes: { type: Array, default: () => [] },
  edges: { type: Array, default: () => [] },
  backUrl: { type: String, default: './' },
  bgColor: { type: String, default: '#0f172a' },
  nodeColor: { type: String, default: 'rgba(79, 70, 229, 0.9)' },
  textColor: { type: String, default: '#ffffff' },
  linkColor: { type: String, default: '#64748b' }
})

// 颜色转换辅助
function toHex(color) {
  if (!color) return '#4f46e5'
  if (color.startsWith('#')) return color
  const m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (m) {
    return '#' + [1, 2, 3].map(i => parseInt(m[i]).toString(16).padStart(2, '0')).join('')
  }
  return '#4f46e5'
}

function hexToRgba(hex, alpha = 0.9) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const currentBg = ref(toHex(props.bgColor))
const currentNode = ref(toHex(props.nodeColor))
const currentText = ref(toHex(props.textColor))
const currentLink = ref(toHex(props.linkColor))
const showPanel = ref(false)

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
  const THREE = await import('three')
  const fg = ForceGraph3D.default

  const data = {
    nodes: props.nodes.map(n => JSON.parse(JSON.stringify(n))),
    links: props.edges.map(e => JSON.parse(JSON.stringify({ id: e.id, source: e.source, target: e.target, label: e.label })))
  }

  function createTextSprite(text) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const fontSize = 40
    ctx.font = `bold ${fontSize}px "Microsoft YaHei", "PingFang SC", sans-serif`
    const metrics = ctx.measureText(text)
    const padX = 32
    const padY = 20
    const w = Math.ceil(metrics.width) + padX * 2
    const h = fontSize + padY * 2

    canvas.width = w
    canvas.height = h

    const r = 10
    ctx.fillStyle = hexToRgba(currentNode.value, 0.9)
    ctx.beginPath()
    ctx.moveTo(r, 0)
    ctx.lineTo(w - r, 0)
    ctx.quadraticCurveTo(w, 0, w, r)
    ctx.lineTo(w, h - r)
    ctx.quadraticCurveTo(w, h, w - r, h)
    ctx.lineTo(r, h)
    ctx.quadraticCurveTo(0, h, 0, h - r)
    ctx.lineTo(0, r)
    ctx.quadraticCurveTo(0, 0, r, 0)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = currentText.value
    ctx.font = `bold ${fontSize}px "Microsoft YaHei", "PingFang SC", sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, w / 2, h / 2)

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false })
    const sprite = new THREE.Sprite(material)
    sprite.scale.set(w / 18, h / 18, 1)
    return sprite
  }

  graphInstance = fg()(graphContainer.value)
    .graphData(data)
    .nodeThreeObject(node => createTextSprite(node.label))
    .nodeThreeObjectExtend(false)
    .linkWidth(1.2)
    .linkColor(() => currentLink.value)
    .linkOpacity(0.5)
    .linkDirectionalArrowLength(0)
    .backgroundColor(currentBg.value)
    .showNavInfo(false)
    .onNodeClick(node => {
      if (node.url) {
        window.location.href = node.url
      }
    })
    .onLinkClick(link => {
      selectedLink.value = {
        source: link.source,
        target: link.target,
        label: link.label
      }
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

  // 动态配色监听
  watch(currentBg, val => {
    if (graphInstance) graphInstance.backgroundColor(val)
  })

  watch(currentLink, val => {
    if (graphInstance) graphInstance.linkColor(() => val)
  })

  watch([currentNode, currentText], () => {
    if (graphInstance) {
      graphInstance.nodeThreeObject(node => createTextSprite(node.label))
    }
  })
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

/* 配色面板 */
.color-panel {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}
.color-toggle {
  background: rgba(30, 41, 59, 0.85);
  color: #e2e8f0;
  border: 1px solid rgba(148, 163, 184, 0.25);
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  backdrop-filter: blur(8px);
  transition: background 0.2s;
}
.color-toggle:hover {
  background: rgba(51, 65, 85, 0.95);
}
.color-picker {
  background: rgba(15, 23, 42, 0.92);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 10px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  min-width: 160px;
}
.color-picker label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #cbd5e1;
  font-size: 13px;
  gap: 12px;
}
.color-picker input[type="color"] {
  width: 32px;
  height: 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: none;
  padding: 0;
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
