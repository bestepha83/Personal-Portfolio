import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className = "banner">
      <h1>Good Afternoon! I'm Ben, and this is my website.</h1>
      <div className = "banner-headshot">
        <StaticImage
          src="../images/banner.jpg" alt = "Headshot"
        />
      </div>
    </section>
    <section className = "home-section home-photo">
      <h4>Resume</h4>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/guitar.jpg" alt = "Headshot"
          />
        </div>
        <div className = "col-6">
          <p>My qualifications, laid out</p>
          <Link
            to={`/resume`}
          >
            <button>
              Explore
            </button>
          </Link>
        </div>
      </div>
    </section>
    <section className = "home-section home-photo">
      <h4>Photography</h4>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/guitar.jpg" alt = "Headshot"
          />
        </div>
        <div className = "col-6">
          <p>I like to do photography for fun. Check out my stuff!</p>
          <Link
            to={`/photo`}
          >
            <button>
              Explore
            </button>
          </Link>
        </div>
      </div>
    </section>
    <section className = "home-section">
      <h4>Programming</h4>
      <div className = "home-content">
        <div className = "col-6">
          <p>I like to do programming for fun. Check out my stuff!</p>
          <Link
            to={`/code`}
          >
            <button>
              Explore
            </button>
          </Link>          
        </div>
        <div className = "col-6">
          <StaticImage
            src="../images/guitar.jpg" alt = "Headshot"
          />
        </div>
      </div>
    </section>
    <section className = "home-section home-music">
      <h4>Music</h4>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/guitar.jpg" alt = "Headshot"
          />
        </div>
        <div className = "col-6">
          <p>I like to do music for fun. Check out my stuff!</p>
          <Link
            to={`/music`}
          >
            <button>
              Explore
            </button>
          </Link>
        </div>
      </div>
    </section>
    <section className = "home-section">
      <h4>Design</h4>
      <div className = "home-content">
        <div className = "col-6">
          <p>I like to do design for fun. Check out my stuff!</p>
          <Link
            to={`/design`}
          >
            <button>
              Explore
            </button>
          </Link>          
        </div>
        <div className = "col-6">
          <StaticImage
            src="../images/guitar.jpg" alt = "Headshot"
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
