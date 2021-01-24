import React from "react"
import { graphql, Link } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Layout from "./layout"

export default function pageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Link to={`/components/`}>一覧へ戻る</Link>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <h2>{mdx.frontmatter.author}</h2>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
