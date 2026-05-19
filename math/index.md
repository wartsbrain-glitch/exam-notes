# 数学

<GraphView
  :nodes="[
    { id: 'limit', label: '极限', url: '/exam-notes/math/calculus-limit' },
    { id: 'derivative', label: '导数', url: '/exam-notes/math/calculus-derivative' },
    { id: 'integral', label: '积分', url: '/exam-notes/math/calculus-integral' },
    { id: 'determinant', label: '行列式', url: '/exam-notes/math/linear-determinant' },
    { id: 'matrix', label: '矩阵', url: '/exam-notes/math/linear-matrix' },
    { id: 'eigen', label: '特征值', url: '/exam-notes/math/linear-eigen' },
    { id: 'probability', label: '概率', url: '/exam-notes/math/probability-basic' },
    { id: 'distribution', label: '分布', url: '/exam-notes/math/probability-distribution' }
  ]"
  :edges="[
    { id: 'e1', source: 'limit', target: 'derivative', label: '导数定义基于极限' },
    { id: 'e2', source: 'limit', target: 'integral', label: '定积分定义基于极限' },
    { id: 'e3', source: 'derivative', target: 'integral', label: '微积分基本定理' },
    { id: 'e4', source: 'determinant', target: 'matrix', label: '行列式是矩阵的属性' },
    { id: 'e5', source: 'matrix', target: 'eigen', label: '特征值是矩阵的特征' },
    { id: 'e6', source: 'probability', target: 'distribution', label: '随机变量的分布描述概率规律' }
  ]"
/>

## 笔记

- [极限与连续](calculus-limit)
- [微分学](calculus-derivative)
- [积分学](calculus-integral)
- [行列式](linear-determinant)
- [矩阵](linear-matrix)
- [特征值与特征向量](linear-eigen)
- [随机事件与概率](probability-basic)
- [随机变量及其分布](probability-distribution)
