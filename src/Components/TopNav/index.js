import React from "react"
import styled from "styled-components"
import {breakpoint} from '@Definitions/Styled'
import { withTranslation } from "../../../i18n"
import { I18nContext } from 'next-i18next'
import moment from 'moment'
import {Button, Dropdown} from "react-bootstrap"
import {Flag} from '@Commons'
import {Github} from "@styled-icons/fa-brands/Github"
import {useRouter} from "next/router"
import Link from "next/link"


const NavigationBar = (props) => {

  const { i18n: { language } } = React.useContext(I18nContext)
  const {t, i18n} = props
  const router = useRouter()

  const changeLanguage = (eventKey) => {
    i18n.changeLanguage(eventKey)
    moment.locale(eventKey)
  }

  return(
    <Container>
      <HalfNav>
        <Avatar>
          <img src="https://images.assetsdelivery.com/compings_v2/keltmd/keltmd1803/keltmd180300364.jpg" />
          <Link href='/'>
            <Anchor href="#">My Exchange Research <span> in Hokkaido 2020</span></Anchor>
          </Link>
        </Avatar>
      </HalfNav>
      <HalfNav justify="flex-end">
        <GithubButton
          variant="outline-primary"
        >
          <a href="https://github.com/gtoshinakano/ros-bebop-research"
          target="_blank"><Github size="22" style={{marginRight: 7}} />
          GitHub</a>
        </GithubButton>
        <Dropdown drop="down">
          <DropToggle 
            variant="outline-warning"
          >
            <Flag flag={language} width={25}/>
          </DropToggle>

          <DropMenu align="right">
            <Item disabled={language === "pt"} onSelect={changeLanguage} eventKey="pt"><Flag flag={"pt"} width={25}/> {t("lang-pt")}</Item>
            <Item disabled={language === "jp"} onSelect={changeLanguage} eventKey="jp"><Flag flag={"jp"} width={25}/> {t("lang-jp")}</Item>
            <Item disabled={language === "en"} onSelect={changeLanguage} eventKey="en"><Flag flag={"en"} width={25}/> {t("lang-en")}</Item>
          </DropMenu>
        </Dropdown>
      </HalfNav>
    </Container>   
  )
}

const Container = styled.nav`
  width:100%;
  font-family: Muli;
  display:flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  padding: 21px 64px;
  background-color: #10141A;
  ${breakpoint.xs} {
    padding: 0 10px;
  }
  ${breakpoint.sm} {
    padding: 0 10px;
  }
`

const HalfNav = styled.div`
  width:48%;
  margin: 10px 0;
  height:100%;
  color: ${props => props.theme.palette.common.contrastText}; 
  display:flex;
  align-items: center;
  justify-content: ${props => props.justify};
  ${breakpoint.xs} {
    width:100%;
  }
  ${breakpoint.sm} {
    width:100%;
  }
`

const Avatar = styled.div`
  display: inline-flex;
  align-items: center;
  img{
    border-radius:50%;
    max-width:40px;
    max-height:40px;
    margin-right: 1vw;
  }
  span{
    color: ${props => props.theme.palette.primary.main}
  } 
`

const GithubButton = styled(Button)`
  padding: 7px 10px;
  margin:0 14px 0 0;
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-radius:0.21em; 
`

const DropToggle = styled(Dropdown.Toggle)`
  padding:4px 10px;

`

const DropMenu = styled(Dropdown.Menu)`
  padding: 0;
  background-color: #272D36;
  
`

const Item = styled(Dropdown.Item)`
  color: white;
`

const Anchor = styled.a`
  color: inherit;
  :hover{
    color:inherit;
    text-decoration: none;
  }
`



const Extended = withTranslation('common')(NavigationBar)
export {Extended as TopNav}