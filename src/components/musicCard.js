import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default props => (
  <article className={`music-card`}>
    <div className="music-card-image">
      <Link to={props.node.fields.slug}>
        <GatsbyImage
          image={getImage(props.node.frontmatter.thumbnail)}
          alt="music feed"
        />
      </Link>
    </div>
    <div className="music-card-content">
      <h4 className="music-card-title">
        {props.node.frontmatter.title || props.node.fields.slug}
      </h4>
      <p>{props.node.frontmatter.description}</p>
      <Link to={props.node.fields.slug} className="music-card-link">
        <button>Read More</button>
      </Link>
    </div>
  </article>
)
