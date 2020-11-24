// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Item } from "./styled";
import { withTranslation } from "../../../i18n"
// #endregion Local Imports

// #region Interface Imports
import { IMenu } from "./Menu";
// #endregion Interface Imports

const Comp: React.FunctionComponent<
		IMenu.IProps
> = ({t, i18n}) => {

		return (
				<Container>
					<Item header={1}>{t("the-research")}</Item>
					<Item action>{t("introduction")}</Item>
					<Item header={1}>{t("content")}</Item>
					<Item action>{t("about-bebop")}</Item>
					<Item action>{t("about-ros")}</Item>
					<Item action>{t("ros-bebop")}</Item>
					<Item header={1}>{t("guide")}</Item>
					<Item action>{t("requirements")}</Item>
					<Item action>{t("getting-started")}</Item>	


				</Container>
		);
};

const Menu = withTranslation('menu')(Comp)
export {Menu}