import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const project = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={project.frontmatter.title}
          description={project.frontmatter.description || project.excerpt}
        />
        <article
          className={`project-content ${project.frontmatter.thumbnail ||
            `no-image`}`}
        >
          <div className="project-banner">
            <h1 className="project-content-title">{project.frontmatter.title}</h1>
            <div className="project-image-container">
              {project.frontmatter.thumbnail && (
                <div className="project-content-image">
                  <StaticImage
                    className="kg-image"
                    fluid={project.frontmatter.thumbnail.childImageSharp.fluid}
                    alt={project.frontmatter.title}
                  />
                </div>
              )}
            </div>
          </div>
          {project.frontmatter.description && (
            <p class="project-content-excerpt">
              "{project.frontmatter.description}"
            </p>
          )}
          <div className="project-about">
            <h2>About {project.frontmatter.title}</h2>
            <div
              className="project-content-body"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />
          </div>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query projectPostBySlug($slug: String!) {
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
