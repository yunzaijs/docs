import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const number = '津ICP备2023004480号'
const link = `<a class="footer__link-item navbar__item" href="https://beian.miit.gov.cn/" target="_blank">${number}</a>`

const config: Config = {
  title: 'YunzaiJS',
  tagline: 'QQ群机器人开发框架',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yunzaijs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yunzaijs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/yunzaijs/docs/tree/main/'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'YunzaiJS',
      // logo: {
      //   alt: 'Miao-Yunzai Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          position: 'left',
          label: '文档',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar'
        },
        {
          position: 'left',
          label: '编辑',
          href: 'https://github.com/yunzaijs/docs/blob/main/docs/intro.md'
        },
        {
          position: 'right',
          href: 'https://github.com/yunzaijs/packages/create-yunzaijs/blob/main/bin/template/README.md',
          label: '模板'
        },
        {
          position: 'right',
          href: 'https://github.com/yunzaijs/core',
          label: '源码'
        }
      ]
    },
    /**
     * 页脚
     */
    footer: {
      style: 'dark',
      links: [
        {
          title: '教程',
          items: [
            {
              label: '简介',
              to: '/docs/docs/intro'
            },
            {
              label: '模块',
              to: '/docs/docs/category/module-shop'
            }
          ]
        },
        {
          title: '社区',
          items: [
            {
              label: 'Yunzai Group',
              href: 'https://qm.qq.com/q/I2YvyU0LQI'
            },
            {
              label: 'Yunzai-Bot V3 Plugins',
              href: 'https://github.com/yhArcadia/Yunzai-Bot-plugins-index'
            },
            {
              label: 'Icqq DOCS',
              href: 'https://icqq.pages.dev/'
            }
          ]
        },
        {
          title: '更多',
          items: [
            {
              label: 'TRSS-Yunzai V3',
              href: 'https://github.com/TimeRainStarSky/Yunzai'
            },
            {
              label: 'Miao-Yunzai V3',
              href: 'https://github.com/yoimiya-kokomi/Miao-Yunzai/tree/master'
            },
            {
              label: 'Yunzai-Bot V3',
              href: 'https://gitee.com/Le-niao/Yunzai-Bot/tree/main'
            },
            {
              label: 'Yunzai-Bot V2',
              href: 'https://gitee.com/Le-niao/Yunzai-Bot/tree/master'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} YunzaiJS ${link}`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig,

  // themes: ['@docusaurus/theme-live-codeblock'],
  themes: [
    // ... Your other themes.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ['en', 'zh'],
        searchResultLimits: 10,
        searchResultContextMaxLength: 50
      }
    ]
  ]
}

export default config
