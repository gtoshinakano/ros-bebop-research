// #region Global Imports
import React from "react";
//import {firebase} from "@Services/Firebase"
//import {useQuery} from 'react-query'
import { I18nContext } from 'next-i18next'
import { withTranslation } from "../../../i18n"
import moment from "moment"
//import {withTranslation} from "../"
// #endregion Global Imports

// #region Local Imports
import { Container, Header, MenuContainer, DefaultChangerContainer } from "./styled";
import ListGroup from 'react-bootstrap/ListGroup'
import {CustomButton as Button} from '@Commons'
import {Menu} from "@Components"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {Flag} from '@Commons'
import {Globe} from '@styled-icons/entypo/Globe'
import {Sun} from '@styled-icons/feather/Sun'
import {Moon} from '@styled-icons/feather/Moon'

// #endregion Local Imports

// #region Interface Imports
import { ISideMenu } from "./SideMenu";
// #endregion Interface Imports

const Comp: React.FunctionComponent<
  ISideMenu.IProps
> = ({t, i18n, isOpen, toggleTheme, isDark, onSelect}) => {

  const { i18n: { language } } = React.useContext(I18nContext)

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    moment.locale(lang)
    onSelect()
  }

  return (
    <Container isOpen={isOpen}>
      <Header>
        <h5 className="logo-text">ROS Bebop Research</h5>
        <small className="logo-text">By: {t("common:author")}</small>
      </Header>
      <MenuContainer>
        <Menu onSelected={onSelect} />
      </MenuContainer>
      <DefaultChangerContainer>
        <Button
          onClick={toggleTheme}
          style={{color: "yellow"}}
          size="sm"
          variant="secondary"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
        <Globe style={{margin: "4px 7px 3px 5px"}} size={18} title={t("common:change-language")} />
        <small style={{flexGrow:1}}>
          {" "} 
          {t("common:language")}
          {" "}
        </small>
        <ButtonGroup size="sm">
          <Button 
            onClick={() => changeLanguage("pt")} 
            disabled={language==="pt"} 
            variant="secondary"
          >
            <Flag flag="br" width={22} />
          </Button>
          <Button 
            onClick={() => changeLanguage("jp")} 
            disabled={language==="jp"} 
            variant="secondary"
          >
            <Flag flag="jp" width={22} />
          </Button>
          <Button 
            onClick={() => changeLanguage("en")} 
            disabled={language==="en"} 
            variant="secondary"
          >
            <Flag flag="en" width={22} />
          </Button>
        </ButtonGroup>
      </DefaultChangerContainer>
    </Container>
  );
};
const SideMenu = withTranslation(['common'])(Comp)
export {SideMenu}