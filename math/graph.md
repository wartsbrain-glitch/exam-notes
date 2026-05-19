---
layout: page
sidebar: false
---

<script setup>
const nodes = [
  { id: 'limit', label: '极限', url: '/exam-notes/math/calculus-limit' },
  { id: 'derivative', label: '导数', url: '/exam-notes/math/calculus-derivative' },
  { id: 'integral', label: '积分', url: '/exam-notes/math/calculus-integral' },
  { id: 'continuity', label: '连续', url: '/exam-notes/math/calculus-limit' },
  { id: 'infinitesimal', label: '无穷小', url: '/exam-notes/math/calculus-limit' },
  { id: 'determinant', label: '行列式', url: '/exam-notes/math/linear-determinant' },
  { id: 'matrix', label: '矩阵', url: '/exam-notes/math/linear-matrix' },
  { id: 'eigen', label: '特征值', url: '/exam-notes/math/linear-eigen' },
  { id: 'probability', label: '概率', url: '/exam-notes/math/probability-basic' },
  { id: 'distribution', label: '分布', url: '/exam-notes/math/probability-distribution' }
]

const edges = [
  { id: 'e1', source: 'limit', target: 'derivative', label: '导数定义基于极限' },
  { id: 'e2', source: 'limit', target: 'integral', label: '定积分定义基于极限' },
  { id: 'e3', source: 'derivative', target: 'integral', label: '微积分基本定理' },
  { id: 'e4', source: 'limit', target: 'continuity', label: '连续是极限值等于函数值' },
  { id: 'e5', source: 'limit', target: 'infinitesimal', label: 'lim f(x)=A ⟺ f(x)=A+α, α为无穷小' },
  { id: 'e6', source: 'infinitesimal', target: 'limit', label: '等价无穷小可替换求极限' },
  { id: 'e7', source: 'derivative', target: 'continuity', label: '可导必连续（充分非必要）' },
  { id: 'e8', source: 'determinant', target: 'matrix', label: '行列式是方阵的属性' },
  { id: 'e9', source: 'matrix', target: 'eigen', label: '特征值是矩阵的特征' },
  { id: 'e10', source: 'probability', target: 'distribution', label: '分布描述随机变量的概率规律' }
]
</script>

<GraphView3D :nodes="nodes" :edges="edges" backUrl="./" />
