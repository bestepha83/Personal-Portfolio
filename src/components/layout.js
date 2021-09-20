import React, { useContext } from "react"
import { Global, css, useTheme } from "@emotion/react"
import Context from '../store/context'
import Header from "./header"

const Layout = props => {
  const { children } = props
  const { state } = useContext(Context)
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

          body, .navigation {
            background-color: ${state.isDark
              ? theme.dark.background
              : theme.light.background};
            }
          
          h1, h2, h3, h4, h5, h6, p, li, a {
            color: ${state.isDark
            ? theme.dark.color
            :theme.light.color};
          }
          .burger div {
            background-color: ${state.isDark
              ? theme.light.background
              : theme.dark.background};
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
