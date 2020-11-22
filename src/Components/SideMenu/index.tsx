// #region Global Imports
import React from "react";
//import {firebase} from "@Services/Firebase"
//import {useQuery} from 'react-query'
import { I18nContext } from 'next-i18next'
import { i18n, withTranslation } from "../../../i18n"
//import {withTranslation} from "../"
// #endregion Global Imports

// #region Local Imports
import { Container, Header, MenuContainer, DefaultChangerContainer } from "./styled";
import ListGroup from 'react-bootstrap/ListGroup'
import {CustomButton as Button} from '@Commons'
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
> = ({t, i18n, isOpen, toggleTheme, isDark}) => {

  /*const { isLoading, error, data } = useQuery('menuItems', () => {
    return firebase
    .firestore()
    .collection("menu")
    .get()
    .then((snap) => {
      return snap.data()
    })
  }, {staleTime: Infinity}) */
  //changed node_modules/react-query/types/core/types.d.ts to | "Infinity"
  const { i18n: { language } } = React.useContext(I18nContext)

  return (
    <Container isOpen={isOpen}>
      <Header>
        <h5 className="logo-text">ROS Bebop Research</h5>
        <small className="logo-text">By: {t("common:author")}</small>
      </Header>
      <MenuContainer>
        <ListGroup as='ul'>
          <ListGroup.Item >oiolá</ListGroup.Item>
          
        </ListGroup>
      </MenuContainer>
      <DefaultChangerContainer>
        <Button
          onClick={toggleTheme}
          style={{color: "yellow"}}
          size="sm"
          variant="secondary"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
        <Globe style={{margin: "4px 7px 3px 10px"}} size={18} title={t("common:change-language")} />
        <small style={{flexGrow:1}}>
          {" "} 
          {t("common:language")}
        </small>{" "}
        <ButtonGroup size="sm">
          <Button 
            onClick={() => i18n.changeLanguage("pt")} 
            disabled={language==="pt"} 
            variant="secondary"
          >
            <Flag flag="br" width={23} />
          </Button>
          <Button 
            onClick={() => i18n.changeLanguage("jp")} 
            disabled={language==="jp"} 
            variant="secondary"
          >
            <Flag flag="jp" width={23} />
          </Button>
          <Button 
            onClick={() => i18n.changeLanguage("en")} 
            disabled={language==="en"} 
            variant="secondary"
          >
            <Flag flag="en" width={23} />
          </Button>
        </ButtonGroup>
      </DefaultChangerContainer>
    </Container>
  );
};
const SideMenu = withTranslation(['menu', 'common'])(Comp)
export {SideMenu}