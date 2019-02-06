module.exports = {
  title: 'Open Microservice Guide',
  description: 'The open standard for reusable microservices',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],
  themeConfig: {
    repo: 'microservices/microservice.guide',
    repoLabel: 'Edit on Github',
    editLinkText: 'Edit this page on GitHub',
    editLinks: true,
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          '/introduction/overview/',
          '/introduction/comparisons/openapi/',
          '/introduction/anatomy/'
        ]
      },
      {
        title: 'Schema',
        collapsable: false,
        children: [
          '/schema/info/',
          '/schema/lifecycle/',
          '/schema/actions/',
          '/schema/events/',
          '/schema/interface/',
          '/schema/environment/',
          '/schema/volumes/',
          '/schema/authentication/',
          '/schema/health/',
          '/schema/requirements/',
          '/schema/metrics/',
          '/schema/logs/',
        ]
      },
      {
        title: 'Examples',
        collapsable: false,
        children: [
          '/examples/http/',
          '/examples/http/pubsub/'
        ]
      },
      {
        title: 'CLI',
        collapsable: false,
        children: [
          '/cli/overview/',
          '/cli/validate/',
          '/cli/test/',
          '/cli/debug/'
        ]
      }
    ]
  }
};
