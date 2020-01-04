import React from "react"

import styled from "@emotion/styled"

const SectionStyled = styled.section({
  padding: "3rem 1.5rem",
})

const Section = ({ children, styles }) => (
  <SectionStyled css={styles}>{children}</SectionStyled>
)

export default Section
