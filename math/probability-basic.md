# 随机事件与概率

## 基本公式

### 加法公式

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

### 条件概率

$$P(B|A) = \frac{P(AB)}{P(A)}, \quad P(A) > 0$$

### 乘法公式

$$P(AB) = P(A)P(B|A)$$

### 全概率公式

设 $B_1, B_2, \dots, B_n$ 为样本空间的一个划分，则

$$P(A) = \sum_{i=1}^{n} P(B_i)P(A|B_i)$$

### 贝叶斯公式

$$P(B_i|A) = \frac{P(B_i)P(A|B_i)}{\sum_{j=1}^{n} P(B_j)P(A|B_j)}$$

---

待补充事件的独立性、伯努利概型。
