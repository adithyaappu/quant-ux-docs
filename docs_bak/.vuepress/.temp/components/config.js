import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/node_modules/@vuepress/helper/lib/client/index.js";

import VidStack from "C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/node_modules/vuepress-plugin-components/lib/client/components/VidStack.js";

import "C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VidStack")) app.component("VidStack", VidStack);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
});
