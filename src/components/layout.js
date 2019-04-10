import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Hero from "./hero"
import WhatWeDo from "./whatwedo"
import About from "./about"
import TheProgram from "./theprogram"

import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Hero />
        <WhatWeDo />
        <About />
        <TheProgram />
      </>
    )}
  />
)

export default Layout
