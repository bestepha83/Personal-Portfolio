import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

class BlogPostTemplate extends React.Component {
  render() {
    const resume = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={resume.frontmatter.title}
          description={resume.frontmatter.description || resume.excerpt}
        />
        <article className = "resume-content">
          <div className="resume-banner">
            <div className="resume-image-container">
              {resume.frontmatter.thumbnail && (
                <div className="resume-content-image">
                  <GatsbyImage
                    image={getImage(resume.frontmatter.thumbnail)}
                    alt={resume.frontmatter.title}
                  />
                </div>
              )}
            </div>
            {resume.frontmatter.description && (
              <p class="resume-content-excerpt">
                {resume.frontmatter.description}
              </p>
            )}
          </div>
          <div className="resume-about">
            <h4>Description</h4>
            <div
              className="resume-content-body"
              dangerouslySetInnerHTML={{ __html: resume.html }}
            />
          </div>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query resumePostBySlug($slug: String!) {
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
