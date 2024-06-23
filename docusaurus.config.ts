import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Yunzai',
  tagline: '基于ICQQ构建的机器人',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ningmengchongshui.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Miao-Yunzai-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yunzai', // Usually your GitHub org/user name.
  projectName: 'Miao-Yunzai-Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/ningmengchongshui/Miao-Yunzai-Docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Yunzai',
      // logo: {
      //   alt: 'Miao-Yunzai Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          position: 'left',
          label: '教程',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
        },
        {
          position: 'right',
          href: 'https://gitee.com/yoimiya-kokomi/Miao-Yunzai',
          label: 'Gitee',
        },
        {
          position: 'right',
          href: 'https://github.com/yoimiya-kokomi/Miao-Yunzai',
          label: 'GitHub',
        },
      ],
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
              to: '/docs/intro',
            },
            {
              label: '插件',
              to: '/docs/category/plugins-shop',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Yunzai Group',
              href: 'https://qm.qq.com/q/I2YvyU0LQI',
            },
            {
              label: 'Yunzai-Bot V3 Plugins',
              href: 'https://github.com/yhArcadia/Yunzai-Bot-plugins-index',
            },
            {
              label: 'Icqq Agreement',
              href: 'https://github.com/icqqjs/icqq',
            }
          ],
        },
        {
          title: '更多',
          items: [
            // {
            //   label: '团队',
            //   to: '/team',
            // },
            {
              label: 'Miao-Yunzai V3',
              href: 'https://github.com/yoimiya-kokomi/Miao-Yunzai/tree/master',
            },
            {
              label: 'Yunzai-Bot V3',
              href: 'https://gitee.com/Le-niao/Yunzai-Bot/tree/main',
            },
            {
              label: 'Yunzai-Bot V2',
              href: 'https://gitee.com/Le-niao/Yunzai-Bot/tree/master',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yunzai.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  // themes: ['@docusaurus/theme-live-codeblock'],
};

export default config;