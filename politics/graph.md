---
layout: page
sidebar: false
---

<script setup>
import { ref } from 'vue'

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

const bg = ref('#1a0f0f')
const node = ref('rgba(220, 38, 38, 0.9)')
const text = ref('#ffffff')
const link = ref('#8a6a6a')
</script>

<GraphView3D
  :nodes="nodes"
  :edges="edges"
  backUrl="./"
  :bgColor="bg"
  :nodeColor="node"
  :textColor="text"
  :linkColor="link"
/>

<div class="color-bar">
  <label>背景 <input type="color" v-model="bg" /></label>
  <label>节点 <input type="color" v-model="node" /></label>
  <label>文字 <input type="color" v-model="text" /></label>
  <label>连线 <input type="color" v-model="link" /></label>
</div>

<style>
.color-bar {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 101;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 10px;
  padding: 12px 16px;
  display: flex;
  gap: 16px;
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}
.color-bar label {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #cbd5e1;
  font-size: 12px;
  cursor: pointer;
}
.color-bar input[type="color"] {
  width: 28px;
  height: 22px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: none;
  padding: 0;
}
</style>
