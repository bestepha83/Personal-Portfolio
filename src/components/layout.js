import React, { useContext } from "react"
import { Global, css, useTheme } from "@emotion/react"
import Context from '../store/context'
import Header from "./header"

const Layout = props => {
  const { children } = props
  const { state, dispatch } = useContext(Context)
  const theme = useTheme()
  const [toggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <Global 
        styles = {css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }


        `}
      />
      <Header />
      <main id="site-main" className="site-main">
        <div className="transition-fade">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
