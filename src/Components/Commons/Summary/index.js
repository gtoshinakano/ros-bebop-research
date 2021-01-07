import {useRef, useEffect} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components"
import {withTranslation} from "../../../../i18n"
import {breakpoint} from "@Definitions/Styled"
import Link from "next/link"
import {useRouter} from "next/router"

const Summary = ({t, links, hasSticky}) => {
  let sticky = hasSticky ? useRef(null) : null

  const {asPath} = useRouter()


  return(
    <div ref={sticky}>
      {hasSticky && <Sticky links={links} sticky={sticky} asPath={asPath} t={t} />}
      <h4>{t("summary-header")}</h4>
      <Container className="trigger">
        {links && links.map((item, index) => {return(
            <li key={item.title}>
              <Link href={`/posts/${item.link}`}>
                <a title={item.title} className={asPath === `/posts/${item.link}` && "no-cursor"}>0{index+1} - {item.title}</a>
              </Link>
            </li>
          )})}
      </Container>
      <hr />
    </div>
  )
}

const Sticky = ({sticky, links, t,  asPath}) => {
  gsap.registerPlugin(ScrollTrigger);

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
    <Fixed className="animate">
      <h6><strong>{t("summary")}</strong></h6>
      <img src="https://gifprint.s3.amazonaws.com/p/gif/83894/cf1542b0255f013784fd2ea0b0aa34b1.gif" width="10" />
      <ul>
        {links && links.map((item, index) => {return(
          <li key={item.title}>
            <Link href={`/posts/${item.link}`}>
              <a title={item.title} className={asPath === `/posts/${item.link}` && "no-cursor"}>0{index+1} - {item.title}</a>
            </Link>
          </li>
        )})}
      </ul>
    </Fixed>
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