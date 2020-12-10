import React from 'react'
import {Container, Rect} from './styled'
import {GlobalContainer} from "@Commons"
import _ from 'lodash'


const Placeholder = ({
  children, 
  heroImage, 
  paragraphs, 
  header,
  loading
}) => {

  if(loading)
    return (
      <Container>
        <Rect height={heroImage ? "190px" : "1em"} heroImage={heroImage} />
        <GlobalContainer>
          {header && <Rect width="100%" height="2.5em" />}
          {paragraphs > 0 && _.times(paragraphs, () => <Rect />)}
        </GlobalContainer>
      </Container>
    )
  else
      return (
        <Container>
          {children}
        </Container>
      )
}

export {Placeholder}