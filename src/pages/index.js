import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => (
  
  <Layout>

    <SEO title="Home" />
    <div className = "circle1"></div>
    <div className = "circle2"></div>
    <div className = "circle3"></div>
    <div className = "circle4"></div>
    <section className = "banner">
      <h1 className = "banner-title-1">Hey there!</h1>
      <div className = "banner-headshot">
        <StaticImage
          src="../images/banner.png" alt = "Headshot"
        />
      </div>
      <h1 className = "banner-title-2">I'm Ben</h1>
      <h3>Programmer, Designer, Musician, and Photographer</h3>
    </section>
    <section className = "home-section">
      <div className = "home-mission">
        <h4>Fueled by a passion to learn, I am always looking for new opportunities and hobbies to master. I'm curious and I like a lot of cool stuff.</h4>
      </div>
    </section>
    <section className = "home-section home-photo">
      <h3>Photography</h3>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/photo.png" alt = "Home Photo Banner"
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
      <h3>Programming</h3>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/code.png" alt = "Home Code Banner"
          />
        </div>
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
      </div>
    </section>
    <section className = "home-section home-music">
      <h3>Music</h3>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/guitar.jpg" alt = "Home Music Banner"
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
      <h3>Design</h3>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/design.jpg" alt = "Home Design Banner"
          />
        </div>
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
      </div>
    </section>
  </Layout>
)

export default IndexPage
