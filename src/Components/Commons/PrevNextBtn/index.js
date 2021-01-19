import {useRef, useEffect} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components"
import {withTranslation} from "../../../../i18n"
import {breakpoint} from "@Definitions/Styled"
import {useRouter} from "next/router"
import {Button} from "react-bootstrap"
import {LeftArrowCircle} from '@styled-icons/boxicons-regular/LeftArrowCircle'
import {RightArrowCircle} from '@styled-icons/boxicons-regular/RightArrowCircle'


const PrevNextBtn = ({t, links}) => {
  let sticky = useRef(null)

  return(
    <div ref={sticky}>
      <Sticky links={links} sticky={sticky} t={t} />
      <Container className="trigger"/>
    </div>
  )
}

const Sticky = ({sticky, links, t}) => {
  gsap.registerPlugin(ScrollTrigger);

  const router = useRouter()

  useEffect(() => {
    const element = sticky.current;
    gsap.fromTo(
      element.querySelector(".animate1"),
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

  useEffect(() => {
    const element = sticky.current;
    gsap.fromTo(
      element.querySelector(".animate2"),
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
    <>
      {links.prevPage && <Fixed className="animate1" prev={links.prevPage}>
        <LinkButton  
          size="lg" 
          block 
          onClick={() => router.push(links.prevPage.link)}>
          <LeftArrow size="20" /> {t("prev")}
          <img src="https://gifprint.s3.amazonaws.com/p/gif/83894/cf1542b0255f013784fd2ea0b0aa34b1.gif" width="10" />
          <br /><small>{links.nextPage.title}</small>
        </LinkButton>
        
      </Fixed>}
      {links.nextPage && <Fixed className="animate2" next={links.nextPage}>
        <LinkButton  
          size="lg" 
          block 
          onClick={() => console.log("oi")}>
        <RightArrow size="20" /> {t("next")}
          <img src="https://gifprint.s3.amazonaws.com/p/gif/83894/cf1542b0255f013784fd2ea0b0aa34b1.gif" width="10" />
          <br /><small>{links.nextPage.title}</small>
        </LinkButton>
      </Fixed>}
    </>
  )
}

const Container = styled.div`
` 

const Fixed = styled.div`
  visibility: hidden;
  ${breakpoint.xl} {
    visibility: visible;
  }
  font-family: Noto Sans JP;
  position: fixed;
  top: 50vh;
  transform: translateY(-50%);
  left: ${props => props.prev && '18px'};
  right: ${props => props.next && '18px'};
  width:250px;
`

const LinkButton = styled(Button).attrs((props) => 
  {
    console.log(props)
    return props.theme.name === "dark" ? ({ variant: "outline-light" }): ({ variant: "outline-dark" }) 
    
  }
)`
  text-align: left;
  padding:2px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  width:100%;
  small{
    font-size: 0.7em;
    white-space: nowrap;
  }
  z-index:0;
`

const LeftArrow = styled(LeftArrowCircle)`
  float: left;
  margin: 5px 10px 0 0;
`

const RightArrow = styled(RightArrowCircle)`
  float: right;
  margin: 5px 0 0;
`

const Extended = withTranslation('common')(PrevNextBtn)
export {Extended as PrevNextBtn}