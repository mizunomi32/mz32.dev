/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

const resolve = require('path').resolve
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@atoms': resolve(__dirname, 'src/components/atoms'),
        '@molecules': resolve(__dirname, 'src/components/molecules'),
        '@organisms': resolve(__dirname, 'src/components/organisms'),
        '@templates': resolve(__dirname, 'src/components/templates'),
        '@helpers': resolve(__dirname, 'src/helpers')
      }
    }
  })
}   



exports.createPages = async ({ graphql, actions }) => {
 const { createPage } = actions

 const result = await graphql(
   `
   {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            slug   
          }
        }
      }
    }
  }
   `
 )

 if (result.errors) {
   throw result.errors
 }

 result.data.allMarkdownRemark.edges.forEach(edge => {
   createPage({
     path: `/post/${edge.node.frontmatter.slug}`,
     component: path.resolve(
       "./src/components/pages/post.tsx"
     ),
     context: {
       id: edge.node.id,
     },
   })
 })
}