# 随机变量及其分布

## 常见离散型分布

### 二项分布 $X \sim B(n, p)$

$$P(X=k) = C_n^k p^k (1-p)^{n-k}, \quad k = 0, 1, \dots, n$$

$$E(X) = np, \quad D(X) = np(1-p)$$

### 泊松分布 $X \sim P(\lambda)$

$$P(X=k) = \frac{\lambda^k}{k!} e^{-\lambda}, \quad k = 0, 1, 2, \dots$$

$$E(X) = D(X) = \lambda$$

## 常见连续型分布

### 正态分布 $X \sim N(\mu, \sigma^2)$

$$f(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

$$E(X) = \mu, \quad D(X) = \sigma^2$$

### 标准正态分布

$X \sim N(0, 1)$，分布函数记为 $\Phi(x)$。

---

待补充多维随机变量、大数定律与中心极限定理。
