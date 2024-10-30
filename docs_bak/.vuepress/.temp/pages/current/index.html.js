import comp from "C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/docs/.vuepress/.temp/pages/current/index.html.vue"
const data = JSON.parse("{\"path\":\"/current/\",\"title\":\"Current Guide\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Current Guide\",\"index\":false,\"category\":[\"Guide\"],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/current/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Quant-UX\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Current Guide\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Current Guide\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"filePathRelative\":\"current/README.md\"}")
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
