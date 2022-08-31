import React from "react"
import '../styles/styles.scss'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
  // :hover {
  //   div:first-child {
  //     animation: burger 0.3s;
  //     animation-delay: 0s;
  //   }

  //   div:nth-child(2) {
  //     animation: burger 0.3s;
  //     animation-delay: 0.1s;
  //   }

  //   div:last-child {
  //     animation: burger 0.3s;
  //     animation-delay: 0.2s;
  //   }
  // }

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
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({nav}) => (nav ? "98": '-11')};
  display: ${({nav}) => (nav ? "block": 'none')};
  transform: ${({nav}) => (nav ? "translateX(0)": 'translateX(-100vw)')};

`



const Header = props => {
  const [nav, setToggleNav] = React.useState(false)
  const [button, setToggleButton] = React.useState(false)
  const linkStyles = {
    color: 'white',
    opacity: "0.4",
  }
  const activeStyles = {
    color: 'white',
    opacity: "1",
  }
  // const data = useStaticQuery(graphql`
  //   query {
  //     currentBuildDate {
  //       currentDate
  //     }
  //   }
  // `)
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
          <div className = "burger">
            <MenuIcon nav = {nav} onClick = {() => setToggleNav(!nav)}>
              <div />
              <div />
              <div />
            </MenuIcon>              
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

        </div>
      </div>
      <div className="site-head-left">
        <div className = "page-info">
          <div className = "header-date">
            <div className = "header-date-items">
              <div className = "date-line"></div>
              {/* <h2>Updated {data.currentBuildDate.currentDate}</h2> */}
              <div className = "date-line"></div>              
            </div>
          </div>
          <div className = "current-page">
            <div className = 'current-page-items'>
              <p>Good Afternoon Good Afternoon Good Afternoon</p>              
            </div>
          </div>
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