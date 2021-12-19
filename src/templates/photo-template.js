import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PostWrapper } from "../components/PostElements"

class BlogPostTemplate extends React.Component {
  render() {
    const photo = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={photo.frontmatter.title}
          description={photo.frontmatter.description || photo.excerpt}
        />
        <article className="photo-content">
          <div className="photo-banner">
            <div className = "photo-banner-content">
              <h1 className="photo-content-title">{photo.frontmatter.title}</h1>
              <h3 className="photo-content-location">{photo.frontmatter.description}</h3>
              <div className="photo-image-container">
              {photo.frontmatter.thumbnail && (
                  <div className="photo-image-main">
                    <GatsbyImage
                      image={getImage(photo.frontmatter.thumbnail)}
                      alt={photo.frontmatter.title}
                    />
                  </div>
                )}
                {photo.frontmatter.thumbnail && (
                  <div className="photo-image-secondary">
                    <GatsbyImage
                      image={getImage(photo.frontmatter.image2)}
                      alt={photo.frontmatter.title}
                    />
                  </div>
                )}
              </div>            
            </div>
          </div>
          <PostWrapper className="photo-about">
            <div
              className="photo-content-body"
              dangerouslySetInnerHTML={{ __html: photo.html }}
            />
          </PostWrapper>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query photoPostBySlug($slug: String!) {
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
`
BlogPostTemplate.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}
