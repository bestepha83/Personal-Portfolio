import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

class BlogPostTemplate extends React.Component {
  render() {
    const design = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo
          title={design.frontmatter.title}
          description={design.frontmatter.description || design.excerpt}
        />
        <article className = "design-content">
          <div className="design-banner">
            <div className="design-image-background">
              {design.frontmatter.thumbnail && (
                <div className="design-content-image">
                  <GatsbyImage
                    image={getImage(design.frontmatter.thumbnail)}
                    alt={design.frontmatter.title}
                  />
                </div>
              )}
            </div>
            <div className="design-image-container">
              {design.frontmatter.thumbnail && (
                <div className="design-content-image">
                  <GatsbyImage
                    image={getImage(design.frontmatter.thumbnail)}
                    alt={design.frontmatter.title}
                  />
                </div>
              )}
            </div>
            <div className="design-about">
              <h1 className="design-content-title">{design.frontmatter.title}</h1>
              {design.frontmatter.description && (
                <p class="design-content-excerpt">
                  {design.frontmatter.description}
                </p>
              )}
              <div
                className="design-content-body"
                dangerouslySetInnerHTML={{ __html: design.html }}
              />
            </div>            
          </div>

        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query designPostBySlug($slug: String!) {
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
