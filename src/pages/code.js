import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/codeCard"

import '../styles/styles.scss'

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges
  let projectsCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Code"
        keywords={[
          `Code`,
        ]}
        description="My coding projects"
      />
      <div className = "circle1"></div>
      <div className = "circle3"></div>
      <section className = "code-banner">
        <div className = "code-banner-content">
          <h1
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="100"
            data-sal-easing="ease"
          >I design and develop websites for startups, clubs, and for personal projects.</h1>
          <a href = "https://github.com/bestepha83" target="_blank"
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease"
          >My GitHub</a>
        </div>
      </section>
      <section className = "code-main">
        <h2>Recent Projects</h2>
        <div className="project-feed">
          {projects.map(({ node }) => {
            projectsCounter++
            return (
              <PostCard
                key={node.fields.slug}
                count={projectsCounter}
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
      filter: { frontmatter: { category: { eq: "code" } } }
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
