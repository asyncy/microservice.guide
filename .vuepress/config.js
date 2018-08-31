module.exports = {
  title: 'Open Microservice Guide',
  description: 'The open standard for resusable microservices',
  themeConfig: {
    repo: 'microservices/microservice.guide',
    footer: "MIT Licensed",
    repoLabel: 'Edit on GitHub',
    editLinkText: 'Edit on GitHub',
    editLinks: true,
    search: true,
    sidebar: [
      {
        title: 'Documentation',
        collapsable: false,
        children: [
          '/overview/',
          '/container/',
          '/commands/',
          '/interface/',
          '/environment/',
          '/volumes/',
          '/authentication/',
          '/metrics/',
          '/logs/',
          '/requirements/',
          '/health/',
          '/scaling/',
          '/lifecycle/'
        ]
      },
      {
        title: 'Examples',
        collapsable: false,
        children: [
          '/http/'
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
}
