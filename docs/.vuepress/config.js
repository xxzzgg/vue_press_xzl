import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: "首页", link: "/" },
      { text: "前端开发", link: "/frontend/" },
      { text: "后端开发", link: "/backend/" },
      { text: "算法", link: "/algorithm/" },
      { text: "开发工具", link: "/tools/" },
      { text: "面试", link: "/interview/" },
    ],
    sidebar: {
      "/frontend/": [
        {
          text: "前端开发",
        },
      ],
      "/backend/": [
        {
          text: "后端开发",
          children: [
            "/backend/README.md",
            "/backend/nodejs.md",
            "/backend/database.md",
            "/backend/api.md",
            "/backend/deployment.md",
          ],
        },
      ],
      "/algorithm/": [
        {
          text: "算法与数据结构",
          children: [
            "/algorithm/README.md",
            "/algorithm/array-linkedlist.md",
            "/algorithm/stack-queue.md",
            "/algorithm/tree-graph.md",
            "/algorithm/sorting.md",
            "/algorithm/dynamic-programming.md",
            "/algorithm/leetcode.md",
          ],
        },
      ],
      "/tools/": [
        {
          text: "开发工具",
          children: [
            "/tools/README.md",
            "/tools/git.md",
            "/tools/vscode.md",
            "/tools/webpack.md",
            "/tools/vite.md",
            "/tools/package-manager.md",
          ],
        },
      ],
      "/interview/": [
        {
          text: "面试准备",
          children: [
            "/interview/README.md",
            "/interview/javascript.md",
            "/interview/css.md",
            "/interview/vue.md",
            "/interview/react.md",
            "/interview/network.md",
            "/interview/coding.md",
          ],
        },
      ],
    },
  }),
});
