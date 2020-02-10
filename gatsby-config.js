module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `Van Maps`,
    description: `Van Maps is a collection of crew change points and locations where crews use vans to expedite their work.  The source file contains, location, channel, directions for access road navigation, google embeded link for google maps.`,
    keywords: `Los Angeles, train, crew, Renzenberger, Hallcon, navigation, locations, pick-up, drop-off, dog-catch, patch, Southern California, van maps`,
    author: `Gary Proctor`,
    siteUrl: `https://vanmaps.net`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-google-sheet`,
      options: {
        spreadsheetKey: `1OUTeP7jW79sII7TB6-QNlfg0azjzQXp28kofOLiXKrI`,
        rootName: "RootName", // default is Sheet
      },
    },
    `gatsby-plugin-sass`,
    // `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Van Maps navigation assistance`,
        short_name: `Van Maps`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
