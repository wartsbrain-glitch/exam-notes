# 积分学

## 核心概念关系

### 原函数与不定积分

若 $F'(x) = f(x)$，则 $F(x)$ 是 $f(x)$ 的**原函数**。

$$\int f(x)dx = F(x) + C$$

### 定积分与不定积分的关系（牛顿-莱布尼茨公式）

$$\int_a^b f(x)dx = F(b) - F(a)$$

其中 $F'(x) = f(x)$。这是连接**微分**与**积分**的桥梁。

### 可积的充分条件

1. $f(x)$ 在 $[a,b]$ 上**连续** $\implies$ 可积
2. $f(x)$ 在 $[a,b]$ 上**有界**且只有**有限个间断点** $\implies$ 可积

> 连续是可积的**充分**条件，非必要。

---

## 基本积分公式

$$\int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$

$$\int \frac{1}{x} dx = \ln|x| + C$$

$$\int e^x dx = e^x + C, \quad \int a^x dx = \frac{a^x}{\ln a} + C$$

$$\int \sin x dx = -\cos x + C, \quad \int \cos x dx = \sin x + C$$

$$\int \sec^2 x dx = \tan x + C, \quad \int \csc^2 x dx = -\cot x + C$$

$$\int \frac{1}{\sqrt{1-x^2}} dx = \arcsin x + C, \quad \int \frac{1}{1+x^2} dx = \arctan x + C$$

---

## 积分方法

### 第一换元法（凑微分）

$$\int f(\varphi(x))\varphi'(x)dx = \int f(u)du = F(u) + C$$

常见凑微分形式：
- $\frac{1}{x}dx = d(\ln|x|)$
- $\frac{1}{\sqrt{x}}dx = 2d(\sqrt{x})$
- $e^x dx = d(e^x)$
- $\sin x dx = -d(\cos x)$

### 第二换元法

$$\int f(x)dx = \int f(\varphi(t))\varphi'(t)dt$$

常见换元：
- $\sqrt{a^2-x^2}$：令 $x = a\sin t$
- $\sqrt{a^2+x^2}$：令 $x = a\tan t$
- $\sqrt{x^2-a^2}$：令 $x = a\sec t$

### 分部积分法

$$\int u dv = uv - \int v du$$

选择 $u$ 的优先级（LIATE法则）：**对数函数 > 反三角函数 > 代数函数 > 三角函数 > 指数函数**

常见应用：
- $\int x^n e^x dx$、$\int x^n \sin x dx$：选 $u = x^n$
- $\int x^n \ln x dx$、$\int x^n \arctan x dx$：选 $u = \ln x$ 或 $\arctan x$

---

## 定积分的性质

### 基本性质

- $\int_a^b f(x)dx = -\int_b^a f(x)dx$
- $\int_a^a f(x)dx = 0$
- $\int_a^b [f(x) \pm g(x)]dx = \int_a^b f(x)dx \pm \int_a^b g(x)dx$
- $\int_a^b f(x)dx = \int_a^c f(x)dx + \int_c^b f(x)dx$

### 积分中值定理

$$\int_a^b f(x)dx = f(\xi)(b-a), \quad \xi \in [a,b]$$

### 对称区间积分

- $f(x)$ 为**偶函数**：$\int_{-a}^a f(x)dx = 2\int_0^a f(x)dx$
- $f(x)$ 为**奇函数**：$\int_{-a}^a f(x)dx = 0$

---

## 反常积分

### 无穷限积分

$$\int_a^{+\infty} f(x)dx = \lim_{b \to +\infty} \int_a^b f(x)dx$$

### 瑕积分

$$\int_a^b f(x)dx = \lim_{\varepsilon \to 0^+} \int_{a+\varepsilon}^b f(x)dx \quad (f(x) \text{ 在 } a \text{ 处无界})$$

### $p$-积分判别法

$$\int_1^{+\infty} \frac{1}{x^p}dx \begin{cases} \text{收敛}, & p > 1 \\ \text{发散}, & p \le 1 \end{cases}$$

$$\int_0^1 \frac{1}{x^p}dx \begin{cases} \text{收敛}, & p < 1 \\ \text{发散}, & p \ge 1 \end{cases}$$

---

## 定积分的几何应用

### 平面图形面积

- $y = f(x) \ge 0$：$S = \int_a^b f(x)dx$
- $y = f(x)$ 与 $y = g(x)$ 之间：$S = \int_a^b |f(x)-g(x)|dx$

### 旋转体体积

- 绕 $x$ 轴：$V = \pi \int_a^b [f(x)]^2 dx$
- 绕 $y$ 轴：$V = 2\pi \int_a^b x|f(x)|dx$（柱壳法）

### 曲线弧长

$$s = \int_a^b \sqrt{1+(y')^2} dx$$

---

## 变上限积分

$$\Phi(x) = \int_a^x f(t)dt$$

### 基本定理

若 $f(x)$ 在 $[a,b]$ 上连续，则 $\Phi'(x) = f(x)$。

即：**变上限积分是被积函数的一个原函数**。

### 复合变限积分求导

$$\frac{d}{dx}\int_{\varphi(x)}^{\psi(x)} f(t)dt = f(\psi(x))\psi'(x) - f(\varphi(x))\varphi'(x)$$

---

## 充分必要关系汇总

| 命题 | 条件类型 |
|------|----------|
| 连续 | $\implies$ 可积（充分非必要）|
| 有界 + 有限个间断点 | $\implies$ 可积（充分非必要）|
| $F'(x)=f(x)$ | $\iff$ $F(x)$ 是 $f(x)$ 的原函数 |
