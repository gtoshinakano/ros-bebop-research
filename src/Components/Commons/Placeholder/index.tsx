import React from 'react'
import {Container, Rect} from './styled'


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
        <Rect height={20} />
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