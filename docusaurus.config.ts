import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Yunzai Next',
  tagline: '可模块化的机器人框架',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yunzai-org.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yunzai-org', // Usually your GitHub org/user name.
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
          editUrl: 'https://github.com/yunzai-org/docs/tree/main/'
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
      title: 'Yunzai Next',
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
          href: 'https://github.com/yunzai-org/docs/blob/main/docs/intro.md'
        },
        {
          position: 'right',
          href: 'https://github.com/yunzai-org',
          label: '团队'
        },
        {
          position: 'right',
          href: 'https://github.com/yunzai-org/create-yunzai/blob/main/bin/template/README.md',
          label: '模板'
        },
        {
          position: 'right',
          href: 'https://github.com/yunzai-org/yunzai-next',
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
              label: 'Icqq Agreement',
              href: 'https://github.com/icqqjs/icqq'
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
      copyright: `Copyright © ${new Date().getFullYear()} Yunzai.`
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
