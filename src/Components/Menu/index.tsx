// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Item } from "./styled";
import { withTranslation } from "../../../i18n"
import { useRouter } from 'next/router'
// #endregion Local Imports

// #region Interface Imports
import { IMenu } from "./Menu";
// #endregion Interface Imports

const Comp: React.FunctionComponent<
		IMenu.IProps
> = ({t, i18n, onSelected}) => {

	const router = useRouter()
	const path = router.pathname

	const goTo = ({target}) => {
		router.push(target.value)
		onSelected()
	}

	return (
		<Container>
			<Item header={1}>{t("research")}</Item>
			<Item value="/" onClick={goTo} action active={path==="/"} disabled={path==="/"}>
				{t("home")}
			</Item>
			<Item header={1}>{t("content")}</Item>
			<Item value="/posts/about-bebop" onClick={goTo} action active={path==="/posts/about-bebop"} disabled={path==="/posts/about-bebop"}>
				{t("about-bebop")}
			</Item>
			<Item value="/posts/about-ros" onClick={goTo} action active={path==="/posts/about-ros"} disabled={path==="/posts/about-ros"}>
				{t("about-ros")}
			</Item>
			<Item value="/posts/" onClick={goTo} action active={path===""} disabled={path===""}>
				{t("ros-bebop")}
			</Item>
			<Item header={1}>{t("guide")}</Item>
			<Item value="/posts/" onClick={goTo} action active={path===""} disabled={path===""}>
				{t("installation")}
				</Item>
			<Item value="/posts/" onClick={goTo} action active={path===""} disabled={path===""}>
				{t("controlling")}
				</Item>	
			<Item value="/posts/" onClick={goTo} action active={path===""} disabled={path===""}>
				{t("reading")}
			</Item>
			<Item value="/posts/" onClick={goTo} action active={path===""} disabled={path===""}>
				{t("bebop-gps")}
			</Item>
			<Item value="/posts/" onClick={goTo} action active={path===""} disabled={path===""}>
				{t("precautions")}
			</Item>		
			<Item header={1}>{t("try-node")}</Item>	
			<Item value="/posts/" onClick={goTo}  action active={path===""} disabled={path===""}>
				{t("node-bebop")}
			</Item>
			<Item value="/posts/" onClick={goTo} action active={path===""} disabled={path===""}>
				{t("web-service")}
			</Item>
			<Item value="/posts/" onClick={goTo} action active={path===""} disabled={path===""}>
				{t("about")}
			</Item>
		</Container>
	);
};

const Menu = withTranslation('menu')(Comp)
export {Menu}