import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className = "banner">
      <h1>Good Afternoon! I'm Ben, and this is my website.</h1>
    </section>
    <section className = "home-section">
      <h4>Photography</h4>
    </section>
    <section className = "home-section">
      <h4>Programming</h4>
    </section>
    <section className = "home-section">
      <h4>Design</h4>
    </section>
    <section className = "home-section">
      <h4>Music</h4>
    </section>
  </Layout>
)

export default IndexPage
