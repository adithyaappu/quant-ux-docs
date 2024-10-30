export const themeData = JSON.parse("{\"logo\":\"/assets/qux-logo.png\",\"repo\":\"KlausSchaefers/quant-ux\",\"navbar\":[\"/\",{\"text\":\"Docs\",\"prefix\":\"/content/\",\"children\":[\"getting-started/\",\"prototype/\"]}],\"sidebar\":{\"/content/\":[{\"text\":\"Getting Started\",\"prefix\":\"getting-started/\",\"link\":\"getting-started/\",\"children\":[\"design-your-first-prototype\",\"create-user-tests\"]},{\"text\":\"Prototype\",\"prefix\":\"prototype/\",\"link\":\"prototype/\",\"children\":[\"add-screen\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
