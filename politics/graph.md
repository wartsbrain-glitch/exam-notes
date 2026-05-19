---
layout: page
sidebar: false
---

<script setup>
const nodes = [
  { id: 'materialism', label: '唯物论', url: '/exam-notes/politics/marx-philosophy' },
  { id: 'dialectics', label: '辩证法', url: '/exam-notes/politics/marx-philosophy' },
  { id: 'epistemology', label: '认识论', url: '/exam-notes/politics/marx-philosophy' },
  { id: 'commodity', label: '商品', url: '/exam-notes/politics/marx-economics' },
  { id: 'surplus', label: '剩余价值', url: '/exam-notes/politics/marx-economics' },
  { id: 'revolution', label: '新民主主义革命', url: '/exam-notes/politics/mao-revolution' },
  { id: 'construction', label: '社会主义建设', url: '/exam-notes/politics/mao-construction' },
  { id: 'current', label: '时政', url: '/exam-notes/politics/current-events' }
]

const edges = [
  { id: 'p1', source: 'materialism', target: 'dialectics', label: '唯物论是辩证法的基础' },
  { id: 'p2', source: 'dialectics', target: 'epistemology', label: '辩证法指导认识论' },
  { id: 'p3', source: 'commodity', target: 'surplus', label: '商品交换产生剩余价值' },
  { id: 'p4', source: 'revolution', target: 'construction', label: '革命成功后进入建设阶段' }
]
</script>

<GraphView3D
  :nodes="nodes"
  :edges="edges"
  backUrl="./"
  bgColor="#1a0f0f"
  nodeColor="rgba(220, 38, 38, 0.9)"
  linkColor="#8a6a6a"
/>
