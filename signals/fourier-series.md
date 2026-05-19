# 傅里叶级数

## 周期信号的频谱分解

周期为 $T$ 的信号 $x(t)$ 可展开为：

$$x(t) = \sum_{k=-\infty}^{+\infty} c_k e^{jk\omega_0 t}$$

其中 $\omega_0 = \frac{2\pi}{T}$ 为基波角频率。

## 指数形式傅里叶级数

### 系数

$$c_k = \frac{1}{T} \int_{T} x(t) e^{-jk\omega_0 t} dt$$

### 频谱特性

- $|c_k|$：幅度谱（偶对称）
- $\arg(c_k)$：相位谱（奇对称）
- 频谱是**离散**的，间隔为 $\omega_0$

## 三角形式傅里叶级数

$$x(t) = a_0 + \sum_{k=1}^{\infty} [a_k \cos(k\omega_0 t) + b_k \sin(k\omega_0 t)]$$

其中：

$$a_0 = \frac{1}{T} \int_{T} x(t) dt$$

$$a_k = \frac{2}{T} \int_{T} x(t) \cos(k\omega_0 t) dt$$

$$b_k = \frac{2}{T} \int_{T} x(t) \sin(k\omega_0 t) dt$$

## 帕塞瓦尔定理

周期信号的平均功率等于各次谐波分量功率之和：

$$\frac{1}{T} \int_{T} |x(t)|^2 dt = \sum_{k=-\infty}^{+\infty} |c_k|^2$$

---

**记忆碎片**：傅里叶级数把周期信号分解为直流分量和一系列谐波分量。频谱是离散的，谐波次数越高，通常幅度越小（收敛性）。
