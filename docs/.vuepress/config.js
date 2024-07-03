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

    navbar: ["/", "/current/getting-started.md"],
  }),

  bundler: viteBundler(),
  plugins: [svgIconPlugin()],
});
