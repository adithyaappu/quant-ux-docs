import comp from "C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/assets/qux-logo.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/content/getting-started/\",\"type\":\"primary\"},{\"text\":\"Go to App\",\"link\":\"https://quant-ux.com\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"It's FOSS\",\"details\":\"Completely free and open source software without any feature lock-ins.\"},{\"title\":\"Prototype, Test, and Analyse\",\"details\":\"Quant-UX contain all the tools required for UX design and research.\"},{\"title\":\"Functional Designs\",\"details\":\"Unlike conventional prototyping tools Quant-UX has widgets to create functional prototypes.\"},{\"title\":\"AI Design Assistant\",\"details\":\"Quickly spin up prototypes with simple prompts and add customise as you want\"},{\"title\":\"Informed Design Decisions\",\"details\":\"With in-depth analytics of tests take better design decisions\"},{\"title\":\"Collaborate\",\"details\":\"In every step collaborate with your team and speed up the entire process.\"}],\"footer\":\"GPL-3.0 | Copyright © 2024 Quant-UX Community\"},\"headers\":[],\"git\":{\"updatedTime\":1720359931000,\"contributors\":[{\"name\":\"adithya\",\"email\":\"adithya.a@astrikosconsulting.com\",\"commits\":2},{\"name\":\"adithya\",\"email\":\"adithyaappu@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
