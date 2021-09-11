import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default props => (
  <article className={`photo-card`}>
    <div className="photo-card-image">
      <Link to={props.node.fields.slug}>
        <GatsbyImage
          image={getImage(props.node.frontmatter.thumbnail)}
          alt="photo feed"
        />
      </Link>
    </div>
    <div className="photo-card-content">
      <h4 className="photo-card-title">
        {props.node.frontmatter.title || props.node.fields.slug}
      </h4>
      <p>{props.node.frontmatter.description}</p>
      <Link to={props.node.fields.slug} className="photo-card-link">
        <button>Read More</button>
      </Link>
    </div>
  </article>
)
