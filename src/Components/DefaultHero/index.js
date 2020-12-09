import {useRef, useEffect} from "react"
import gsap from "gsap"
import styled from "styled-components"
import {breakpoint} from '@Definitions/Styled'
import { withTranslation } from "../../../i18n"
import {Button} from "react-bootstrap"
import {FileUser} from "@styled-icons/remix-line/FileUser"
import {Email} from "@styled-icons/entypo/Email"
import moment from "moment"
import {useRouter} from "next/router"

const Hero = (props) => {

  const {t, date} = props
  const router = useRouter()

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
          <AvatarButton 
            variant="outline-secondary"
            onClick={() => router.push("/about")}
          >
            <FileUser size="21" />
            <small><span>Profile</span></small>
          </AvatarButton>
          <AvatarButton 
            as="a" 
            variant="link"
            href="mailto:gtoshinakano@gmail.com"
          >
            <Email size="19" />
            <small>let's talk!</small>
          </AvatarButton>
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
  align-items:center;
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
  img{
    border-radius:50%;
    max-width:32px;
    max-height:32px;
  }
  small{
    margin:0 4px 0 8px;
    line-height: 1.3em;
  }
  span{
    font-weight:100;
    text-transform: capitalize;
  } 
`

const AvatarButton = styled(Button)`
  padding:1px 2px 0 4px;
  margin:0 0 0 6px;
  display:flex;
  align-items:center;
  border-radius:0.21em; 
  max-height:30px;
  ${breakpoint.xs} {
    margin:0;
  }
  ${breakpoint.sm} {
    margin:0;
  }
`

const Extended = withTranslation('common')(Hero)
export {Extended as DefaultHero}