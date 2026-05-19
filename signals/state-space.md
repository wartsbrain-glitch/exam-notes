# 状态方程

## 状态变量与状态方程

### 概念

- **状态变量**：能够完全描述系统动态行为的最少一组变量
- **状态方程**：描述状态变量随时间演化的一阶微分/差分方程组

### 连续时间系统

$$\dot{\mathbf{q}}(t) = \mathbf{A}\mathbf{q}(t) + \mathbf{B}\mathbf{x}(t)$$

$$\mathbf{y}(t) = \mathbf{C}\mathbf{q}(t) + \mathbf{D}\mathbf{x}(t)$$

其中：
- $\mathbf{q}(t)$：状态向量（$N \times 1$）
- $\mathbf{x}(t)$：输入向量
- $\mathbf{y}(t)$：输出向量
- $\mathbf{A}$：系统矩阵
- $\mathbf{B}$：输入矩阵
- $\mathbf{C}$：输出矩阵
- $\mathbf{D}$：直传矩阵

## 由微分方程建立状态方程

对于 $N$ 阶微分方程，通常选取输出及其各阶导数为状态变量：

$$q_1(t) = y(t), \quad q_2(t) = y'(t), \quad \dots, \quad q_N(t) = y^{(N-1)}(t)$$

## 状态方程的求解

### 时域解法

$$\mathbf{q}(t) = e^{\mathbf{A}t}\mathbf{q}(0^-) + \int_{0^-}^{t} e^{\mathbf{A}(t-\tau)}\mathbf{B}\mathbf{x}(\tau) d\tau$$

其中 $e^{\mathbf{A}t}$ 称为**状态转移矩阵**。

### s域解法

$$\mathbf{Q}(s) = (s\mathbf{I} - \mathbf{A})^{-1}\mathbf{q}(0^-) + (s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}\mathbf{X}(s)$$

系统函数：

$$H(s) = \mathbf{C}(s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B} + \mathbf{D}$$

## 系统性质与A矩阵的关系

- **稳定性**：$\mathbf{A}$ 的特征值实部均小于0
- **可控性**：可控性矩阵满秩
- **可观测性**：可观测性矩阵满秩

---

**记忆碎片**：状态空间分析是时域分析的矩阵形式，特别适合多输入多输出（MIMO）系统。考研中重点掌握二阶系统的状态方程建立与求解。
