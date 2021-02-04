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
	const {pathname, asPath} = router

	const goTo = ({target}) => {
		router.push(target.value)
		onSelected()
	}

	return (
		<Container>
			<Item header={1}>{t("research")}</Item>
			<Item value="/" onClick={goTo} action active={pathname==="/"} disabled={pathname==="/"}>
				{t("home")}
			</Item>
			<Item header={1}>{t("context")}</Item>
			<Item value="/posts/about-bebop" onClick={goTo} action active={pathname==="/posts/about-bebop"} disabled={pathname==="/posts/about-bebop"}>
				{t("about-bebop")}
			</Item>
			<Item value="/posts/about-ros" onClick={goTo} action active={pathname==="/posts/about-ros/[[...slug]]"} disabled={pathname==="/posts/about-ros/[[...slug]]"}>
				{t("about-ros")}
			</Item>
			<Item header={1}>{t("content")}</Item>
			<Item value="/posts/research/introduction" onClick={goTo} action active={asPath==="/posts/research/introduction"} disabled={asPath==="/posts/research/introduction"}>
				{t("main-goal")}
			</Item>	
			<Item value="/posts/research/installation" onClick={goTo} action active={asPath==="/posts/research/installation"} disabled={asPath==="/posts/research/installation"}>
				{t("installation")}
				</Item>
			<Item value="/posts/research/controlling-bebop" onClick={goTo} action active={asPath==="/posts/research/controlling-bebop"} disabled={asPath==="/posts/research/controlling-bebop"}>
				{t("controlling")}
				</Item>	
			<Item value="/posts/research/reading-from-bebop" onClick={goTo} action active={asPath==="/posts/research/reading-from-bebop"} disabled={asPath==="/posts/research/reading-from-bebop"}>
				{t("reading")}
			</Item>
			{/*<Item value="/posts/research/bebop-gps" onClick={goTo} action active={asPath==="/posts/research/bebop-gps"} disabled={asPath==="/posts/research/bebop-gps"}>
				{t("bebop-gps")}
			</Item>	
			<Item header={1}>{t("try-node")}</Item>	
			<Item value="/posts/" onClick={goTo}  action active={pathname===""} disabled={pathname===""}>
				{t("node-bebop")}
			</Item>
			<Item value="/posts/" onClick={goTo} action active={pathname===""} disabled={pathname===""}>
				{t("web-service")}
			</Item>
			<Item value="/posts/" onClick={goTo} action active={pathname===""} disabled={pathname===""}>
				{t("about")}
			</Item>*/}
		</Container>
	);
};

const Menu = withTranslation('menu')(Comp)
export {Menu}