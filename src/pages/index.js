import React from "react"
import { Link, graphql } from "gatsby"
import { css } from '@emotion/core'
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <Header headerText="Amazing Pandas Eating Things" />
      <div>
        <p> 
          <Link
            to={`/blog/`}
            css={css`
              marginLeft: '10px'
            `}
          >
            Read more here. Blog.
          </Link>
        </p>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </div>
  </Layout>
)
