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
    <section className = "home-section">
      <h3>Programming Design and Development</h3>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/code.png" alt = "Home Code Banner"
          />
        </div>
        <div className = "col-6">
          <div className = "col-6-container">
            <p>Minimalist, modern, illustration-based designs and efficient development</p>
            <Link
              to={`/code`}
            >
              <button>
                See What's Up
              </button>
            </Link> 
          </div>         
        </div>
      </div>
    </section>
    <section className = "home-section home-photo">
      <h3>Colorful Photography</h3>
      <div className = "home-content">
        <div className = "col-6 right-content">
          <div className = "col-6-container">
            <p>Global photography with an emphasis on color</p>
            <Link
              to={`/photo`}
            >
              <button>
                Explore the world
              </button>
            </Link>
          </div>
        </div>
        <div className = "col-6">
          <StaticImage
            src="../images/photo.png" alt = "Home Photo Banner"
          />
        </div>
      </div>
    </section>
    <section className = "home-section home-music">
      <h3>Unique Music Taste</h3>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/music.png" alt = "Home Music Banner"
          />
        </div>
        <div className = "col-6">
          <div className = "col-6-container">
            <p>A mix of chill and surfy tones with a hint of jazz and blues</p>
            <Link
              to={`/music`}
            >
              <button>
                Discover My Stuff
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className = "home-section">
      <h3>Fun Designs</h3>
      <div className = "home-content">
        <div className = "col-6 right-content">
          <div className = "col-6-container">
            <p>Colorful and light designs.</p>
            <Link
              to={`/design`}
            >
              <button>
                Check it out
              </button>
            </Link>             
          </div>
        </div>
        <div className = "col-6">
          <StaticImage
            src="../images/design.png" alt = "Home Design Banner"
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
