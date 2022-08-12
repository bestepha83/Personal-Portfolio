import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import '../styles/styles.scss'

const BlogIndex = ({ data }) => {

  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout title={siteTitle}>
      <Seo
        title="Resume"
        keywords={[
          `Resume`,
        ]}
        description="Ben's Resume"
      />

      <section className = "resume-banner">
        <div className = "resume-banner-content">
          <h2
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="100"
            data-sal-easing="ease"
          >I am always striving to improve myself, whether that's in my technical skillset or my professional development</h2>
        </div>
        <button>Scroll</button>
      </section>
      <section className = "resume-section">
        <div className = "resume-section-content">
          <h2>My Experience in the Field</h2>
        </div>
      </section>
      <section className = "resume-main">
        <div className = "experience">
          <div className = "experience-header">
            <h3>Technology Risk Consulting Intern</h3>
            <h4>Ernst & Young (EY)</h4>
          </div>
          <div className = "experience-content">
            <div className = "experience-description">
              <div className = "experience-description-content">
                <ul>
                  <li>
                    <span>Created Budget v Actual Analysis to assess team efficiency and resource allocation</span>
                  </li>
                </ul>
              </div>
              <div className = "experience-description-content">
                <ul className = "skills">
                  <li>Data Analysis</li>
                </ul>
              </div>
            </div>                 
          </div>
        </div>
        <div className = "experience">
          <div className = "experience-header">
            <h3>Industry Development Consultant</h3>
            <h4>Ideal Tridon</h4>
          </div>
          <div className = "experience-content">
            <div className = "experience-description">
              <div className = "experience-description-content">
                <ul>
                  <li>
                    <span>Led emerging market project which included sizing and analyzing renewable energy and drainage markets and developing expansion recommendations through a mix of existing products, new product development, and acquisition strategy</span>
                  </li>
                  <li>
                    <span>Developed a business case and commercial development plan for a new material that would decrease costs by 40% and expand our product portfolio</span>
                  </li>
                  <li>
                    <span>Worked cross-functionally with leaders across the business to develop executive management presentations relative to customer retention and market strategy</span>
                  </li>
                  <li>
                    <span>Supported executive team through performing M&A-related tasks including identifying acquisition targets, competitive research and miscellaneous data analysis projects in addition to ad hoc initiatives as assigned</span>
                  </li>
                </ul>
              </div>
              <div className = "experience-description-content">
                <ul className = "skills">
                  <li>Data Analysis</li>
                  <li>Microsoft Excel, Powerpoint, Word</li>
                  <li>Market Research</li>
                  <li>Business Cases</li>
                  <li>Competitive Research</li>
                  <li>Time Management</li>
                  <li>Project Management</li>
                  <li>Leading Meetings</li>
                  <li>Customer Retention</li>
                  <li>M&A</li>
                  <li>Market Strategy</li>
                  <li>New Product Development</li>
                </ul>
              </div>
            </div>                 
          </div>
        </div>
        <div className = "experience">
          <div className = "experience-header">
            <h3>Tennis Instructor</h3>
            <h4>Appleton Parks and Recreation</h4>
          </div>
          <div className = "experience-content">
            <div className = "experience-description">
              <div className = "experience-description-content">
                <ul>
                  <li>Developed and carried out oral and written instructions for beginner through advanced level adult tennis classes</li>
                </ul>
              </div>
              <div className = "experience-description-content">
                <ul className = "skills">
                  <li>Leadership</li>
                  <li>Communication</li>
                  <li>Working in Teams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className = "experience">
          <div className = "experience-header">
            <h3>Web Designer and Developer</h3>
            <h4>Mala Jam Records</h4>
          </div>
          <div className = "experience-content">
            <div className = "experience-description">
              <div className = "experience-description-content">
                <ul>
                  <li>Designed, developed, and maintained startup's website and led framing and communication of company model, vision, and branding</li>
                </ul>
              </div>
              <div className = "experience-description-content">
                <ul className = "skills">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Gatsby</li>
                  <li>Branding</li>
                </ul>
                <a href = "https://malajamrecords.com/" target="_blank" rel="noreferrer">Check It Out</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className = "resume-main">
        <section className = "resume-section">
          <div className = "resume-section-content">
            <h2>What the heck am I up to at College?</h2>
            <h4>(I go to Cal Poly SLO, BTW)</h4>
          </div>
        </section>
        <div className = "experience">
          <div className = "experience-header">
            <h3>Director of Professional Relations</h3>
            <h4>Information Systems Association</h4>
          </div>
          <div className = "experience-content">
            <div className = "experience-description">
              <div className = "experience-description-content">
                <ul>
                  <li>Networking with and scheduling company recruiters and industry professionals for weekly informational meetings, leading to an increase in attendance by 50%</li>
                </ul>
              </div>
              <div className = "experience-description-content">
                <ul className = "skills">
                  <li>Networking</li>
                  <li>Organization</li>
                  <li>Scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className = "experience">
          <div className = "experience-header">
            <h3>Environmental Economics Research Assistant</h3>
            <h4>Worked with Professor Steve Hamilton</h4>
          </div>
          <div className = "experience-content">
            <div className = "experience-description">
              <div className = "experience-description-content">
                <ul>
                  <li>Managed graphic design for 6-Gigawatt Offshore Wind Farm proposal, including formatting, adding pictures, creating figures, and providing general revisions</li>
                  <li>Matched the top 2,000 EANs for coffee and snack bar products between 2 databases in excel to inform plastic product research</li>
                  <li>Intro to Economics Teaching Assistant; led weekly virtual sessions, explained economical concepts and problems with examples</li>
                </ul>
              </div>
              <div className = "experience-description-content">
                <ul className = "skills">
                  <li>Microsoft Excel, Word</li>
                  <li>Data Analysis</li>
                  <li>Leadership</li>
                  <li>Communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className = "experience">
          <div className = "experience-header">
            <h3>Technology Officer</h3>
            <h4>Cal Poly Entrepreneurs</h4>
          </div>
          <div className = "experience-content">
            <div className = "experience-description">
              <div className = "experience-description-content">
                <ul>
                  <li>Led successful website migration and redesign for improved sustainability, design, and 40% cost reduction</li>
                  <li>Created and distributed weekly emails about upcoming meetings, events, and opportunities</li>
                </ul>
              </div>
              <div className = "experience-description-content">
                <ul className = "skills">
                  <li>Branding</li>
                  <li>Cost Savings</li>
                  <li>Webflow</li>
                  <li>Communication</li>
                </ul>
                <a href = "https://malajamrecords.com/" target="_blank" rel="noreferrer">Check It Out</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className = "resume-main">
        <h2>Technological Proficiencies</h2>
        <div className = "tech-skills">
          <div className = "tech-skill-section">
            <h6>Microsoft Office Suite</h6>
            <ul>
              <li>Powerpoint</li>
              <li>Excel</li>
              <li>Word</li>
            </ul>            
          </div>
          <div className = "tech-skill-section">
            <h6>Graphic Design</h6>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe XD</li>
              <li>Adobe Illustrator</li>
              <li>Adobe After Effects</li>
              <li>Adobe Dimension</li>
            </ul>
          </div>
          <div className = "tech-skill-section">
            <h6>Web Design and Development</h6>
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
          </div>
          <div className = "tech-skill-section">
            <h6>Data Analysis and Statistics</h6>
            <ul>
              <li>R</li>
              <li>Excel</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className = "tech-skill-section">
            <h6>Logic Pro X</h6>
          </div>
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
