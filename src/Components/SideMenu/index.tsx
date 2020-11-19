// #region Global Imports
import React from "react";
//import {firebase} from "@Services/Firebase"
//import {useQuery} from 'react-query'
import { withTranslation } from "../../../i18n"
//import {withTranslation} from "../"
// #endregion Global Imports

// #region Local Imports
import { Container, Header, MenuContainer } from "./styled";
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {Flag} from '@Commons'
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
      <ButtonGroup style={{margin:7}}>
        <Button variant="secondary"><Flag flag="br" /> pt-br</Button>
        <Button variant="secondary"><Flag flag="en" /> en</Button>
        <Button variant="secondary"><Flag flag="jp" /> jp</Button>
      </ButtonGroup>
    </Container>
  );
};
const SideMenu = withTranslation(['menu', 'common'])(Comp)
export {SideMenu}