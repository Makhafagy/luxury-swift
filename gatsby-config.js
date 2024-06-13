require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // This loads the appropriate .env file
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `AutoDetailTemplate`,
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
        path: "./src/images",
        icon:"src/images/steering-wheel.png"
      },
      __key: "images",
    },

  ],
  
}
