import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/designCard"

import '../styles/styles.scss'
import { StaticImage } from "gatsby-plugin-image"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const DesignIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const design = data.allMarkdownRemark.edges
  let designCounter = 0

  return (
    <Layout title={siteTitle}>
      <Seo
        title="Design"
        keywords={[
          `design`,
        ]}
        description="Ben's design"
      />

      <section className = "design-banner">
        <div className = "design-banner-img">
          <StaticImage
            src="../images/design.png"
            alt = "Graphic Design"
          />        
        </div>
        <h1
          data-sal="fade"
          data-sal-duration="2000"
          data-sal-delay="100"
          data-sal-easing="ease"
        >Graphic Design</h1>
        <h4
          data-sal="fade"
          data-sal-duration="2000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >Colorful and light designs</h4>
      </section>
      <section className = "design-main">
        <div className="design-feed">
          {design.map(({ node }) => {
            designCounter++
            return (
              <PostCard
                key={node.fields.slug}
                count={designCounter}
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
      filter: { frontmatter: { category: { eq: "design" } } }
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
      <DesignIndex location={props.location} props data={data} {...props} />
    )}
  />
)
