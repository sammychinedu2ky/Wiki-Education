/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: "Wiki Education",
  tagline: "Learn how to build an educational bot",
  url: "https://wikieducation.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/wikilogo.png",
  organizationName: "sammychinedu2ky", // Usually your GitHub org/user name.
  projectName: "Wiki-Education", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Wiki Education",
      logo: {
        alt: "Wiki Education Logo",
        src: "img/wikilogo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
          
        },
        {
          href: "https://github.com/sammychinedu2ky/Wiki-Education",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",

      copyright: `Built with ❤ Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
         
          editUrl: "https://github.com/sammychinedu2ky/Wiki-Education",
        },
     
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
