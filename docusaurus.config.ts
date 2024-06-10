import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Miao-Yunzai',
  tagline: '基于ICQQ构建的机器人',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ningmengchongshui.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Miao-Yunzai-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
            'https://github.com/yoimiya-kokomi/Miao-Yunzai',
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
      title: 'Miao-Yunzai',
      // logo: {
      //   alt: 'Miao-Yunzai Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          label: '教程',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
        },
        /**
         * 
         */
        // { to: '/team', label: '团队', position: 'left' },

        /**
         * right
         */
        {
          href: 'https://github.com/yoimiya-kokomi/Miao-Yunzai',
          label: 'GitHub',
          position: 'right',
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
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://github.com/yoimiya-kokomi/Miao-Yunzai',
            }
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: '团队',
            //   to: '/team',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/yoimiya-kokomi/Miao-Yunzai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Miao-Yunzai.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
