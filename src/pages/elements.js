import React from "react"
import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import StaticImage from "gatsby-plugin-image"

const ElementPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
      <section className = "elements-banner">
        <h1>Elements</h1>
      </section>
      <section className = "elements-collections">
      </section>

    </Layout>
  )
}


export default ElementPage