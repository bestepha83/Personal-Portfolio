const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  let codePost = path.resolve(`./src/templates/coding-template.js`)
  // let photoPost = path.resolve(`./src/templates/photo-template.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                category
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }


    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      if (post.node.frontmatter.category === 'code') {
        createPage({
          path: post.node.fields.slug,
          component: codePost,
          context: {
            slug:  post.node.fields.slug,
            previous,
            next,
          }
        });
      } 
      // else if (post.node.frontmatter.category === 'photo') {
      //   createPage({
      //     path: post.node.fields.slug,
      //     component: photoPost,
      //     context: {
      //       slug:  post.node.fields.slug,
      //       previous,
      //       next,
      //     }
      //   });
      // }

    })


    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
