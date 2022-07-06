import { defineUserConfig } from "vuepress";
import { path } from "@vuepress/utils";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "花贝的面试题",
  description: "面试题合集",
  // dest: "./dist",
  dest: "./",
  base: "/interview-book/",
  theme,
  head: [["link", { href: "./public/favicon.ico", rel: "icon" }]],
  alias: {
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue"
    ),
  },
  plugins: [searchPlugin()],
});
