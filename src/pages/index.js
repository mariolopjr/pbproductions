import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

import Container from "../components/container"
import Section from "../components/section"

import { css } from "@emotion/core"
import styled from "@emotion/styled"

const PostLinkContainer = styled.div({
  color: "white",
  margin: "0 auto",
  maxWidth: "30em",
  opacity: 0.7,

  ":not(:last-of-type)": {
    marginBottom: "0.5rem",
  },
})

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
