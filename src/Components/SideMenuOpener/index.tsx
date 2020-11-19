// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Bar } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ISideMenuOpener } from "./SideMenuOpener";
// #endregion Interface Imports

export const SideMenuOpener: React.FunctionComponent<
    ISideMenuOpener.IProps
> = (props: ISideMenuOpener.IProps) => {

  const isOpen = props.isOpen
    return (
        <Container isOpen={isOpen} onClick={() => props.onOpen(!isOpen)}>
          <Bar half start={1} isOpen={isOpen} />
          <Bar isOpen={isOpen} />
          <Bar half end={1} isOpen={isOpen} />
        </Container>
    );
};

