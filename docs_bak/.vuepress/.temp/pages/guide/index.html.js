import comp from "C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"Guide\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Guide\",\"icon\":\"lightbulb\",\"description\":\"Highlight Features Bar ... Foo ...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/guide/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Quant-UX\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Guide\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Highlight Features Bar ... Foo ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Guide\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Highlight Features\",\"slug\":\"highlight-features\",\"link\":\"#highlight-features\",\"children\":[{\"level\":3,\"title\":\"Bar\",\"slug\":\"bar\",\"link\":\"#bar\",\"children\":[]},{\"level\":3,\"title\":\"Foo\",\"slug\":\"foo\",\"link\":\"#foo\",\"children\":[]}]}],\"filePathRelative\":\"guide/README.md\",\"autoDesc\":true}")
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
