import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const design = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={design.frontmatter.title}
          description={design.frontmatter.description || design.excerpt}
        />
        <article
          className={`design-content ${design.frontmatter.thumbnail ||
            `no-image`}`}
        >
          <div className="design-banner">
            <h1 className="design-content-title">{design.frontmatter.title}</h1>
            <div className="design-image-container">
              {design.frontmatter.thumbnail && (
                <div className="design-content-image">
                  <StaticImage
                    className="kg-image"
                    fluid={design.frontmatter.thumbnail.childImageSharp.fluid}
                    alt={design.frontmatter.title}
                  />
                </div>
              )}
            </div>
          </div>
          {design.frontmatter.description && (
            <p class="design-content-excerpt">
              "{design.frontmatter.description}"
            </p>
          )}
          <div className="design-about">
            <h2>About {design.frontmatter.title}</h2>
            <div
              className="design-content-body"
              dangerouslySetInnerHTML={{ __html: design.html }}
            />
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
