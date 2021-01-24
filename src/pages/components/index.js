import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"

// 参考: https://kakioku.com/2011180/
const BlogList = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <Layout>
      {posts.map(({ node }) => (
        <article key={node.id}>
          <Link to={node.fields.slug}>
            <h2>{node.frontmatter.title}</h2>
            <span>{node.frontmatter.date}</span>
          </Link>
        </article>
      ))}
    </Layout>
  )
}
export default BlogList

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
