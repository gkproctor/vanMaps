module.exports = {
  siteMetadata: {
    title: `Van Maps`,
    description: `Van Maps is a collection of crew change points and locations where crews use vans to expedite their work.  The source file contains, location, channel, directions for access road navigation, google embeded link for google maps.`,
    keywords: `Los Angeles, train, crew, Renzenberger, Hallcon, navigation, locations, pick-up, drop-off, dog-catch, patch, Southern California, van maps`,
    author: `gk proctor`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwind--serif`,
        short_name: `serif`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `static/favicon.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'services'
      }
    },
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
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-google-sheet`,
      options: {
        spreadsheetKey: `1OUTeP7jW79sII7TB6-QNlfg0azjzQXp28kofOLiXKrI`,
        rootName: "RootName", // default is Sheet
      },
    }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Van Maps navigation assistance`,
        short_name: `Van Maps`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    }
  ]
};
