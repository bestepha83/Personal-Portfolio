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
        <h4
          data-sal="slide-up"
          data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
          data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
          data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
        >Fueled by a passion to learn, I am always looking for new opportunities and hobbies to master. I'm curious and I like a lot of cool stuff.</h4>
      </div>
    </section>
    <section className = "home-section">
      <h3
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="100"
        data-sal-easing="ease"  
      >Programming Design and Development</h3>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/code.png" alt = "Home Code Banner"
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="200"
            data-sal-easing="ease"
          />
        </div>
        <div className = "col-6">
          <div className = "col-6-container">
            <p
              data-sal="fade"
              data-sal-duration="2000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >Minimalist, modern, illustration-based designs and efficient development</p>
            <Link
              to={`/code`}
            >
              <button
                data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                See What's Up
              </button>
            </Link> 
          </div>         
        </div>
      </div>
    </section>
    <section className = "home-section home-photo">
      <h3
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="100"
        data-sal-easing="ease"
      >Colorful Photography</h3>
      <div className = "home-content">
        <div className = "col-6 right-content">
          <div className = "col-6-container">
            <p
              data-sal="fade"
              data-sal-duration="2000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >Global photography with an emphasis on color</p>
            <Link
              to={`/photo`}
            >
              <button
                data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                Explore the world
              </button>
            </Link>
          </div>
        </div>
        <div className = "col-6">
          <StaticImage
            src="../images/photo.png" alt = "Home Photo Banner"
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="200"
            data-sal-easing="ease"
          />
        </div>
      </div>
    </section>
    <section className = "home-section home-music">
      <h3
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="100"
        data-sal-easing="ease"
      >Unique Music Taste</h3>
      <div className = "home-content">
        <div className = "col-6">
          <StaticImage
            src="../images/music.png" alt = "Home Music Banner"
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="200"
            data-sal-easing="ease"
          />
        </div>
        <div className = "col-6">
          <div className = "col-6-container">
            <p
              data-sal="fade"
              data-sal-duration="2000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >A mix of chill and surfy tones with a hint of jazz and blues</p>
            <Link
              to={`/music`}
            >
              <button
                data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="400"
                data-sal-easing="ease"
              >
                Discover My Stuff
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className = "home-section">
      <h3
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="300"
        data-sal-easing="ease"
      >Fun Designs</h3>
      <div className = "home-content">
        <div className = "col-6 right-content">
          <div className = "col-6-container">
            <p
              data-sal="fade"
              data-sal-duration="2000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >Colorful and light designs.</p>
            <Link
              to={`/design`}
            >
              <button
                data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                Check it out
              </button>
            </Link>             
          </div>
        </div>
        <div className = "col-6">
          <StaticImage
            src="../images/design.png" alt = "Home Design Banner"
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease"
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
