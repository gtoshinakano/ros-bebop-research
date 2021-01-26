import {useRef, useEffect} from "react"
import gsap from "gsap"
import styled from "styled-components"
import cover from "@Static/images/home-cover.png"

const HomeHero = (props) => {

  /*let animate = useRef(null)
  useEffect(() => {
    const timeline = gsap.timeline()
    timeline.to(animate, {x:1000, ease:"bounce.in", duration: 3})
    
  }, [])*/
  return(
    <HeroContainer
      bg={props.bg}
    >
      {/*<img 
        src='https://www.fotoaparatas.lt/images/eshop/868175-1-parrot-bebop-drone-1-red-01.png'
        ref={(el) => (animate = el)}
        width='100'
      />*/}
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  background-image: url(${cover});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 70vh;
`

export {HomeHero}