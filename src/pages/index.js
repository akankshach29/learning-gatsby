import React from "react"
import Link from "gatsby"
import css from "graphql"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <Header headerText="Amazing Pandas Eating Things" />
      <div>
        <p>Read more here. 
          <Link
            to={`/blog/`}
            css={css`
              float: right;
            `}
          >
            Blog
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
