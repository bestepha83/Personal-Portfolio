import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

class BlogPostTemplate extends React.Component {
  render() {
    const project = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo
          title={project.frontmatter.title}
          description={project.frontmatter.description || project.excerpt}
        />
        <div className = "circle1"></div>
        <div className = "circle2"></div>
        <div className = "circle3"></div>
        <div className = "circle4"></div>
        <article className = "project-content">
          <div className="project-banner">
            <div className="project-image-container">
              {project.frontmatter.thumbnail && (
                <div className="project-content-image">
                  <GatsbyImage
                    image={getImage(project.frontmatter.thumbnail)}
                    alt={project.frontmatter.title}
                  />
                </div>
              )}
            </div>
            <h1 className="project-content-title">{project.frontmatter.title}</h1>
            {project.frontmatter.description && (
              <p class="project-content-excerpt">
                {project.frontmatter.description}
              </p>
            )}
          </div>

          <div className="project-about">
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
