export const searchIndex = [
  {
    "title": "Home",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Create User Tests for Your App",
    "headers": [],
    "path": "/content/getting-started/create-user-tests.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Design Your First Prototype",
    "headers": [
      {
        "level": 2,
        "title": "Quick Demo",
        "slug": "quick-demo",
        "link": "#quick-demo",
        "children": []
      },
      {
        "level": 2,
        "title": "Detailed Steps",
        "slug": "detailed-steps",
        "link": "#detailed-steps",
        "children": [
          {
            "level": 3,
            "title": "Design",
            "slug": "design",
            "link": "#design",
            "children": []
          },
          {
            "level": 3,
            "title": "Prototype",
            "slug": "prototype",
            "link": "#prototype",
            "children": []
          },
          {
            "level": 3,
            "title": "Simulate",
            "slug": "simulate",
            "link": "#simulate",
            "children": []
          }
        ]
      }
    ],
    "path": "/content/getting-started/design-your-first-prototype.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Features Overview",
    "headers": [
      {
        "level": 2,
        "title": "Prototype",
        "slug": "prototype",
        "link": "#prototype",
        "children": []
      },
      {
        "level": 2,
        "title": "User Testing",
        "slug": "user-testing",
        "link": "#user-testing",
        "children": []
      },
      {
        "level": 2,
        "title": "Analytics",
        "slug": "analytics",
        "link": "#analytics",
        "children": []
      }
    ],
    "path": "/content/getting-started/features-overview.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Getting Started",
    "headers": [
      {
        "level": 2,
        "title": "Overview",
        "slug": "overview",
        "link": "#overview",
        "children": []
      }
    ],
    "path": "/content/getting-started/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Add Screen",
    "headers": [],
    "path": "/content/prototype/add-screen.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Prototype",
    "headers": [],
    "path": "/content/prototype/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
