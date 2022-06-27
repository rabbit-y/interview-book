import { hopeTheme } from "vuepress-theme-hope";


export default hopeTheme({
  iconAssets: 'iconfont',
  pageInfo: ["Author", "Date", "Word", "ReadingTime"],
  logo:"header.jpg",
  navbar: [
    { text: "题集", icon: "workingDirectory", link: "/guide/HTML.md" },
    {
      text: "花贝的博客",
      icon: "blog",
      link: "https://han96.com",
    }
  ],
  sidebar: {
    "/guide/": "structure",
  },
  plugins: {
    copyCode: {},
    mdEnhance: {
      codetabs: true,
    },
    comment: {
      provider: "Giscus",
      repo: "rabbit-y/interview-book",
      repoId: "R_kgDOHjv1dg",
      category: "General",
      categoryId: "DIC_kwDOHjv1ds4CP3yF"
    }
  }
});