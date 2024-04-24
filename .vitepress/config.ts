import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TrChat Document",
  description: "TrChat document",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TrPlugins/TrChat' }
    ],
    footer: {
      message: 'Made by ItsFlicker with ❤️',
      copyright: 'Copyright © 2023 TrPlugins'
    },
    editLink: {
      pattern: 'https://github.com/ItsFlicker/document-trchat/edit/main/:path',
      text: 'Edit this page on Github'
    },
    search: {
      provider: 'local'
    }
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
                { text: '介绍', link: '/guide/' },
                { text: '安装', link: '/guide/installation' },
                { text: '配置', link: '/guide/configuration' },
                { text: '已知问题', link: '/guide/known-issues' }
              ]
            },
            {
              text: '使用',
              items: [
                { text: '跨服', link: '/guide/proxy' },
                { text: '命令', link: '/guide/commands' },
                { text: '功能', link: '/guide/functions' },
                { text: '颜色', link: '/guide/colors' },
                { text: '条件与动作', link: '/guide/expressions' },
                { text: 'PlaceholderAPI', link: '/guide/placeholderapi' }
              ]
            },
            {
              text: '频道',
              items: [
                { text: '创建', link: '/guide/channel/create' },
                { text: '设置', link: '/guide/channel/settings' },
                { text: 'JSON组件', link: '/guide/channel/json' },
                { text: '消息格式', link: '/guide/channel/format' }
              ]
            },
            {
              text: '开发',
              items: [
                { text: 'API', link: '/guide/api' }
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
