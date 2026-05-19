# 微分学

## 核心概念关系

### 可导的充要条件

$$f(x) \text{ 在 } x_0 \text{ 可导} \iff f'_-(x_0) = f'_+(x_0)$$

即：函数在某点可导的**充分必要条件**是左导数与右导数都存在且相等。

### 可微与可导的等价关系

$$f(x) \text{ 在 } x_0 \text{ 可微} \iff f(x) \text{ 在 } x_0 \text{ 可导}$$

且当可微时：$dy = f'(x_0) \Delta x = f'(x_0)dx$

> 在一元函数中，**可导 ⟺ 可微**，二者是等价的。

### 可导与连续的关系

$$\text{可导} \implies \text{连续}$$

但 **连续 $\nRightarrow$ 可导**（如 $y = |x|$ 在 $x=0$ 处）。

即：可导是连续的**充分非必要**条件。

---

## 基本导数公式

$$(x^n)' = nx^{n-1}, \quad (a^x)' = a^x \ln a, \quad (\log_a x)' = \frac{1}{x \ln a}$$

$$(\sin x)' = \cos x, \quad (\cos x)' = -\sin x, \quad (\tan x)' = \sec^2 x$$

$$(\arcsin x)' = \frac{1}{\sqrt{1-x^2}}, \quad (\arctan x)' = \frac{1}{1+x^2}$$

---

## 求导法则

### 复合函数求导（链式法则）

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

### 隐函数求导

方程 $F(x,y) = 0$ 两边对 $x$ 求导，将 $y$ 视为 $x$ 的函数。

### 参数方程求导

$$\begin{cases} x = \varphi(t) \\ y = \psi(t) \end{cases} \implies \frac{dy}{dx} = \frac{\psi'(t)}{\varphi'(t)}$$

### 反函数求导

$$\frac{dx}{dy} = \frac{1}{\frac{dy}{dx}}$$

---

## 微分中值定理

| 定理 | 条件 | 结论 |
|------|------|------|
| **费马引理** | $f$ 在 $x_0$ 可导且取极值 | $f'(x_0) = 0$ |
| **罗尔定理** | $[a,b]$ 连续，$(a,b)$ 可导，$f(a)=f(b)$ | $\exists \xi \in (a,b), f'(\xi)=0$ |
| **拉格朗日** | $[a,b]$ 连续，$(a,b)$ 可导 | $\exists \xi \in (a,b), f'(\xi)=\frac{f(b)-f(a)}{b-a}$ |
| **柯西中值** | $f,g$ 满足拉格朗日条件，$g' \neq 0$ | $\exists \xi, \frac{f'(\xi)}{g'(\xi)}=\frac{f(b)-f(a)}{g(b)-g(a)}$ |

> 罗尔 $\subset$ 拉格朗日（令 $f(a)=f(b)$ 即得罗尔）。

---

## 泰勒公式

### 带拉格朗日余项

$$f(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{f''(x_0)}{2!}(x-x_0)^2 + \cdots + \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n + R_n(x)$$

$$R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}$$

### 麦克劳林公式（$x_0 = 0$）

$$e^x = 1 + x + \frac{x^2}{2!} + \cdots + \frac{x^n}{n!} + o(x^n)$$

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots + (-1)^n\frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+1})$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots + (-1)^n\frac{x^{2n}}{(2n)!} + o(x^{2n})$$

$$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots + (-1)^{n-1}\frac{x^n}{n} + o(x^n)$$

$$(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \cdots + o(x^n)$$

---

## 函数性态分析

### 单调性

- $f'(x) > 0$（某区间）$\implies f(x)$ 单调递增
- $f'(x) < 0$（某区间）$\implies f(x)$ 单调递减

### 极值判定

**必要条件**：$f(x)$ 在 $x_0$ 取极值且可导 $\implies f'(x_0) = 0$

**第一充分条件**：$f'(x)$ 在 $x_0$ 两侧变号 $\implies$ 极值点

**第二充分条件**：$f'(x_0)=0, f''(x_0) \neq 0 \implies$ 极值点（$f''<0$ 极大，$f''>0$ 极小）

### 凹凸性

- $f''(x) > 0$ $\implies$ 凹函数（下凸）
- $f''(x) < 0$ $\implies$ 凸函数（上凸）

**拐点**：$f''(x)$ 变号的点。

---

## 充分必要关系汇总

| 命题 | 条件类型 |
|------|----------|
| 可导 | $\iff$ 左导数 = 右导数 |
| 可微 | $\iff$ 可导（一元函数）|
| 可导 | $\implies$ 连续（充分非必要）|
| 取极值 + 可导 | $\implies$ $f'(x_0)=0$（必要非充分）|
| $f'$ 变号 | $\implies$ 极值点（充分条件）|
