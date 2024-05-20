/**
 * @type {import('gatsby').GatsbyConfig}
 */const webpack = require('webpack');
module.exports = {
  siteMetadata: {
    title: `dailyDetailsOttawa`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    new webpack.ProvidePlugin({
      $: "jquery",
      'window.jQuery': "jquery",
      jQuery: "jquery"
  })
  ],
}
