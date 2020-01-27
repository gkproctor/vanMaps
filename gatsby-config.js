/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Van Maps`,
    description: `Van Maps is a collection of crew change points and locations where crews use vans to expedite their work.  The source file contains, location, channel, directions for access road navigation, google embeded link for google maps.`,
    author: `gk proctor`,
  },
  plugins: [
    // With this plugin, attributes you add in their component, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          // material-ui theme
          palette: {
            primary: {
              main: "#BA3D3B", // or whatever colors you need
            },
          },
        },
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-google-sheet`,
      options: {
        spreadsheetKey: `1OUTeP7jW79sII7TB6-QNlfg0azjzQXp28kofOLiXKrI`,
        rootName: "RootName", // default is Sheet
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
