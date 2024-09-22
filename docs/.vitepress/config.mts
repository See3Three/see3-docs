import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  title: "See3 Documentation",
  description: "Documentation for the See3 Open Standard and Tooling",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/Introduction/Introduction' },
      { text: 'Implementations', link: '/Implementations/see3-python/Overview' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What See3 Is', link: '/Introduction/Introduction' },
          { text: 'Why We Need See3', link: '/Introduction/Motivation' },
          { text: 'See3\'s Governance', link: '/Introduction/Governance' },
          { text: 'How See3 Works', link: '/Introduction/Technical' },
          { text: 'Roadmap and FAQ', link: '/Introduction/Beyond' }
        ]
      },
      {
        text: 'Implementations',
        items: [
          { text: 'see3_python', items: [
            { text: 'Overview', link: '/Implementations/see3-python/Overview' },
            { text: 'Details', link: '/Implementations/see3-python/Library' },
          ]},
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/See3Three' },
      { icon: 'twitter', link: 'https://twitter.com/see3xyz' }
    ]
  }
})
