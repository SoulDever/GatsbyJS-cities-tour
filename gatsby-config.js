const autoprefixer = require('autoprefixer')
const browserslist = require('browserslist')
const postCssDiscardDuplicates = require('postcss-discard-duplicates')
const postCssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postCssFocus = require('postcss-focus')

module.exports = {
  siteMetadata: {
    title: 'GatsbyJS - Cities Tour',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-next',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sharp',
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [
          postCssDiscardDuplicates(),
          postCssFlexbugsFixes(),
          postCssFocus(),
          autoprefixer({ browsers: browserslist() }),
        ],
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
};
