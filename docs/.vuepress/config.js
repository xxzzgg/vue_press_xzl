const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
module.exports = {
	title: "Xzl's Blog",
	theme: defaultTheme({
    logo: '/images/avatar.png',
		navbar: [
			// NavbarItem
			{
				text: "首页",
				link: "/",
			},
			{
				text: "React",
				link: "/react/",
			},
			{
				text: "Vue",
				link: "/vue/",
			},
			{
				text: "Guide",
				link: "/guide/",
			},
			{
				text: "Webpack",
				link: "/webpack/",
			},
			{
				text: "TS",
				link: "/ts/",
			},
			{
				text: "杂七杂八",
				children: ["/other/index.md", "/other/git.md"],
			},
			{
				text: "算法相关",
				children: ["/algorithm/index.md"],
			},
			// NavbarGroup
			{
				text: "前端基础",
				children: ["/js/js.md", "/js/html.md", "/js/css.md"],
			},
			{
				text: "性能体验",
				children: ["/performance/index.md"]
			}
			// 字符串 - 页面文件路径
		],
	}),
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
};