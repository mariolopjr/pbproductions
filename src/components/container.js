import React from "react"

import styled from "@emotion/styled"
import { mq } from "./styles"

const ContainerStyled = styled.div({
  margin: "0 auto",

  [mq[1]]: {
    maxWidth: 960,
    width: 960,
  },

  [mq[2]]: {
    maxWidth: 1170,
    width: 1170,
  },
})

const Container = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
)

export default Container
