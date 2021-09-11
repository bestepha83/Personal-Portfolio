import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

class BlogPostTemplate extends React.Component {
  render() {
    const music = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={music.frontmatter.title}
          description={music.frontmatter.description || music.excerpt}
        />
        <article className="music-content">
          <div className="music-banner">
            <h1 className="music-content-title">{music.frontmatter.title}</h1>
            <div className="music-image-container">
              {music.frontmatter.thumbnail && (
                <div className="music-content-image">
                  <GatsbyImage
                    image={getImage(music.frontmatter.thumbnail)}
                    alt={music.frontmatter.title}
                  />
                </div>
              )}
            </div>
          </div>
          {music.frontmatter.description && (
            <p class="music-content-excerpt">
              {music.frontmatter.description}
            </p>
          )}
          <div className="music-about">
            <h2>About {music.frontmatter.title}</h2>
            <div
              className="music-content-body"
              dangerouslySetInnerHTML={{ __html: music.html }}
            />
          </div>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query musicPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
BlogPostTemplate.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}
