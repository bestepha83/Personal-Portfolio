import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'


export default props => (
  <article className={`project-card`}>
    <div className="project-card-image">
      <Link to={props.node.fields.slug}>
        <img
          src={props.node.frontmatter.thumbnail.childImageSharp.fluid.src}
          alt="project feed"
        />
      </Link>
    </div>
    <div className="project-card-content">
      <h4 className="project-card-title">
        {props.node.frontmatter.title || props.node.fields.slug}
      </h4>
      <p>{props.node.frontmatter.description}</p>
      <Link to={props.node.fields.slug} className="project-card-link">
        <button>Read Less</button>
      </Link>
    </div>
  </article>
)
