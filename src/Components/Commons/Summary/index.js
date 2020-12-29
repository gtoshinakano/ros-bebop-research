import {useRef, useEffect} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components"
import {withTranslation} from "../../../../i18n"
import {breakpoint} from "@Definitions/Styled"
import Link from "next/link"

const Summary = ({t, links}) => {
  gsap.registerPlugin(ScrollTrigger);
  let sticky = useRef(null)
  useEffect(() => {
    const element = sticky.current;
    gsap.fromTo(
      element.querySelector(".animate"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector(".trigger"),
          start: "bottom top",
          scrub: 0.5,
          toggleActions: "play none reset reset"
        }
      }
    );
  }, [])

  return(
    <div ref={sticky}>
      <Fixed className="animate">
        <h6><strong>{t("summary")}</strong></h6>
        <ul>
          {links && links.map((item, index) => {return(
            <li key={item.title}>
              <Link href={item.link}><a>0{index+1} - {item.title}</a></Link>
            </li>
          )})}
        </ul>
      </Fixed>
      <h4>O que você verá nesta sessão:</h4>
      <Container className="trigger">
        {links && links.map((item, index) => {return(
            <li key={item.title}>
              <Link href={item.link}><a>0{index+1} - {item.title}</a></Link>
            </li>
          )})}
      </Container>
      <hr />
    </div>
  )
}

const Container = styled.div`
  border: 1px solid ${props => props.theme.palette.summary.border};
  border-radius: 5px;
  padding: 15px 10px;
  margin: 15px 0;
  background-color: ${props => props.theme.palette.summary.backgroundColor};
  color: ${props => props.theme.palette.summary.color};
  li{
    list-style-type: none;
    margin: 5px 5px 6px;
  }
` 

const Fixed = styled.div`
  visibility: hidden;
  ${breakpoint.xl} {
    visibility: visible;
  }
  font-family: Noto Sans JP;
  position: fixed;
  top: 40vh;
  transform: translateY(-50%);
  left: 64px;
  width:190px;
  ul{
    padding:0;
    margin:-4px 0 0;
  }
  li{
    list-style-type: none;
    color: ${props => props.theme.palette.summary.color};
    margin-bottom: 6px;
    padding-bottom: 5px;
  }
  a{color: inherit;}
`

const Extended = withTranslation('common')(Summary)
export {Extended as Summary}