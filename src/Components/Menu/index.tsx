// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Item } from "./styled";
import { withTranslation } from "../../../i18n"
import Link from 'next/link'
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
					<Item action active disabled>
						<Link href="/">{t("home")}</Link>
					</Item>
					<Item header={1}>{t("content")}</Item>
					<Item action>
						<Link href="">{t("about-bebop")}</Link>
					</Item>
					<Item action>
						<Link href="">{t("about-ros")}</Link>
					</Item>
					<Item action>
						<Link href="">{t("ros-bebop")}</Link>
					</Item>
					<Item header={1}>{t("guide")}</Item>
					<Item action>
						<Link href="">{t("installation")}</Link>
						</Item>
					<Item action>
						<Link href="">{t("controlling")}</Link>
						</Item>	
					<Item action>
						<Link href="">{t("reading")}</Link>
					</Item>
					<Item action>
						<Link href="">{t("bebop-gps")}</Link>
					</Item>
					<Item action>
						<Link href="">{t("precautions")}</Link>
					</Item>		
					<Item header={1}>{t("try-node")}</Item>	
					<Item action>
						<Link href="">{t("node-bebop")}</Link>
					</Item>
					<Item action>
						<Link href="">{t("web-service")}</Link>
					</Item>
					<Item action>
						<Link href="">{t("about")}</Link>
					</Item>
				</Container>
		);
};

const Menu = withTranslation('menu')(Comp)
export {Menu}