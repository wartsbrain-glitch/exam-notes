# 特征值与特征向量

## 定义

设 $A$ 为 $n$ 阶方阵，若存在数 $\lambda$ 和非零向量 $\xi$，使得

$$A\xi = \lambda \xi$$

则 $\lambda$ 称为 $A$ 的**特征值**，$\xi$ 称为 $A$ 对应于 $\lambda$ 的**特征向量**。

## 求解步骤

1. 求特征多项式：$|A - \lambda E| = 0$
2. 解出特征值 $\lambda_1, \lambda_2, \dots, \lambda_n$
3. 对每个 $\lambda_i$，解齐次线性方程组 $(A - \lambda_i E)x = 0$，得到特征向量

## 重要性质

- $\sum_{i=1}^{n} \lambda_i = \text{tr}(A) = \sum_{i=1}^{n} a_{ii}$
- $\prod_{i=1}^{n} \lambda_i = |A|$

---

待补充相似对角化、实对称矩阵的性质。
