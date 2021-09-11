import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default props => (
  <article className={`design-card`}>
    <div className="design-card-image">
      <Link to={props.node.fields.slug}>
        <GatsbyImage
          image={getImage(props.node.frontmatter.thumbnail)}
          alt="design feed"
        />
      </Link>
    </div>
  </article>
)
