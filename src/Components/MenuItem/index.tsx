// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IMenuItem } from "./MenuItem";
// #endregion Interface Imports

export const MenuItem: React.FunctionComponent<
		IMenuItem.IProps
> = (props: IMenuItem.IProps) => {

		return (
				<Container>
						MenuItem Page
				</Container>
		);
};

