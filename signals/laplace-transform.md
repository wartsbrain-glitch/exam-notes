# 拉普拉斯变换

## 定义

### 双边拉普拉斯变换

$$X(s) = \mathcal{L}\{x(t)\} = \int_{-\infty}^{+\infty} x(t) e^{-st} dt$$

其中 $s = \sigma + j\omega$ 为复频率。

### 单边拉普拉斯变换

$$X(s) = \int_{0^-}^{+\infty} x(t) e^{-st} dt$$

> 考研中若无特别说明，一般使用**单边**拉普拉斯变换，适合分析因果系统。

## 收敛域（ROC）

- ROC 是 $s$ 平面上使积分收敛的区域
- 对于右边信号，ROC 为某条竖直线的右侧
- 对于左边信号，ROC 为某条竖直线的左侧
- 对于双边信号，ROC 为一个竖直带状区域

## 常用拉普拉斯变换对

| 信号 $x(t)$ | $X(s)$ | ROC |
|-------------|--------|-----|
| $\delta(t)$ | $1$ | 全平面 |
| $u(t)$ | $\frac{1}{s}$ | $\text{Re}\{s\} > 0$ |
| $e^{-at}u(t)$ | $\frac{1}{s+a}$ | $\text{Re}\{s\} > -a$ |
| $t^n u(t)$ | $\frac{n!}{s^{n+1}}$ | $\text{Re}\{s\} > 0$ |
| $\cos(\omega_0 t) u(t)$ | $\frac{s}{s^2 + \omega_0^2}$ | $\text{Re}\{s\} > 0$ |
| $\sin(\omega_0 t) u(t)$ | $\frac{\omega_0}{s^2 + \omega_0^2}$ | $\text{Re}\{s\} > 0$ |

## 基本性质

### 时移

$$\mathcal{L}\{x(t-t_0)u(t-t_0)\} = e^{-st_0} X(s)$$

### s域平移

$$\mathcal{L}\{e^{s_0 t} x(t)\} = X(s - s_0)$$

### 尺度变换

$$\mathcal{L}\{x(at)\} = \frac{1}{a} X\left(\frac{s}{a}\right), \quad a > 0$$

### 时域微分

$$\mathcal{L}\left\{\frac{dx(t)}{dt}\right\} = sX(s) - x(0^-)$$

### 时域积分

$$\mathcal{L}\left\{\int_{0^-}^{t} x(\tau) d\tau\right\} = \frac{1}{s} X(s)$$

### 初值定理

$$x(0^+) = \lim_{s \to \infty} sX(s)$$

### 终值定理

$$\lim_{t \to \infty} x(t) = \lim_{s \to 0} sX(s)$$

> 终值定理适用条件：$sX(s)$ 的所有极点位于左半平面或在原点处为一阶极点。

---

**记忆碎片**：拉普拉斯变换是傅里叶变换的推广，引入衰减因子 $e^{-\sigma t}$ 使更多信号满足收敛条件。分析系统时，极点位置直接决定系统稳定性。
