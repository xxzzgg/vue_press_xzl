# 期权

非常好的问题 👍 Lucian。
理解 希腊字母（Greeks） 是掌握期权交易的根基。
你可以把它们看作——“期权价格的敏感度指标”，告诉你：
👉 当市场的某个变量变化时，你的期权头寸价格会如何变化。

下面我系统地讲清楚这套体系，让你真正懂得它们的含义、作用和交易意义。

⸻

🧭 一、五大核心希腊字母（The Major Greeks）

希腊字母 代表意义 主要影响因素 含义解释
Δ（Delta） 方向敏感度 标的价格 期权价格对标的价格变化的敏感程度
Γ（Gamma） Delta 的变化率 标的价格 标的价格每变化 1 单位，Delta 改变多少
Θ（Theta） 时间衰减 时间 每过一天，期权价格损失多少（尤其对卖方重要）
V（Vega） 波动率敏感度 隐含波动率 (IV) 波动率变化 1%，期权价格变化多少
ρ（Rho） 利率敏感度 利率 利率变化 1%，期权价格变化多少（影响较小）

⸻

⚡ 二、详细讲解（交易员实战视角）

⸻

1️⃣ Delta — 方向性敏感度

定义：

Delta 表示当标的价格变动 1 美元时，期权价格将变化多少美元。

    •	对于 Call（看涨）：Delta 介于 0 ~ +1
    •	对于 Put（看跌）：Delta 介于 0 ~ -1

类型 Delta 典型值 含义
深度虚值 OTM 接近 0 几乎不随价格变动
平值 ATM ≈ 0.5 对价格变动最敏感
深度实值 ITM ≈ 1 几乎与标的同步

💡 实战意义：
• Delta ≈ 仓位对冲比率。
例如：持有 1 张 Delta=0.5 的 Call，就相当于持有 0.5 股股票的多头。
• 市场方向变化时，Delta 会随着 Gamma 而动态变化。

⸻

2️⃣ Gamma — Delta 的变化速度

定义：

Gamma 表示标的价格每变化 1 美元，Delta 变化多少。

📈 高 Gamma 意味着 Delta 对标的价格非常敏感。
• ATM 期权 的 Gamma 最大
• 短期期权 的 Gamma 高于长期期权

💡 实战意义：
• 对于做市商、机构：Gamma 风险是主要管理指标
• 对于散户：Gamma 越高，短期爆发力越强，但也更难控制

“买方受益于高 Gamma（可获得爆发收益），
卖方害怕高 Gamma（因为对冲难度剧增）。”

⸻

3️⃣ Theta — 时间衰减

定义：

每过一天（时间减少 1 单位），期权损失的价值（通常是负数）。

    •	Theta 通常为负（买方亏、卖方赚）
    •	临近到期，Theta 下降速度加快（时间衰减非线性）

💡 实战意义：
• 如果你是 卖方（Short Option），Theta 是你的朋友
• 如果你是 买方（Long Option），Theta 是你的敌人

📊 举例：

一张 Theta = -0.05 的 Call，意味着明天同等条件下，你的期权价格会少 0.05 美元。

⸻

4️⃣ Vega — 波动率敏感度

定义：

隐含波动率（IV）变化 1%，期权价格变化多少。

    •	Vega 反映了市场对未来波动的预期。
    •	IV 高 → 期权贵；IV 低 → 期权便宜

💡 实战意义：
• 事件前（财报前）IV 高涨，适合卖波动（Short Vega）策略
• 事件后（财报后）IV 降低，适合买波动（Long Vega）策略

例如：

Earnings 前：卖 Straddle / Iron Condor
Earnings 后：买 Straddle / Long Call Spread

⸻

5️⃣ Rho — 利率敏感度

利率上升时：
• 看涨期权价格略微上升（正相关）
• 看跌期权价格略微下降（负相关）

📉 实际上除非宏观利率大幅变化，Rho 的影响可以忽略。

⸻

⚙️ 三、进阶组合理解：Greeks 的相互作用

场景 买方体验 卖方体验
高 Gamma、高 Vega、负 Theta 方向对 → 爆赚；方向错 → 爆亏 压力大、对冲难、Theta 收益高
低 Gamma、高 Theta、低 Vega 收益慢但稳 稳定收租策略（如 Iron Condor）

⸻

🔍 四、Greeks 的实战例子（AAPL Call）

参数 值 含义
Delta = 0.55 AAPL 涨 $1，你的 Call 涨 $0.55
Gamma = 0.07 每涨 $1，Delta 增加 0.07
Theta = -0.04 每过一天亏 $0.04
Vega = 0.10 IV 上升 1%，Call 涨 $0.10

这意味着：
• 如果 AAPL 上涨 → Delta 带动你赚钱
• 如果波动率上升 → Vega 让你额外赚钱
• 如果不动 → Theta 让你被时间吃掉

⸻

🧠 五、交易员如何利用 Greeks 构建策略

策略 主要希腊字母 特征
Long Call / Put 高 Delta、负 Theta、正 Vega 吃方向 & 吃波动
Short Call / Put 负 Delta、正 Theta、负 Vega 收时间衰减
Iron Condor 低 Delta、正 Theta、负 Vega 横盘赚钱
Straddle / Strangle 高 Vega、负 Theta 吃波动
Calendar Spread 正 Vega、正 Theta 吃波动扩张和时间差
