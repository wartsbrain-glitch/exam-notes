# 傅里叶变换

## 定义

### 正变换

$$X(j\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{+\infty} x(t) e^{-j\omega t} dt$$

### 逆变换

$$x(t) = \mathcal{F}^{-1}\{X(j\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\omega) e^{j\omega t} d\omega$$

## 常用傅里叶变换对

| 信号 $x(t)$ | 频谱 $X(j\omega)$ |
|-------------|-------------------|
| $\delta(t)$ | $1$ |
| $1$ | $2\pi \delta(\omega)$ |
| $e^{-at}u(t) \, (a>0)$ | $\frac{1}{a+j\omega}$ |
| $u(t)$ | $\pi\delta(\omega) + \frac{1}{j\omega}$ |
| $\cos(\omega_0 t)$ | $\pi[\delta(\omega-\omega_0) + \delta(\omega+\omega_0)]$ |
| $\sin(\omega_0 t)$ | $\frac{\pi}{j}[\delta(\omega-\omega_0) - \delta(\omega+\omega_0)]$ |

## 基本性质

### 线性性

$$\mathcal{F}\{a x_1(t) + b x_2(t)\} = a X_1(j\omega) + b X_2(j\omega)$$

### 时移性质

$$\mathcal{F}\{x(t-t_0)\} = e^{-j\omega t_0} X(j\omega)$$

### 频移性质

$$\mathcal{F}\{x(t) e^{j\omega_0 t}\} = X(j(\omega - \omega_0))$$

### 尺度变换

$$\mathcal{F}\{x(at)\} = \frac{1}{|a|} X\left(j\frac{\omega}{a}\right)$$

### 卷积定理

$$\mathcal{F}\{x(t) * h(t)\} = X(j\omega) H(j\omega)$$

$$\mathcal{F}\{x(t) h(t)\} = \frac{1}{2\pi} X(j\omega) * H(j\omega)$$

### 微分性质

$$\mathcal{F}\left\{\frac{dx(t)}{dt}\right\} = j\omega X(j\omega)$$

---

**记忆碎片**：时域卷积 = 频域乘积，这是分析 LTI 系统响应最便捷的途径。
