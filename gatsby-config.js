/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    site: `pb productions`,
    siteUrl: `https://pbproductions.net`,
    title: `producting podcasts`,
    subtitle: `of course`,
    description: `podcasts`,
    author: `@techmunchies`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`
  ],
}
