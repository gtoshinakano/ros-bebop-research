// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Item } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IMenu } from "./Menu";
// #endregion Interface Imports

export const Menu: React.FunctionComponent<
		IMenu.IProps
> = (props: IMenu.IProps) => {

		return (
				<Container>
					<Item header>Home</Item>
				</Container>
		);
};

