import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/musicCard"

import '../styles/styles.scss'

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const music = data.allMarkdownRemark.edges
  let musicCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="music"
        keywords={[
          `music`,
        ]}
        description="My coding music"
      />

      <section className = "music-banner">
        <h1>Music</h1>
        <h4>I have been in multiple bands, and you can view some of them here.</h4>
      </section>
      <section className = "music-main">
        <h2>Bands</h2>
        <div className="music-feed">
          {music.map(({ node }) => {
            musicCounter++
            return (
              <PostCard
                key={node.fields.slug}
                count={musicCounter}
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
      filter: { frontmatter: { category: { eq: "music" } } }
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
