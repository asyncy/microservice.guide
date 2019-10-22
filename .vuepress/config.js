module.exports = {
  title: 'Open Microservice Specification',
  description: 'The open standard for reusable microservices',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.ico' }]],
  themeConfig: {
    repo: 'microservices/openmicroservices.org',
    repoLabel: 'Edit on Github',
    editLinkText: 'Edit this page on GitHub',
    editLinks: true,
    search: false,
    navbar: true,
    // logo: '/assets/logo.svg',
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Community', link: '/community' },
      { text: 'Docs', link: '/introduction/overview' },
      { text: 'Blog', link: 'https://storyscript.io/blog' }
    ],
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
          '/schema/forwards/',
          '/schema/interface/',
          '/schema/environment/',
          '/schema/volumes/',
          '/schema/health/',
          '/schema/metrics/',
          '/schema/logs/'
        ]
      },
      {
        title: 'Examples',
        collapsable: false,
        children: ['/examples/http/', '/examples/http/pubsub/']
      },
      {
        title: 'Interoperability',
        collapsable: false,
        children: ['/interoperability/openapi/']
      },
      {
        title: 'CLI',
        collapsable: false,
        children: ['/cli/overview/', '/cli/validate/', '/cli/run/']
      }
    ]
  }
}
