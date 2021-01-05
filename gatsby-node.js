const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/projectTemplate.js")
  const result = await graphql(`
    {
        allWpPost(filter: {projects: {}}) {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const projectPosts = result.data.allWpPost.edges
  projectPosts.forEach(post => {
    createPage({
      path: `/project/${post.node.slug}`,
      component: projectTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
}