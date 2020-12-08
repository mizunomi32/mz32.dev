module.exports = {
  siteMetadata: {
    title: `mz32.dev`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@mizunomi32`,
    eyecatch: `eyecatch`,
    siteUrl: `https://mz32.dev`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-microcms`,
    //   options: {
    //     apiKey: `4824272c-1c1d-45f2-ae5f-002da1e13ca8`,
    //     serviceId: `mz32`,
    //     endpoint: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-code-titles',
          },
          {
            resolve: `gatsby-remark-prismjs`,
            /*
              options: {
                classPrefix: "language-",
                inlineCodeMarker: null,
                aliases: {},
                showLineNumbers: true,
                noInlineHighlight: false,
                languageExtensions: [
                  {
                    language: "superscript",
                    extend: "javascript",
                    definition: {
                      superscript_types: /(SuperType)/,
                    },
                    insertBefore: {
                      function: {
                        superscript_keywords: /(superif|superelse)/,
                      },
                    },
                  },
                ],
              }
            */
          }
        ]
      }
    },
    `gatsby-plugin-sitemap`,
    // `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
