import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { jsx, css } from '@emotion/core'

const navStyle = css({ 
  paddingRight: '10px'
})

export default ({ children }) => (
    <div
    css={css`
      margin: 3rem auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <h3>MySite</h3> 
    <Link css={navStyle} to="/">Home</Link>
    <Link css={navStyle} to="/about/">About</Link> 
    <Link css={navStyle} to="/contact/">Contact</Link>
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        Pandas Eating Lots
      </h3>
    </Link>
    <Link
      to={`/about-pandas/`}
      css={css`
        float: right;
      `}
    >
      About Pandas
    </Link>

    {children}
  </div>
)