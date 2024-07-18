import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { svgIconPlugin } from "@goy/vuepress-plugin-svg-icons";
import { componentsPlugin } from "vuepress-plugin-components";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
// import { Component } from "vidstack/types/vidstack-ffSmmxHH.js";

export default defineUserConfig({
  lang: "en-US",

  title: "Quant-UX Docs",
  description: "Quantitative UX Design and Analytics Tool",

  theme: defaultTheme({
    logo: "/assets/qux-logo.png",

    navbar: [
      "/",
      {
        text: "Docs",
        prefix: "/content/",
        children: ["getting-started/", "prototype/"],
      },
    ],
    sidebar: {
      "/content/": [
        {
          text: "Getting Started",
          prefix: "getting-started/",
          link: "getting-started/",
          children: ["your-first-prototype", "features-overview"],
        },
        {
          text: "Prototype",
          prefix: "prototype/",
          link: "prototype/",
          children: ["add-screen"],
        },
      ],
    },
  }),

  bundler: viteBundler(),
  plugins: [
    svgIconPlugin(),
    componentsPlugin({
      components: ["VidStack"],
    }),
    mdEnhancePlugin({
      hint: true,
    }),
  ],
});
