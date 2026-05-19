# 信号与系统

西安电子科技大学生命科学学院专业课——信号与系统复习笔记。

## 目录

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

## 核心公式速查

### 傅里叶变换对

$$X(j\omega) = \int_{-\infty}^{+\infty} x(t) e^{-j\omega t} dt$$

$$x(t) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\omega) e^{j\omega t} d\omega$$

### 拉普拉斯变换

$$X(s) = \int_{-\infty}^{+\infty} x(t) e^{-st} dt$$

### Z变换

$$X(z) = \sum_{n=-\infty}^{+\infty} x[n] z^{-n}$$

---

> 信号与系统重在理解变换域之间的映射关系，公式要会推，性质要会用。
