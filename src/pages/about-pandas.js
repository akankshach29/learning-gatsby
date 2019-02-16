import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
    The giant panda, also known as panda bear or simply panda, 
    is a bear native to south central China. It is easily recognized
    by the large, distinctive black patches around its eyes, over the
    ears, and across its round body. The name "giant panda" is sometimes
    used to distinguish it from the unrelated red panda.
    </p>
    <p>
    A panda's daily diet consists almost entirely of the leaves, stems
    and shoots of various bamboo species. Bamboo contains very little 
    nutritional value so pandas must eat 12-38kg every day to meet their energy needs.
    </p>
    <p>Read more here @
      <Link
        to={`/blog/`}
      >
        Blog
      </Link>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`