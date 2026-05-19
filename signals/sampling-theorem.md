# 抽样定理

## 抽样的数学模型

$$x_p(t) = x(t) \cdot p(t)$$

其中 $p(t)$ 为抽样脉冲序列。

## 理想抽样

$$p(t) = \sum_{n=-\infty}^{+\infty} \delta(t - nT_s)$$

抽样后信号：

$$x_p(t) = \sum_{n=-\infty}^{+\infty} x(nT_s) \delta(t - nT_s)$$

## 频谱变化

抽样信号的频谱是原信号频谱的周期延拓：

$$X_p(j\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{+\infty} X(j(\omega - k\omega_s))$$

其中 $\omega_s = \frac{2\pi}{T_s}$ 为抽样角频率。

## 奈奎斯特抽样定理

若 $x(t)$ 为带限信号，最高频率为 $\omega_m$（或 $f_m$），则：

- **无失真恢复条件**：$\omega_s \ge 2\omega_m$，即 $f_s \ge 2f_m$
- **奈奎斯特频率**：$f_{s\min} = 2f_m$
- **奈奎斯特间隔**：$T_{s\max} = \frac{1}{2f_m}$

## 混叠（Aliasing）

若 $f_s < 2f_m$，频谱发生重叠，无法无失真恢复原信号。

**避免混叠的方法**：
1. 提高抽样频率
2. 预滤波（抗混叠滤波器）：抽样前先滤除高于 $f_s/2$ 的频率成分

---

**记忆碎片**：抽样定理是连接连续世界和离散世界的桥梁。记住 $f_s \ge 2f_m$，以及频谱周期延拓的直观图像。
