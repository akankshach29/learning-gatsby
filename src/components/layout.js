import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { jsx, css } from '@emotion/core'


export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  }
  render={data => (
    <div
      css={css`
        margin: 3rem auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <h3>My Panda Site</h3> 
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
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
    )}
  />
)