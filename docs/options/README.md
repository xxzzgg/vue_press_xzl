# 期权

### 希腊字母

希腊字母 代表意义 主要影响因素 含义解释

- Δ（Delta） 方向敏感度 标的价格 期权价格对标的价格变化的敏感程度
- Γ（Gamma） Delta 的变化率 标的价格 标的价格每变化 1 单位，Delta 改变多少
- Θ（Theta） 时间衰减 时间 每过一天，期权价格损失多少（尤其对卖方重要）
- V（Vega） 波动率敏感度 隐含波动率 (IV) 波动率变化 1%，期权价格变化多少
- ρ（Rho） 利率敏感度 利率 利率变化 1%，期权价格变化多少（影响较小）

### Delta — 方向性敏感度

定义：Delta 表示当标的价格变动 1 美元时，期权价格将变化多少美元。
对于 Call（看涨）：Delta 介于 0 ~ +1
对于 Put（看跌）：Delta 介于 0 ~ -1

类型 Delta 典型值 含义
深度虚值 OTM 接近 0 几乎不随价格变动
平值 ATM ≈ 0.5 对价格变动最敏感
深度实值 ITM ≈ 1 几乎与标的同步

💡 实战意义：
• Delta ≈ 仓位对冲比率。
例如：持有 1 张 Delta=0.5 的 Call，就相当于持有 0.5 股股票的多头。
• 市场方向变化时，Delta 会随着 Gamma 而动态变化。

### Gamma — Delta 的变化速度

定义：Gamma 表示标的价格每变化 1 美元，Delta 变化多少。

📈 高 Gamma 意味着 Delta 对标的价格非常敏感。
• ATM 期权 的 Gamma 最大
• 短期期权 的 Gamma 高于长期期权

💡 实战意义：
• 对于做市商、机构：Gamma 风险是主要管理指标
• 对于散户：Gamma 越高，短期爆发力越强，但也更难控制

“买方受益于高 Gamma（可获得爆发收益），
卖方害怕高 Gamma（因为对冲难度剧增）。”

### Theta — 时间衰减

定义：每过一天（时间减少 1 单位），期权损失的价值（通常是负数）。

- Theta 通常为负（买方亏、卖方赚）
- 临近到期，Theta 下降速度加快（时间衰减非线性）

💡 实战意义：
• 如果你是 卖方（Short Option），Theta 是你的朋友
• 如果你是 买方（Long Option），Theta 是你的敌人

📊 举例：

一张 Theta = -0.05 的 Call，意味着明天同等条件下，你的期权价格会少 0.05 美元。

### Vega 波动率敏感度

定义：隐含波动率（IV）变化 1%，期权价格变化多少。

- Vega 反映了市场对未来波动的预期。
- IV 高 → 期权贵；IV 低 → 期权便宜

💡 实战意义：
• 事件前（财报前）IV 高涨，适合卖波动（Short Vega）策略
• 事件后（财报后）IV 降低，适合买波动（Long Vega）策略

例如：

Earnings 前：卖 Straddle / Iron Condor
Earnings 后：买 Straddle / Long Call Spread

### Rho 利率敏感度

利率上升时：
• 看涨期权价格略微上升（正相关）
• 看跌期权价格略微下降（负相关）

📉 实际上除非宏观利率大幅变化，Rho 的影响可以忽略。

### 进阶组合理解：Greeks 的相互作用

场景 买方体验 卖方体验

- 高 Gamma、高 Vega、负 Theta 方向对 → 爆赚；方向错 → 爆亏 压力大、对冲难、Theta 收益高
- 低 Gamma、高 Theta、低 Vega 收益慢但稳 稳定收租策略（如 Iron Condor）

### Greeks 的实战例子（AAPL Call）

参数 值 含义

- Delta = 0.55 AAPL 涨 $1，你的 Call 涨 $0.55
- Gamma = 0.07 每涨 $1，Delta 增加 0.07
- Theta = -0.04 每过一天亏 $0.04
- Vega = 0.10 IV 上升 1%，Call 涨 $0.10

这意味着：

- 如果 AAPL 上涨 → Delta 带动你赚钱
- 如果波动率上升 → Vega 让你额外赚钱
- 如果不动 → Theta 让你被时间吃掉

### 交易员如何利用 Greeks 构建策略

策略 主要希腊字母 特征

- Long Call / Put 高 Delta、负 Theta、正 Vega 吃方向 & 吃波动
- Short Call / Put 负 Delta、正 Theta、负 Vega 收时间衰减
- Iron Condor 低 Delta、正 Theta、负 Vega 横盘赚钱
- Straddle / Strangle 高 Vega、负 Theta 吃波动
- Calendar Spread 正 Vega、正 Theta 吃波动扩张和时间差

### Iron Condor

👉 Short Put —— 看它的 delta，要 0.06〜0.10

例如：
• Short 150 put delta = 0.08 ✔
• Long 140 put（delta 不重要）
👉 Short Call —— 看它的 delta，要 0.06〜0.10
例如：
• Short 220 call delta = 0.07 ✔
• Long 230 call（delta 不重要）
这样你就得到了一个：

✔ 高胜率
✔ θ 大
✔ 风险低
✔ 区间大
✔ 调整次数少的 Iron Condor

最主流、最稳定：Short strike delta = 6–10
低 Delta、正 Theta、负 Vega 横盘赚钱

sell put => +60
buy put => -50

buy call => -50
sell call => +60
max-risk = 10
max-profit = 10 + 10 = 20

![alt text](image.png)

750 950

735 1000

### 铁鹰和铁蝶区别

### short put & short call（有担保）

下面我用 最清晰、最专业、最容易记住 的方式，把铁鹰（Iron Condor）和铁蝶（Iron Butterfly）讲给你。
你理解完后，一辈子不会搞混。

⸻

🎯 一句话区别

铁鹰（Iron Condor）= 两边都是 OTM → 区间更宽 → 安全性高 → 收益低

铁蝶（Iron Butterfly）= 中间是 ATM → 区间极窄 → 收益极高 → 风险大

⸻

🔥 图形一看就懂（强烈建议你看这个！）

🦅 1. Iron Condor（铁鹰）

价格区间宽，很难被打到
靠 theta 稳稳赚钱

特点：
• 两边 short leg 都是 OTM（例如卖 200C / 150P）
• 价格只要在区间内就赚钱
• 大概率胜率（80〜90%）
• 收入较低（credit 小）
• 安全性最高
• 调整容易

⸻

🦋 2. Iron Butterfly（铁蝶）

价格区间极窄
你需要价格“压在中间”才赚钱
收最大 θ，但风险巨大

特点：
• 中间 short call + short put 是 ATM（在价内/近价）
• 两边 long legs 是 OTM
• 收到的 credit 极大（因为你卖 ATM）
• 风险极大（价格稍微动就亏）
• 成功率低
• 调整困难

⸻

🔥 完整对比表（最清晰）

项目 铁鹰 Iron Condor 铁蝶 Iron Butterfly
Short Strike（中间卖哪） 2 个 OTM ATM（最核心差别）
区间 宽 极窄
胜率 高（80–90%） 低（50%–65%）
收益（credit） 低 非常高
风险 低 高
Gamma 风险 小 大
调整难度 容易 困难
最适合 稳定收益、低风险 高波动、博 θ、方向不明确
适合标的 SPY / TSLA / SPX SPX / Earnings Play

⸻

🎯 用一个实际例子带你看区别

假设 TSLA 现在 = $250

⸻

🦅 铁鹰（Iron Condor）

你卖：
• Short 230 Put（OTM）
• Long 220 Put
• Short 280 Call（OTM）
• Long 290 Call

价格区间 = 230–280 都能赚钱
极高概率不会碰到。

收取 credit ≈ $100–200
风险 low
胜率高

⸻

🦋 铁蝶（Iron Butterfly）

你卖：
• Short 250 Put（ATM）
• Short 250 Call（ATM）
• Long 230 Put
• Long 270 Call

这代表：
• 你卖的是 ATM 的 straddle
• 收到高额 credit（TSLA 可能能收 $800–1200）
• 但只要 TSLA 那天大涨/大跌 → 你亏损

成功率远比 IC 低。

⸻

🧠 核心逻辑：为什么铁鹰安全、铁蝶危险？

铁鹰
• 卖 OTM（低 delta）
• 价格需要大幅跑偏才会亏
• 胜率高
• 调整简单
→ 最适合稳定收 θ（你现在喜欢的风格）

铁蝶
• 卖 ATM（高 delta）
• 价格只要动一点点你就有风险
• 收益高（因为卖 ATM）
• 但 gamma 大、方向风险大
→ 适合高波动交易 / earnings play

⸻

🎯 如果你偏向稳定收益（你之前说的风格）

你的风格定义：
• 收 θ
• 卖方
• 不想爆仓
• 不想搞复杂调整
• 账户 10k
• 想年化 15%–25%
• 喜欢高胜率

那么：

👉 你适合 铁鹰 Iron Condor

不要碰 铁蝶 Iron Butterfly
特别是 TSLA 这种波动巨大的标的。

⸻

🎯 一句话帮你永远记住：

铁鹰 = 安全宽区间，卖远 OTM，稳定收 θ

铁蝶 = 卖 ATM，收益高但极危险，价格稍微动就炸。

⸻

📌 想让我帮你：

为 TSLA / SPX / SPY 制作一套：
• 最佳 DTE（7–14 天）
• 最佳 delta（6–10）
• 最佳 wingspan（50 wide）
• 自动生成 Iron Condor strike 的脚本/公式
• Roll 规则（delta > 25 / 30）
• 最大亏损控制
• 每周开仓日（周三/周四）

我可以给你做一个 完整的 Iron Condor 交易系统模板。

你要吗？

你的理解 非常接近正确答案，但还差一个关键“专业级的细节”。
我把最完整、最精准的逻辑告诉你，你听完以后会对「铁鹰 vs 铁蝶」的运用一清二楚。

⸻

🎯 一句话总结专业级版本：

✔ 波动小的标的 → 更适合铁蝶（Iron Butterfly）

✔ 波动大的标的 → 更适合铁鹰（Iron Condor）

但——这是一个 表象结论。

真正的关键不是波动大小，而是：

⭐**“该标的的预期真实波动 vs 卖出时 implied volatility（IV）之间的关系。”**

我现在给你拆开讲，让你达到专业卖方水平。

⸻

🧠 铁蝶 vs 铁鹰 的核心逻辑

🦋 铁蝶（Iron Butterfly）
• 卖 ATM straddle → 收到巨大权利金（credit）
• 收益非常高
• Gamma 风险极大（价格动一点就亏）
• 区间极窄，靠“价格不动”赚钱

适合：实际波动小、IV 高、IV Crush 的场景。

⸻

🦅 铁鹰（Iron Condor）
• 卖 OTM wings → 收权利金较少
• 区间更宽
• 胜率高
• 风险小
• 更吃震荡市场（mean reversion）

适合：实际波动大、方向不稳定、趋势不清晰。

⸻

✔ 所以你说的简单逻辑：
• 波动小 → 铁蝶
• 波动大 → 铁鹰

大方向正确，但不够全面。

真正的专业逻辑如下 👇

⸻

🧠 \*\*专业卖方真正的判定方法：

基于“预期波动 vs IV”的关系。\*\*

⭐ 1）当 “预期波动 < IV” 时 —— 适合铁蝶 (Iron Butterfly)

例如：
• SPY 预计当天波动 1%
• 但 IV 告诉你预期波动 2%
→ IV 高估了实际波动
→ 卖 Theta 很赚
→ 铁蝶能吃到最大 credit，而且不容易爆

这时适合：

✔ 铁蝶（收大 credit，吃 IV overpricing）

✔ ATM Straddle / Iron Fly

✔ Broken Wing Butterfly（风险更小的版本）

⸻

⭐ 2）当 “预期波动 ≈ IV” 或 “预期波动 > IV” —— 适合铁鹰 (Iron Condor)

例如：

TSLA/NVDA 这种波动巨大的标的：
• TSLA 预期波动：4–6% / day
• IV 也只预测 3%

这种时候你卖 ATM 的铁蝶会马上爆炸
但 Iron Condor 的 OTM 区间比较安全

✔ TSLA / NVDA：铁鹰

✔ SPX 在非事件日：铁鹰

✔ FOMC / Earnings：铁鹰（但要远 OTM）

⸻

🔥 我给你举几个真实标的的例子，让你彻底搞懂：

👉 SPY / QQQ（波动小、高流动性）
• 平时波动：1%
• IV 低但稳定
• 价格经常在狭窄区间震荡

适合：铁蝶（高 credit + 小波动）

⸻

👉 TSLA / NVDA / AMD（波动大、方向性强）
• 常常波动 3–6%
• 经常 trend day（单边）
• Gamma 大、跳空多

适合：铁鹰（区间更宽、安全性高）

⸻

👉 SPX（日内大涨大跌，但均值回归强）

SPX 更适合：
• DTE 0–2 → Straddle
• DTE 7–14 → Iron Condor（最稳）

但 SPX 在 FOMC / CPI 前一天：
→ IV 非常高
→ 实际波动未必这么大
→ 反而可以做 铁蝶（吃 IV Crush）

⸻

🔥 最终的黄金法则（你可以写进交易系统里）

⭐ 法则 1：如果你认为价格会震荡、不会跑很远 → 铁蝶

特点：
• 收最大 θ
• 需要价格 staying near ATM
• 区间极窄
• 收益高但风险大
• 更适合 SPY、QQQ 等稳定标的

⸻

⭐ 法则 2：如果你认为价格会波动，但不会极端单边 → 铁鹰

特点：
• 区间宽
• 更安全
• 调整容易
• 更适合 TSLA、NVDA 等大波动的标的

⸻

⭐ 法则 3：如果你不清楚方向、波动结构不确定 → 铁鹰更安全

铁鹰风险更低，因为两侧 OTM：
• 胜率更高
• delta 更低
• 大趋势也不容易一下子把你打穿

⸻

🎯 最终答案（简化版给你直接用）

✔ 波动大（TSLA / NVDA / Crypto / 小盘） → 铁鹰

更宽的 wingspan
更远的 delta
更安全

✔ 波动小（SPY / QQQ / DIA / XLE） → 铁蝶

收最大 theta
IV 高估时赚得更多
