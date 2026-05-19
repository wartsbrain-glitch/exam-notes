# 信号与系统

<GraphView
  :nodes="[
    { id: 'signal', label: '信号', url: '/exam-notes/signals/signal-basics' },
    { id: 'system', label: '系统', url: '/exam-notes/signals/system-properties' },
    { id: 'time', label: '时域分析', url: '/exam-notes/signals/time-continuous' },
    { id: 'convolution', label: '卷积', url: '/exam-notes/signals/convolution' },
    { id: 'fourier', label: '傅里叶变换', url: '/exam-notes/signals/fourier-transform' },
    { id: 'sampling', label: '抽样定理', url: '/exam-notes/signals/sampling-theorem' },
    { id: 'laplace', label: '拉普拉斯变换', url: '/exam-notes/signals/laplace-transform' },
    { id: 'ztransform', label: 'Z变换', url: '/exam-notes/signals/z-transform' },
    { id: 'hs', label: '系统函数', url: '/exam-notes/signals/system-function' }
  ]"
  :edges="[
    { id: 's1', source: 'signal', target: 'system', label: '信号输入系统产生响应' },
    { id: 's2', source: 'time', target: 'convolution', label: '时域分析的核心工具' },
    { id: 's3', source: 'time', target: 'fourier', label: '傅里叶变换将时域转到频域' },
    { id: 's4', source: 'time', target: 'laplace', label: '拉普拉斯变换将时域转到复频域' },
    { id: 's5', source: 'fourier', target: 'sampling', label: '频域分析导出抽样定理' },
    { id: 's6', source: 'laplace', target: 'hs', label: '系统函数是拉普拉斯域的描述' },
    { id: 's7', source: 'ztransform', target: 'hs', label: '离散系统的系统函数基于Z变换' }
  ]"
/>

## 笔记

- [信号的分类与运算](signal-basics)
- [系统的性质与分类](system-properties)
- [连续时间系统](time-continuous)
- [离散时间系统](time-discrete)
- [卷积](convolution)
- [傅里叶级数](fourier-series)
- [傅里叶变换](fourier-transform)
- [抽样定理](sampling-theorem)
- [拉普拉斯变换](laplace-transform)
- [Z变换](z-transform)
- [系统函数 H(s)](system-function)
- [状态方程](state-space)
