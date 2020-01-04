import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

import Container from "../components/container"
import Section from "../components/section"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexPageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            fileAbsolutePath: { regex: "/podcast/" }
            frontmatter: { draft: { ne: true } }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges: posts } }) => (
      <Layout>
        <Section>
          <Container>
            {posts.map(({ node: post }) => (
              <>{post.frontmatter.title}</>
            ))}
          </Container>
        </Section>
      </Layout>
    )}
  />
)

export default IndexPage
