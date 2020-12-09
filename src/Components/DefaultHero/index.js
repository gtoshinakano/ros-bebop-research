import {useRef, useEffect} from "react"
import gsap from "gsap"
import styled from "styled-components"
import {breakpoint} from '@Definitions/Styled'
import { withTranslation } from "../../../i18n"
import moment from "moment"
import Link from 'next/link'

const Hero = (props) => {

  const {t, date} = props

  return(
    <HeroContainer
      bg={props.bg}
    >
      <Container>
        <h1>{props.header}</h1>
        <Avatar>
          <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/18951501_10203096811459409_400331603628819510_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=Jw9qpGIiSDkAX83LVoT&_nc_ht=scontent-lax3-2.xx&oh=70bc074e1fcd5c6e6bff3b8185858e36&oe=5FF77F16" alt />
          <small>
            <b>{t("author")}</b>
            <br /> <span>{moment(date).format("MMMM D, YYYY")}</span>
          </small>
          
        </Avatar>
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
  padding:35px 0;
  display:flex;
  font-family: Noto Sans JP; 
  text-shadow: 0 0 0.5em ${props => props.theme.palette.common.contrastBg};
  color: ${props => props.theme.palette.common.contrastText};
  h1{
    padding:0;
    font-weight:600;
  }
`

const Container = styled.div`
  max-width:880px;
  width:100%;
  margin: 0 auto;
  ${breakpoint.xs} {
    margin:0 10px;
  }
  ${breakpoint.sm} {
    margin:0 10px;
  }
`

const Avatar = styled.div`
  margin-top:32px;
  display:flex;
  height:32px;
  img{
    border-radius:50%;
    max-width:32px;
  }
  small{
    margin:0 0 0 10px;
    line-height: 1.3em;
  }
  span{
    font-weight:100;
    text-transform: capitalize;
  } 
`

const Extended = withTranslation('common')(Hero)
export {Extended as DefaultHero}