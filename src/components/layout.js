import React from "react"
import { Link } from "gatsby"
import { jsx, css } from '@emotion/core'

const navStyle = css({ 
  paddingRight: '10px'
})

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <h3>MySite</h3> 
    <Link css={navStyle} to="/">Home</Link>
    <Link css={navStyle} to="/about/">About</Link> 
    <Link css={navStyle} to="/contact/">Contact</Link> 
    {children}
  </div>
)