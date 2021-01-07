const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Aidan Shimmon Portfolio`,
    description: `Web developer focused on constantly learning and changing with the industry`,
    image: `src/images/earth.svg`,
    siteUrl: "https://aidanshim.co.uk",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: "https://portfolio.startsmartdevelopment.com/graphql",
        schema: {typePrefix: `Wp`},
        develop: {hardCacheMediaFiles: true},
        includedRoutes: [
          '**/posts',
          '**/tags',
          '**/categories'
        ],
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fanwood Text`
        ],
        display: 'swap'
      }
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
      __key: `images`,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
