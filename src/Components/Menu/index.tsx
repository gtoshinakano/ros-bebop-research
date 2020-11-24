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
					<Item header={1}>{t("research")}</Item>
					<Item action>{t("introduction")}</Item>
					<Item header={1}>{t("content")}</Item>
					<Item action>{t("about-bebop")}</Item>
					<Item action>{t("about-ros")}</Item>
					<Item action>{t("ros-bebop")}</Item>
					<Item header={1}>{t("guide")}</Item>
					<Item action>{t("requirements")}</Item>
					<Item action>{t("getting-started")}</Item>	
					<Item action>{t("takeoff-land")}</Item>
					<Item action>{t("controlling")}</Item>	
					<Item action>{t("reading")}</Item>
					<Item action>{t("bebop-gps")}</Item>
					<Item action>{t("mission")}</Item>
					<Item action>{t("precautions")}</Item>	
					<Item action>{t("getting-started")}</Item>	
					<Item header={1}>{t("try-node")}</Item>	
					<Item action>{t("node-bebop")}</Item>
					<Item action>{t("packing-up")}</Item>
					<Item action>{t("about")}</Item>

								

				</Container>
		);
};

const Menu = withTranslation('menu')(Comp)
export {Menu}