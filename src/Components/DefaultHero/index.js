import {useRef, useEffect} from "react"
import gsap from "gsap"
import styled from "styled-components"
import {breakpoint} from '@Definitions/Styled'

const DefaultHero = (props) => {

  return(
    <HeroContainer
      bg={props.bg}
    >
      <Container>
        <h1>{props.header}</h1>
      </Container>   
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  background-image: url(${props => props.bg});
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 190px;
  padding:20px 0;
  display:flex;
  h1{
    padding:0;
    text-shadow: 0 0 0.5em ${props => props.theme.palette.common.contrastBg};
    color: ${props => props.theme.palette.common.contrastText};
  }
`

const Container = styled.div`
  max-width:680px;
  margin: 0 auto;
  ${breakpoint.xs} {
    margin:0 10px;
  }
  ${breakpoint.sm} {
    margin:0 10px;
  }
`


export {DefaultHero}