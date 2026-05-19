---
layout: page
sidebar: false
---

<script setup>
import { ref } from 'vue'

const nodes = [
  { id: 'signal', label: '信号', url: '/exam-notes/signals/signal-basics' },
  { id: 'system', label: '系统', url: '/exam-notes/signals/system-properties' },
  { id: 'time', label: '时域分析', url: '/exam-notes/signals/time-continuous' },
  { id: 'convolution', label: '卷积', url: '/exam-notes/signals/convolution' },
  { id: 'fourier', label: '傅里叶变换', url: '/exam-notes/signals/fourier-transform' },
  { id: 'sampling', label: '抽样定理', url: '/exam-notes/signals/sampling-theorem' },
  { id: 'laplace', label: '拉普拉斯变换', url: '/exam-notes/signals/laplace-transform' },
  { id: 'ztransform', label: 'Z变换', url: '/exam-notes/signals/z-transform' },
  { id: 'hs', label: '系统函数', url: '/exam-notes/signals/system-function' }
]

const edges = [
  { id: 's1', source: 'signal', target: 'system', label: '信号输入系统产生响应' },
  { id: 's2', source: 'time', target: 'convolution', label: '时域分析的核心工具' },
  { id: 's3', source: 'time', target: 'fourier', label: '傅里叶变换将时域转到频域' },
  { id: 's4', source: 'time', target: 'laplace', label: '拉普拉斯变换将时域转到复频域' },
  { id: 's5', source: 'fourier', target: 'sampling', label: '频域分析导出抽样定理' },
  { id: 's6', source: 'laplace', target: 'hs', label: '系统函数是拉普拉斯域的描述' },
  { id: 's7', source: 'ztransform', target: 'hs', label: '离散系统的系统函数基于Z变换' }
]

const bg = ref('#0c1f2c')
const node = ref('rgba(6, 182, 212, 0.9)')
const text = ref('#ffffff')
const link = ref('#5a7a8a')
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
