import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Yunzai Next',
  tagline: '基于ICQQ构建的机器人',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yunzaijs.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
          label: 'Dev DOCS',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar'
        },
        {
          position: 'left',
          label: 'Edit DOCS',
          href: 'https://github.com/yunzai-org/docs/blob/main/docs/intro.md'
        },
        {
          position: 'right',
          href: 'https://github.com/yunzai-org',
          label: 'Team'
        },
        {
          position: 'right',
          href: 'https://github.com/yunzai-org/create-yunzai/blob/main/bin/template/README.md',
          label: 'Template'
        },
        {
          position: 'right',
          href: 'https://github.com/yunzai-org/yunzai-next',
          label: 'Yunzai Code'
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
              to: '/docs/intro'
            },
            {
              label: '模块',
              to: '/docs/category/module-shop'
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
  } satisfies Preset.ThemeConfig

  // themes: ['@docusaurus/theme-live-codeblock'],
}

export default config
