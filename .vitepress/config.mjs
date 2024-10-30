import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/quant-ux-docs/",
  lang: "en-US",

  title: "Quant-UX Docs",
  description: "Open-Source Quantitative UX Design and Analytics Tool",

  srcDir: "./src",
  themeConfig: {
    logo: "/assets/qux-logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Docs",
        items: [
          {
            text: "Getting Started",
            link: "/docs/getting-started/",
          },
        ],
      },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "Getting Started",
          link: "/docs/getting-started/",
          collapsed: true,
          items: [
            {
              text: "Design Your First Prototype",
              link: "/docs/getting-started/design-your-first-prototype",
            },
            {
              text: "Create User Tests",
              link: "/docs/getting-started/create-user-tests",
            },
          ],
        },
      ],
    },

    footer: {
      message: "Licensed Under GPL-3.0 ",
      copyright: "Copyright © 2024 Quant-UX Community",
    },

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/KlausSchaefers/quant-ux" },
    ],

    editLink: {
      pattern:
        "https://github.com/adithyaappu/quant-ux-docs/edit/main/src/:path",
    },
  },
});
