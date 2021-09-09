import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/codeCard"

import '../styles/styles.scss'

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges
  let projectsCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="projects"
        keywords={[
          `mala jam projects`,
        ]}
        description="The projects of mala jam records are a unqiue blend of genres and styles"
      />

      <section className = "code-banner">
        <h1>Programming</h1>
      </section>
      <section className = "code-main">
        <h2>Projects</h2>
        <div className="project-feed">
          {projects.map(({ node }) => {
            projectsCounter++
            return (
              <PostCard
                key={node.fields.slug}
                count={projectsCounter}
                node={node}
                postClass={`post`}
              />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "code" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
