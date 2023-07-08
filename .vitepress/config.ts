import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TrChat",
  description: "TrChat document",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TrPlugins/TrChat' }
    ]
  },
  locales: {
      root: {
        label: '简体中文',
        lang: 'zh',
        themeConfig: {
          nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' }
          ],
          sidebar: [
            {
              text: '开始',
              items: [
                { text: '介绍', link: '/guide/' }
              ]
            },
            {
              text: 'Examples',
              items: [
                { text: 'Markdown Examples', link: '/guide/markdown-examples' },
                { text: 'Runtime API Examples', link: '/guide/api-examples' }
              ]
            },
            {
              items: [
                { text: '更新日志', link: '/guide/updates' },
                { text: 'Kether动作', link: 'https://kether.tabooproject.org/list.html' }
              ]
            }
          ]
        }
      },
      en: {
        label: 'English',
        lang: 'en',
        themeConfig: {
          nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' }
          ],
          sidebar: [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/guide/' }
              ]
            },
            {
              text: 'Examples',
              items: [
                { text: 'Markdown Examples', link: '/guide/markdown-examples' },
                { text: 'Runtime API Examples', link: '/guide/api-examples' }
              ]
            },
            {
              items: [
                { text: 'Updates', link: '/guide/updates' }
              ]
            }
          ]
        }
      }
  }
})
