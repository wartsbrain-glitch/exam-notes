# 极限与连续

## 重要极限

### 两个基本极限

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

$$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$$

### 等价无穷小（$x \to 0$）

$$\sin x \sim x, \quad \tan x \sim x, \quad \arcsin x \sim x$$

$$1 - \cos x \sim \frac{1}{2}x^2, \quad e^x - 1 \sim x, \quad \ln(1+x) \sim x$$

## 洛必达法则

若 $\lim_{x \to x_0} \frac{f(x)}{g(x)}$ 为 $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$ 型，则

$$\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)}$$

## 夹逼准则

若 $g(x) \le f(x) \le h(x)$，且 $\lim g(x) = \lim h(x) = A$，则 $\lim f(x) = A$。

---

**记忆碎片**：看到 $1^\infty$ 型极限，优先想到凑成 $(1+\frac{1}{n})^n$ 形式。
