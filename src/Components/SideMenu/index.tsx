// #region Global Imports
import React from "react";
//import {firebase} from "@Services/Firebase"
//import {useQuery} from 'react-query'
import { I18nContext } from 'next-i18next'
import { i18n, withTranslation } from "../../../i18n"
//import {withTranslation} from "../"
// #endregion Global Imports

// #region Local Imports
import { Container, Header, MenuContainer, LangContainer } from "./styled";
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {Flag} from '@Commons'
import {Globe} from '@styled-icons/entypo/Globe'
// #endregion Local Imports

// #region Interface Imports
import { ISideMenu } from "./SideMenu";
// #endregion Interface Imports

const Comp: React.FunctionComponent<
  ISideMenu.IProps
> = ({t, i18n, isOpen}) => {

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
          <ListGroup.Item >oioi </ListGroup.Item>
          
        </ListGroup>
      </MenuContainer>
      <LangContainer>
        <small>
          <Globe size={18} title={t("common:change-language")} />{" "} 
          {t("common:language")}
        </small>{" "}
        <ButtonGroup size="sm">
          <Button onClick={() => i18n.changeLanguage("pt")} disabled={language==="pt"} variant="secondary">
            <Flag flag="br" width={25} />
          </Button>
          <Button onClick={() => i18n.changeLanguage("en")} disabled={language==="en"} variant="secondary">
            <Flag flag="en" width={25} />
          </Button>
          <Button onClick={() => i18n.changeLanguage("jp")} disabled={language==="jp"} variant="secondary">
            <Flag flag="jp" width={25} />
          </Button>
        </ButtonGroup>
      </LangContainer>
    </Container>
  );
};
const SideMenu = withTranslation(['menu', 'common'])(Comp)
export {SideMenu}