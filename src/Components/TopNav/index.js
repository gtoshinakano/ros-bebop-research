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

const NavigationBar = (props) => {

  const {t, date} = props
  const router = useRouter()

  return(
    <Container>
      <HalfNav>
        <Avatar>
          <img src="https://images.assetsdelivery.com/compings_v2/keltmd/keltmd1803/keltmd180300364.jpg" />
          My Exchange Research
          <span style={{marginLeft: 5}}> in Hokkaido 2020</span>
        </Avatar>
      </HalfNav>
      <HalfNav>Titulo muito foda 2</HalfNav>
    </Container>   
  )
}

const Container = styled.nav`
  width:100%;
  margin: 0 0 3vh;
  font-family: Muli;
  display:flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  padding: 28px 64px;
  background-color: rgb(0,0,0,0.6);
  ${breakpoint.xs} {
    padding: 0 10px;
  }
  ${breakpoint.sm} {
    padding: 0 10px;
  }
`

const HalfNav = styled.div`
  min-width:340px;
  margin: 10px 0;
  height:100%;
  color: ${props => props.theme.palette.common.contrastText}; 
`

const Avatar = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  img{
    border-radius:50%;
    max-width:40px;
    max-height:40px;
    margin-right: 1vw;
  }
  small{
    margin:0 4px 0 8px;
    line-height: 1.3em;
  }
  span{
    color: ${props => props.theme.palette.primary.main}
  } 
`

const AvatarButton = styled(Button)`
  padding:1px 2px 0 4px;
  margin:0 0 0 8px;
  display:flex;
  align-items:center;
  border-radius:0.21em; 
  max-height:30px;
  text-shadow: 0 0 0.5em ${props => props.theme.palette.common.contrastBg};
  ${breakpoint.xs} {
    margin:0;
  }
  ${breakpoint.sm} {
    margin:0;
  }
`

const Extended = withTranslation('common')(NavigationBar)
export {Extended as TopNav}