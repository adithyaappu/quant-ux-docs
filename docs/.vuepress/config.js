import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { svgIconPlugin } from "@goy/vuepress-plugin-svg-icons";

export default defineUserConfig({
  lang: "en-US",

  title: "Quant-UX Docs",
  description: "Documentation of quantitative UX analyis platform Quant-UX",

  theme: defaultTheme({
    logo: "/assets/qux-logo.png",

    navbar: [
      "/",
      { text: "Current", prefix: "/current/", children: ["getting-started"] },
      { text: "v2", prefix: "/v2/", children: [] },
    ],
  }),

  bundler: viteBundler(),
  plugins: [svgIconPlugin()],
});
