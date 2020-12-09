import React from "react"
import styled from "styled-components"
import {breakpoint} from '@Definitions/Styled'
import { withTranslation } from "../../../i18n"
import { I18nContext } from 'next-i18next'
import {Button, Dropdown} from "react-bootstrap"
import {Github} from "@styled-icons/fa-brands/Github"
import {useRouter} from "next/router"


const NavigationBar = (props) => {

  const { i18n: { language } } = React.useContext(I18nContext)
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
      <HalfNav justify="flex-end">
        <GithubButton
          variant="outline-primary"
        >
          <Github size="22" style={{marginRight: 7}} />
          GitHub
        </GithubButton>
        <Dropdown>
          <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
            {t("change-language")} : {language.toUpperCase()}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </HalfNav>
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
  background-color: rgb(0,0,0,0.8);
  ${breakpoint.xs} {
    padding: 0 10px;
  }
  ${breakpoint.sm} {
    padding: 0 10px;
  }
`

const HalfNav = styled.div`
  width:40%;
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
  display:flex;
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



const Extended = withTranslation('common')(NavigationBar)
export {Extended as TopNav}