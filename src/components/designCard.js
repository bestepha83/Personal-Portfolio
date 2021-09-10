import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'


export default props => (
  <article className={`design-card`}>
    <div className="design-card-image">
      <Link to={props.node.fields.slug}>
        <img
          src={props.node.frontmatter.thumbnail.childImageSharp.fluid.src}
          alt="design feed"
        />
      </Link>
    </div>
  </article>
)
