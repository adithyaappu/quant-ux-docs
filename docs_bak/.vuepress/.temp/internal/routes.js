export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/content/getting-started/create-user-tests.html", { loader: () => import(/* webpackChunkName: "content_getting-started_create-user-tests.html" */"C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/docs/.vuepress/.temp/pages/content/getting-started/create-user-tests.html.js"), meta: {"title":"Create User Tests for Your App"} }],
  ["/content/getting-started/design-your-first-prototype.html", { loader: () => import(/* webpackChunkName: "content_getting-started_design-your-first-prototype.html" */"C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/docs/.vuepress/.temp/pages/content/getting-started/design-your-first-prototype.html.js"), meta: {"title":"Design Your First Prototype"} }],
  ["/content/getting-started/features-overview.html", { loader: () => import(/* webpackChunkName: "content_getting-started_features-overview.html" */"C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/docs/.vuepress/.temp/pages/content/getting-started/features-overview.html.js"), meta: {"title":"Features Overview"} }],
  ["/content/getting-started/", { loader: () => import(/* webpackChunkName: "content_getting-started_index.html" */"C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/docs/.vuepress/.temp/pages/content/getting-started/index.html.js"), meta: {"title":"Getting Started"} }],
  ["/content/prototype/add-screen.html", { loader: () => import(/* webpackChunkName: "content_prototype_add-screen.html" */"C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/docs/.vuepress/.temp/pages/content/prototype/add-screen.html.js"), meta: {"title":"Add Screen"} }],
  ["/content/prototype/", { loader: () => import(/* webpackChunkName: "content_prototype_index.html" */"C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/docs/.vuepress/.temp/pages/content/prototype/index.html.js"), meta: {"title":"Prototype"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Adithya/Documents/dev-projects/personal/quant-ux-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
