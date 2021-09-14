import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/photoCard"

import '../styles/styles.scss'

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const photos = data.allMarkdownRemark.edges
  let photosCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Photography"
        keywords={[
          `photography`,
        ]}
        description="Photography"
      />

      <section className = "photo-banner">
        <h1>Photography</h1>
      </section>
      <section className = "photo-main">
        <h2>Projects</h2>
        <div className="photo-feed">
          {photos.map(({ node }) => {
            photosCounter++
            return (
              <PostCard
                key={node.fields.slug}
                count={photosCounter}
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
      filter: { frontmatter: { category: { eq: "photo" } } }
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
            image2 {
              childImageSharp {
                gatsbyImageData
              }
            }
            thumbnail {
              childImageSharp {
                gatsbyImageData
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
