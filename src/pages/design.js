import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/designCard"

import '../styles/styles.scss'

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const design = data.allMarkdownRemark.edges
  let designCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="design"
        keywords={[
          `design`,
        ]}
        description="My coding design"
      />

      <section className = "design-banner">
        <h1>Graphic Design</h1>
        <h4>I have created created multiple design, and you can view some of them here.</h4>
      </section>
      <section className = "design-main">
        <h2>Spotify Covers</h2>
        <div className="design-feed">
          {design.map(({ node }) => {
            designCounter++
            return (
              <PostCard
                key={node.fields.slug}
                count={designCounter}
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
      filter: { frontmatter: { category: { eq: "design" } } }
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
