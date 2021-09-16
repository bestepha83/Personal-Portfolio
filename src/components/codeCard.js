import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default props => (
  <article className={`project-card`}>
    <Link to={props.node.fields.slug}>
      <div className="project-card-image">
        <GatsbyImage
          image={getImage(props.node.frontmatter.thumbnail)}
          alt="project feed"
        />
      </div>
      <div className="project-card-content">
        <h4 className="project-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h4>
        <p>{props.node.frontmatter.description}</p>
      </div>
    </Link>
  </article>
)
