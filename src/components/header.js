import React from "react"
import '../styles/styles.scss'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const ColorMode = styled.button`
  cursor: pointer;
  fill: ${({button}) => button ? 'white' : '#181818'};
  transition: 0.5s;
  :hover {
    transform: scaleY(0.85);
  }
`

const MenuIcon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  z-index: 9999;
  outline: none;
  transition: 0.3 ease-in-out;
  :hover {
    div:first-child {
      animation: burger 0.3s;
      animation-delay: 0s;
    }

    div:nth-child(2) {
      animation: burger 0.3s;
      animation-delay: 0.1s;
    }

    div:last-child {
      animation: burger 0.3s;
      animation-delay: 0.2s;
    }
  }

  div {
    width: 1.5rem;
    height: 1px;
    background: #181818;
    border-radius: 10px;
    transform-origin: 1px;
    position: relative;
    transition: 0.8s;
    z-index: 999;

    :first-child {
      transform: ${({nav}) => nav ? 'rotate(405deg)' : 'rotate(0)'}
    }

    :nth-child(2) {
      opacity: ${({nav}) => nav ? '0' : '1'}
    }

    :last-child {
      transform: ${({nav}) => nav ? 'rotate(-405deg)' : 'rotate(0)'}
    }
  }
`

const MenuLinks = styled.nav`
  z-index: ${({nav}) => (nav ? "98": '-1000')};
  display: ${({nav}) => (nav ? "block": 'none')};
  transform: ${({nav}) => (nav ? "translateX(100vw)": 'translateX(0)')};

`



const Header = props => {
  const [nav, setToggleNav] = React.useState(false)
  const [button, setToggleButton] = React.useState(false)
  const linkStyles = {
    color: '#181818',
    opacity: "0.4",
  }
  const activeStyles = {
    color: '#181818',
    opacity: "1",
  }
  const data = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)
  return (
    <header className="site-head-container">
      <div className = "site-head-top">
        <div className = "site-head-top-content">
          <Link 
            className = "logo"
            to={`/`}
          >
            <StaticImage
              src="../images/logo.png" alt = "Logo"
            />
            <h2>Ben Stephan</h2>
          </Link>
          <ColorMode
            className = "color-mode" 
            button = {button}
            // onClick={() =>  dispatch({type: "TOGGLE_DARK_MODE"})}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.09 110.96" onClick={() =>  setToggleButton(!button)}>
            <defs></defs>
              <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1" className = "isolate">
              <path className="cls-1" d="M124.5,59.35c-5,33.77-32.51,54.72-62.28,51.24C32.34,106.87,4.42,85.94.4,59.35S23.82,3.89,62.68.31,129.54,25.72,124.5,59.35Z"/>
              </g>
              </g>
            </svg>
          </ColorMode>
        </div>
      </div>
      <div className="site-head-left">
        <div className = "page-info">
          <div className = "header-date">
            <div className = "header-date-items">
              <div className = "date-line"></div>
              <h2>Updated {data.currentBuildDate.currentDate}</h2>
              <div className = "date-line"></div>              
            </div>
          </div>
          <div className = "current-page">
            <div className = 'current-page-items'>
              <h2>Welcome</h2>              
            </div>
          </div>
        </div>
        <MenuLinks nav = {nav}>
          <div className = "navigation">
            <ul className="nav-list">
              <li className="nav-elements">
                <Link
                  nav = {nav}
                  to={`/`}
                  style={linkStyles}
                  activeStyle={activeStyles}
                >
                  Home
                </Link>
              </li>
              <li className="nav-elements">
                <Link
                  to={`/code`}
                  style={linkStyles}
                  activeStyle={activeStyles}
                  partiallyActive={true}
                >
                  Code
                </Link>
              </li>
              <li className="nav-elements">
                <Link
                  to={`/photo`}
                  style={linkStyles}
                  activeStyle={activeStyles}
                >
                  Photography
                </Link>
              </li>
              <li className="nav-elements">
                <Link
                  to={`/music`}
                  style={linkStyles}
                  activeStyle={activeStyles}
                >
                  Music
                </Link>
              </li>
              <li className="nav-elements">
                <Link
                  to={`/design`}
                  style={linkStyles}
                  activeStyle={activeStyles}
                >
                  Design
                </Link>
              </li>
              <li className="nav-elements">
                <Link
                  to={`/resume`}
                  style={linkStyles}
                  activeStyle={activeStyles}
                  partiallyActive={true}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-elements">
                <Link
                  to={`/contact`}
                  style={linkStyles}
                  activeStyle={activeStyles}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </MenuLinks>
      <div className = "burger">
        <MenuIcon nav = {nav} onClick = {() => setToggleNav(!nav)}>
          <div />
          <div />
          <div />
        </MenuIcon>              
      </div>
      </div>
      <div className = "circle-text">
        <Link
          to={`/contact`}
        >
          <StaticImage
            src="../images/circletext.png" alt = "contact me"
          />
        </Link>
      </div>
    </header>
  )
}
  
export default Header