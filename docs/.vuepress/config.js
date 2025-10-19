import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  head: [
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-C6WYDFTCGV",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-C6WYDFTCGV');`,
    ],
  ],
  theme: defaultTheme({
    navbar: [
      { text: "首页", link: "/" },
      { text: "Price Action", link: "/pa/" },
      { text: "review", link: "/review/" },
      { text: "options", link: "/options/" },
    ],
    sidebar: {
      "/pa/": [
        {
          text: "Price Action Trading",
          children: ["/pa/README.md"],
        },
        {
          text: "基础知识",
          collapsible: true,
          children: [
            "/pa/01 Terminology.md",
            "/pa/04 My Setup.md",
            "/pa/05 Program Trading.md",
            "/pa/06 Personality Traits of Successful Traders.md",
          ],
        },
        {
          text: "图表基础与价格行为",
          collapsible: true,
          children: [
            "/pa/02A Chart Basics and Price Action.md",
            "/pa/02B Chart Basics and Price Action.md",
            "/pa/02C Chart Basics and Price Action.md",
            "/pa/02D Chart Basics and Price Action.md",
          ],
        },
        {
          text: "外汇基础",
          collapsible: true,
          children: [
            "/pa/03A Forex Basics.md",
            "/pa/03B Forex Basics.md",
            "/pa/03C Forex Basics.md",
            "/pa/03D Forex Basics.md",
            "/pa/03E Forex Basics.md",
          ],
        },
        {
          text: "入门指南",
          collapsible: true,
          children: ["/pa/07A Starting Out.md", "/pa/07B Starting Out.md"],
        },
        {
          text: "蜡烛图、设置与信号",
          collapsible: true,
          children: [
            "/pa/08A Candles Setups and Signal Bars.md",
            "/pa/08B Candles Setups and Signal Bars.md",
            "/pa/08C Candles Setups and Signal Bars.md",
            "/pa/08D Candles Setups and Signal Bars.md",
          ],
        },
        {
          text: "回调与柱线计数",
          collapsible: true,
          children: [
            "/pa/09A Pullbacks and Bar Counting.md",
            "/pa/09B Pullbacks and Bar Counting.md",
            "/pa/09C Pullbacks and Bar Counting.md",
          ],
        },
        {
          text: "买卖压力",
          collapsible: true,
          children: [
            "/pa/10A Buying and Selling Pressure.md",
            "/pa/10B Buying and Selling Pressure.md",
          ],
        },
        {
          text: "跳空",
          collapsible: true,
          children: [
            "/pa/11A Gaps.md",
            "/pa/11B Gaps.md",
            "/pa/11C Gaps.md",
            "/pa/11D Gaps.md",
          ],
        },
        {
          text: "市场周期",
          collapsible: true,
          children: [
            "/pa/12A Market Cycle.md",
            "/pa/12B Market Cycle.md",
            "/pa/12C Market Cycle.md",
          ],
        },
        {
          text: "Always In",
          collapsible: true,
          children: [
            "/pa/13A Always In.md",
            "/pa/13B Always In.md",
            "/pa/13C Always In.md",
          ],
        },
        {
          text: "趋势",
          collapsible: true,
          children: [
            "/pa/14A Trends.md",
            "/pa/14B Trends.md",
            "/pa/14C Trends.md",
            "/pa/14D Trends.md",
            "/pa/14E Trends.md",
          ],
        },
        {
          text: "突破",
          collapsible: true,
          children: [
            "/pa/15A Breakouts.md",
            "/pa/15B Breakouts.md",
            "/pa/15C Breakouts.md",
            "/pa/15D Breakouts.md",
            "/pa/15E Breakouts.md",
            "/pa/15F Breakouts.md",
            "/pa/15G Breakouts.md",
            "/pa/15H Breakouts.md",
          ],
        },
        {
          text: "通道",
          collapsible: true,
          children: [
            "/pa/16A Channels.md",
            "/pa/16B Channels.md",
            "/pa/16C Channels.md",
            "/pa/16D Channels.md",
            "/pa/16E Channels.md",
            "/pa/16F Channels.md",
          ],
        },
        {
          text: "窄幅通道与微通道",
          collapsible: true,
          children: [
            "/pa/17A Tight Channels and MC.md",
            "/pa/17B Tight Channels and MC.md",
          ],
        },
        {
          text: "交易区间",
          collapsible: true,
          children: [
            "/pa/18A Trading Ranges.md",
            "/pa/18B Trading Ranges.md",
            "/pa/18C Trading Ranges.md",
            "/pa/18D Trading Ranges.md",
            "/pa/18E Trading Ranges.md",
            "/pa/18F Trading Ranges.md",
          ],
        },
        {
          text: "支撑与阻力",
          collapsible: true,
          children: [
            "/pa/19A Support and Resistance.md",
            "/pa/19B Support and Resistance.md",
            "/pa/19C Support and Resistance.md",
            "/pa/19D Support and Resistance.md",
            "/pa/19E Support and Resistance.md",
          ],
        },
        {
          text: "测量移动",
          collapsible: true,
          children: ["/pa/20A Measured Moves.md", "/pa/20B Measured Moves.md"],
        },
        {
          text: "反转",
          collapsible: true,
          children: [
            "/pa/21A Reversals.md",
            "/pa/21B Reversals.md",
            "/pa/21C Reversals.md",
            "/pa/21D Reversals.md",
          ],
        },
        {
          text: "主要趋势反转",
          collapsible: true,
          children: [
            "/pa/22A Major Trend Reversals.md",
            "/pa/22B Major Trend Reversals.md",
            "/pa/22C Major Trend Reversals.md",
            "/pa/22D Major Trend Reversals.md",
          ],
        },
        {
          text: "最后旗形",
          collapsible: true,
          children: ["/pa/23A Final Flags.md", "/pa/23B Final Flags.md"],
        },
        {
          text: "楔形",
          collapsible: true,
          children: [
            "/pa/24A Wedges.md",
            "/pa/24B Wedges.md",
            "/pa/24C Wedges.md",
            "/pa/24D Wedges.md",
            "/pa/24E Wedges.md",
          ],
        },
        {
          text: "双顶与双底",
          collapsible: true,
          children: [
            "/pa/25A Double Tops and Bottoms.md",
            "/pa/25B Double Tops and Bottoms.md",
          ],
        },
        {
          text: "三角形",
          collapsible: true,
          children: ["/pa/26A Triangles.md", "/pa/26B Triangles.md"],
        },
        {
          text: "头肩形态",
          collapsible: true,
          children: [
            "/pa/27A Head and Shoulders.md",
            "/pa/27B Head and Shoulders.md",
          ],
        },
        {
          text: "圆弧顶与圆弧底",
          collapsible: true,
          children: ["/pa/28 Rounded Tops and Bottoms.md"],
        },
        {
          text: "高潮",
          collapsible: true,
          children: [
            "/pa/29A Climaxes.md",
            "/pa/29B Climaxes.md",
            "/pa/29C Climaxes.md",
            "/pa/29D Climaxes.md",
            "/pa/29E Climaxes.md",
          ],
        },
        {
          text: "交易者方程与概率",
          collapsible: true,
          children: [
            "/pa/30A Traders Equation and Probability.md",
            "/pa/30B Traders Equation and Probability.md",
            "/pa/30C Traders Equation and Probability.md",
            "/pa/30D Traders Equation and Probability.md",
            "/pa/30E Traders Equation and Probability.md",
          ],
        },
        {
          text: "波段交易与剥头皮",
          collapsible: true,
          children: [
            "/pa/31A Swing Trading and Scalping.md",
            "/pa/31B Swing Trading and Scalping.md",
            "/pa/31C Swing Trading and Scalping.md",
            "/pa/31D Swing Trading and Scalping.md",
          ],
        },
        {
          text: "订单类型",
          collapsible: true,
          children: [
            "/pa/32A Orders.md",
            "/pa/32B Orders.md",
            "/pa/32C Orders.md",
          ],
        },
        {
          text: "保护性止损",
          collapsible: true,
          children: [
            "/pa/33A Protective Stops.md",
            "/pa/33B Protective Stops.md",
            "/pa/33C Protective Stops.md",
            "/pa/33D Protective Stops.md",
            "/pa/33E Protective Stops.md",
            "/pa/33F Protective Stops.md",
            "/pa/33G Protective Stops.md",
          ],
        },
        {
          text: "实际风险",
          collapsible: true,
          children: ["/pa/34A Actual Risk.md", "/pa/34B Actual Risk.md"],
        },
        {
          text: "加仓",
          collapsible: true,
          children: [
            "/pa/35A Scaling In.md",
            "/pa/35B Scaling In.md",
            "/pa/35C Scaling In.md",
          ],
        },
        {
          text: "交易管理与获利",
          collapsible: true,
          children: [
            "/pa/36A Trade Management and Taking Profits.md",
            "/pa/36B Trade Management and Taking Profits.md",
          ],
        },
      ],
      "/review/": [
        {
          text: "交易复习与实战指南",
          children: ["/review/README.md"],
        },
        {
          text: "核心知识",
          collapsible: true,
          children: [
            "/review/01-core-concepts.md",
            "/review/02-opening-trading.md",
          ],
        },
        {
          text: "交易执行",
          collapsible: true,
          children: ["/review/03-setup-rules.md", "/review/04-trading-plan.md"],
        },
        {
          text: "心理建设",
          collapsible: true,
          children: ["/review/05-trading-psychology.md"],
        },
        {
          text: "亏损",
          collapsible: true,
          children: ["/review/06losing.md"],
        },
      ],
      "/options": [
        {
          text: "期权",
          children: ["/options/README.md"],
        },
      ],
    },
  }),
});
