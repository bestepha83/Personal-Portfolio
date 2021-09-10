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
          src="../images/banner-headshot.png" alt = "Headshot"
        />
      </div>
    </section>
    <section className = "home-section">
      <h4>Photography</h4>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/banner-headshot.png" alt = "Headshot"
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
            src="../images/banner-headshot.png" alt = "Headshot"
          />
        </div>
      </div>
    </section>
    <section className = "home-section">
      <h4>Design</h4>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/banner-headshot.png" alt = "Headshot"
          />
        </div>
        <div className = "col-6">
          <p>I like to do photography for fun. Check out my stuff!</p>
          <Link
            to={`/`}
          >
            <button>
              Explore
            </button>
          </Link>
        </div>
      </div>
    </section>
    <section className = "home-section">
      <h4>Music</h4>
      <div className = "home-content">
        <div className = "col-6">
          <p>I like to do photography for fun. Check out my stuff!</p>
          <Link
            to={`/`}
          >
            <button>
              Explore
            </button>
          </Link>          
        </div>
        <div className = "col-6">
          <StaticImage
            src="../images/banner-headshot.png" alt = "Headshot"
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
