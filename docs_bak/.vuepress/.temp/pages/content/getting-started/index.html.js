import comp from "C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/docs/.vuepress/.temp/pages/content/getting-started/index.html.vue"
const data = JSON.parse("{\"path\":\"/content/getting-started/\",\"title\":\"Getting Started\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]}],\"git\":{\"updatedTime\":1720379470000,\"contributors\":[{\"name\":\"adithya\",\"email\":\"adithyaappu@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"content/getting-started/README.md\"}")
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
