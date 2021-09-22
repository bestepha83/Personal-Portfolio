import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default props => (
  <article className={`music-card`}>
    <Link to={props.node.fields.slug}>
      <div className="music-card-image">
        <GatsbyImage
          image={getImage(props.node.frontmatter.thumbnail)}
          alt="music feed"
        />
      </div>
      <div className="music-card-content">
        <h4 className="music-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h4>
        <p>{props.node.frontmatter.description}</p>
      </div>
    </Link>
  </article>
)
