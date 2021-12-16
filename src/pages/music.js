import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/musicCard"

import '../styles/styles.scss'
import { StaticImage } from "gatsby-plugin-image"

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const music = data.allMarkdownRemark.edges
  let musicCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Music"
        keywords={[
          `Music`,
        ]}
        description="My coding music"
      />

      <section className = "music-banner">
        <div className = "banner1">
          <div className = "banner1-content">
            <h1>Sounds like Honey</h1>
            <h4>Indie, Blues, Jazz, Soul</h4>
          </div>
        </div>
        <div className = "banner2">
          <StaticImage
            src="../images/guitar.jpg"
            alt = "Headshot"
            className = ""
          />
          <div className = "music-banner-mask"></div>
        </div>
      </section>
      <section className = "music-main">
        <h2>Bands</h2>
        <div className="project-feed">
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
