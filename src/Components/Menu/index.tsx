// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Item } from "./styled";
import { withTranslation } from "../../../i18n"
import Link from 'next/link'
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

	return (
		<Container>
			<Item header={1}>{t("research")}</Item>
			<Item onClick={onSelected} action active={path==="/"} disabled={path==="/"}>
				<Link href="/">{t("home")}</Link>
			</Item>
			<Item header={1}>{t("content")}</Item>
			<Item onClick={onSelected} action active={path==="/posts/about-bebop"} disabled={path==="/posts/about-bebop"}>
				<Link href="/posts/about-bebop">{t("about-bebop")}</Link>
			</Item>
			<Item onClick={onSelected} action active={path===""} disabled={path===""}>
				<Link href="">{t("about-ros")}</Link>
			</Item>
			<Item onClick={onSelected} action active={path===""} disabled={path===""}>
				<Link href="">{t("ros-bebop")}</Link>
			</Item>
			<Item header={1}>{t("guide")}</Item>
			<Item onClick={onSelected} action active={path===""} disabled={path===""}>
				<Link href="">{t("installation")}</Link>
				</Item>
			<Item onClick={onSelected} action active={path===""} disabled={path===""}>
				<Link href="">{t("controlling")}</Link>
				</Item>	
			<Item onClick={onSelected} action active={path===""} disabled={path===""}>
				<Link href="">{t("reading")}</Link>
			</Item>
			<Item onClick={onSelected} action active={path===""} disabled={path===""}>
				<Link href="">{t("bebop-gps")}</Link>
			</Item>
			<Item onClick={onSelected} action active={path===""} disabled={path===""}>
				<Link href="">{t("precautions")}</Link>
			</Item>		
			<Item header={1}>{t("try-node")}</Item>	
			<Item onClick={onSelected}  action active={path===""} disabled={path===""}>
				<Link href="">{t("node-bebop")}</Link>
			</Item>
			<Item onClick={onSelected} action active={path===""} disabled={path===""}>
				<Link href="">{t("web-service")}</Link>
			</Item>
			<Item onClick={onSelected} action active={path===""} disabled={path===""}>
				<Link href="">{t("about")}</Link>
			</Item>
		</Container>
	);
};

const Menu = withTranslation('menu')(Comp)
export {Menu}