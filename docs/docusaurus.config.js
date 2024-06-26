// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.shadesOfPurple;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SOQL Parser JS',
  tagline: 'Parse and generate SOQL queries',
  url: 'https://soql-parser-js.getjetstream.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jetstreamapp',
  projectName: 'soql-parser-js',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/jetstreamapp/soql-parser-js/docs/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Logo',
          src: 'img/soql-parser-js-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/playground', label: 'Playground', position: 'left' },
          {
            href: 'https://github.com/jetstreamapp/soql-parser-js',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Documentation',
                to: '/docs/overview',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jetstreamapp/soql-parser-js',
              },
            ],
          },
        ],
      },
      markdown: {
        mdx1Compat: {
          comments: false,
          admonitions: false,
          headingIds: false,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      additionalLanguages: ['javascript', 'json', 'sql'],
    }),
};

module.exports = config;
