import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/styles.scss'

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

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
        <div className = "resume-banner-content">
          <h2>I am always striving to improve myself, whether that's in my technical skillset or my professional development</h2>
        </div>
      </section>
      <section className = "resume-main">
        <h2>Professional Experience</h2>
        <div className = "experience">
          <h3>Ideal Tridon</h3>
          <div className = "experience-content">
            <div className="timeline">
              <div className="container">
                <div className="content">
                  <h4>Industry Development Consultant</h4>
                  <h5>September 2021 - Present</h5>
                </div>
              </div>
              <div className="container">
                <div className="content">
                  <h4>Industry Development Consulting Intern</h4>
                  <h5>June 2021 - September 2021</h5>
                </div>
              </div>
            </div>  
            <div className = "experience-description">
              <div className = "experience-description-content">
                <h4>Description</h4>
                <ul>
                  <li>Led emerging market project which included sizing and analyzing renewable energy and drainage markets and developing expansion recommendations through a mix of existing products, new product development, and acquisition strategy</li>
                  <li>Developed a business case and commercial development plan for a new material that would decrease costs by 40% and expand our product portfolio</li>
                  <li>Worked cross-functionally with leaders across the business to develop executive management presentations relative to customer retention and market strategy</li>
                  <li>Supported executive team through performing M&A-related tasks including identifying acquisition targets, competitive research and miscellaneous data analysis projects in addition to ad hoc initiatives as assigned</li>
                </ul>
              </div>
              <div className = "experience-description-content">
                <h4>Skills Used</h4>
                <ul>
                  <li>Data Analysis</li>
                  <li>Microsoft Excel, Powerpoint, Word</li>
                  <li>Market Research</li>
                </ul>
              </div>
            </div>                 
          </div>

        </div>
        <div className = "experience">
          <h3>Tennis Instructor</h3>
          <h4>Appleton Parks and Recreation</h4>
          <div className = "experience-description">
            <div className = "experience-description-content">
              <h4>Description</h4>
              <ul>
                <li>Developed and carried out oral and written instructions for beginner through advanced level adult tennis classes</li>
              </ul>
            </div>
            <div className = "experience-description-content">
              <h4>Skills Used</h4>
              <ul>
                <li>Leadership</li>
                <li>Communication</li>
                <li>Working in Teams</li>
              </ul>
            </div>
          </div>
        </div>
        <div className = "experience">
          <h3>Web Designer and Developer</h3>
          <h4>Mala Jam Records</h4>
          <div className = "experience-description">
            <div className = "experience-description-content">
              <h4>Description</h4>
              <ul>
                <li>Designed, developed, optimized, and maintained startup's website and led framing and communication of company model, vision, and branding</li>
              </ul>
            </div>
            <div className = "experience-description-content">
              <h4>Skills Used</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Gatsby</li>
                <li>Branding</li>
              </ul>
            </div>
            <div className = "experience-description-content">
              <a href = "https://malajamrecords.com/" target="_blank">Check It Out</a>
            </div>
          </div>
        </div>
      </section>
      <section className = "resume-main">
        <h2>Extracurriculars</h2>
        <h4>I am involved in many different extracurricular activities at my college, Cal Poly, San Luis Obispo.</h4>
        <div className = "experience">
          <h3>Director of Professional Relations</h3>
          <h4>Information Systems Association</h4>
          <div className = "experience-description">
            <div className = "experience-description-content">
              <h4>Description</h4>
              <ul>
                <li>Networking with and scheduling company recruiters and industry professionals for weekly informational meetings, leading to an increase in attendance by 50%</li>
              </ul>
            </div>
            <div className = "experience-description-content">
              <h4>Skills Used</h4>
              <ul>
                <li>Networking</li>
                <li>Organization</li>
                <li>Scheduling</li>
              </ul>
            </div>
          </div>
        </div>
        <div className = "experience">
          <h3>Environmental Economics Research Assistant</h3>
          <h4>Worked with Professor Steve Hamilton</h4>
          <div className = "experience-description">
            <div className = "experience-description-content">
              <h4>Description</h4>
              <ul>
                <li>Managed graphic design for 6-Gigawatt Offshore Wind Farm proposal, including formatting, adding pictures, creating figures, and providing general revisions</li>
                <li>Matched the top 2,000 EANs for coffee and snack bar products between 2 databases in excel to inform plastic product research</li>
                <li>Intro to Economics Teaching Assistant; led weekly virtual sessions, explained economical concepts and problems with examples</li>
              </ul>
            </div>
            <div className = "experience-description-content">
              <h4>Skills Used</h4>
              <ul>
                <li>Microsoft Excel, Word</li>
                <li>Data Analysis</li>
                <li>Leadership</li>
              </ul>
            </div>
          </div>
        </div>
        <div className = "experience">
          <h3>Technology Officer</h3>
          <h4>Cal Poly Entrepreneurs</h4>
          <div className = "experience-description">
            <div className = "experience-description-content">
              <h4>Description</h4>
              <ul>
                <li>Led successful website migration and redesign for improved sustainability, design, and 40% cost reduction</li>
                <li>Created and distributed weekly emails about upcoming meetings, events, and opportunities</li>
              </ul>
            </div>
            <div className = "experience-description-content">
              <h4>Skills Used</h4>
              <ul>
                <li>Microsoft Excel, Word</li>
                <li>Data Analysis</li>
                <li>Leadership</li>
              </ul>
            </div>
          </div>
          <div className = "experience-description-content">
              <a href = "https://malajamrecords.com/" target="_blank">Check It Out</a>
            </div>
        </div>
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
