import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/resumeCard"

import '../styles/styles.scss'

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const resume = data.allMarkdownRemark.edges
  let resumeCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Resume"
        keywords={[
          `Resume`,
        ]}
        description=""
      />

      <section className = "resume-banner">
        <h1>Resume</h1>
        <h4></h4>
      </section>
      <section className = "resume-main">
        <h2>Professional Experience</h2>
        <div className="project-feed">
            {resume.map(({ node }) => {
                resumeCounter++
                return (
                <PostCard
                    key={node.fields.slug}
                    count={resumeCounter}
                    node={node}
                    postClass={`post`}
                />
                )
            })}
        </div>
      </section>
      <section className = "resume-main">
        <h2>Extracurriculars</h2>
      </section>
      <section className = "resume-main">
        <h2>Summary of Tech Skills</h2>
        <ul>
            <li>Microsoft Office Suite</li>
            <li>Graphic Design:</li>
            <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe XD</li>
                <li>Adobe Illustrator</li>
                <li>Adobe After Effects</li>
                <li>Adobe Dimension</li>
            </ul>
            <li>Logic Pro X</li>
            <li>Web Design and Development</li>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>Python</li>
                <li>Django</li>
                <li>Java</li>
            </ul>
            <li>Data Analysis and Statistics</li>
            <ul>
                <li>R</li>
                <li>Excel</li>
                <li>SQL</li>
            </ul>
        </ul>
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
      filter: { frontmatter: { category: { eq: "resume" } } }
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
