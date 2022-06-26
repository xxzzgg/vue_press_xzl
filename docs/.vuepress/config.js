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
				text: "vue",
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
				link: "/other/",
			},
			// NavbarGroup
			{
				text: "前端基础",
				children: ["/js/js.md", "/js/html.md", "/js/css.md"],
			},
			// 字符串 - 页面文件路径
		],
	}),
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
};