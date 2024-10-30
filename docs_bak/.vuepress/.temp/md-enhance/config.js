import { defineClientConfig } from "vuepress/client";
import { useHintContainers } from "C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHintContainers();
  }
});
