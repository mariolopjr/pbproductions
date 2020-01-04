import React from "react"

import styled from "@emotion/styled"
import { colors } from "./styles"

const Container = styled.footer({
  color: colors.textcolor,
  fontSize: ".75rem",
  padding: "0.5rem",
  textAlign: "center",
})

const Footer = ({ siteName }) => (
  <Container>
    <span>© {`${new Date().getFullYear()} ${siteName}`}</span>
  </Container>
)

export default Footer
