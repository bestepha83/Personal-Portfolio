import React from "react"
import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import StaticImage from "gatsby-plugin-image"

const PeoplePage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
      <section className = "people-banner">
        <h1>People</h1>
      </section>
      <section className = "people-collections">
      </section>

    </Layout>
  )
}


export default PeoplePage