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
    height: 0.2rem;
    background: #181818;
    border-radius: 10px;
    transform-origin: 1px;
    position: relative;
    transition: 0.8s;

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
  transform: ${({nav}) => (nav ? "translateX(90vw)": 'translateX(0)')};
`

const Header = props => {
    const linkStyles = {
      opacity: "0.4",
    }
    const activeStyles = {
      opacity: 1,
    }
    const data = useStaticQuery(graphql`
      query {
        circletext: file(relativePath: { eq: "circletext.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
      <header className="site-head-container">
        <div className = "site-head-top">
          <div className = "logo">
            <h2>Ben Stephan</h2>
          </div>
        </div>
        <div className="site-head-left">
          <div className = "page-info">
            <div className = "header-date">
              <div className = "header-date-items">
                <div className = "date-line"></div>
                <h2>December 25, 2020</h2>
                <div className = "date-line"></div>              
              </div>
              {/* current date for regular pages, past date for dynamic pages */}
            </div>
            <div className = "current-page">
              <div className = 'current-page-items'>
                <h2>Welcome</h2>              
              </div>
            </div>
          </div>
          <MenuLinks>
            <div className = "navigation">
              <ul className="nav-list">
                <li className="nav-elements">
                  <Link
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
                    to={`/contact`}
                    style={linkStyles}
                    activeStyle={activeStyles}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className = "burger">
              <MenuIcon nav = {nav} onClick = {() => setToggleNav(!nav)}>
                <div />
                <div />
                <div /> 
              </MenuIcon>              
            </div> */}
          </MenuLinks>
        </div>
        {/* <div className = "circle-text">
          <Link
            to={`/contact`}
          >
            <StaticImage
              fluid={data.circletext.childImageSharp.fluid}
              className="kg-image site-head-logo"
            />          
          </Link>
        </div> */}
      </header>
    )
}
  
export default Header