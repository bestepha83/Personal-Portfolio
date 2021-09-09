import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <article
          className={`photo-content ${photo.frontmatter.thumbnail ||
            `no-image`}`}
        >
          <div className="photo-banner">
            <h1 className="photo-content-title">{photo.frontmatter.title}</h1>
            <div className="photo-image-container">
              {photo.frontmatter.thumbnail && (
                <div className="photo-content-image">
                  <StaticImage
                    className="kg-image"
                    fluid={photo.frontmatter.thumbnail.childImageSharp.fluid}
                    alt={photo.frontmatter.title}
                  />
                </div>
              )}
            </div>
          </div>
          {photo.frontmatter.description && (
            <p class="photo-content-excerpt">
              "{photo.frontmatter.description}"
            </p>
          )}
          <div className="photo-about">
            <h2>About {photo.frontmatter.title}</h2>
            <div
              className="photo-content-body"
              dangerouslySetInnerHTML={{ __html: photo.html }}
            />
          </div>
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
`
BlogPostTemplate.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}
