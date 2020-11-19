import * as React from "react";

import { LayoutProps } from "./Layout";
import { SideMenu, SideMenuOpener } from "@Components"
import {Dimmer} from "./styled"

const Layout: React.FunctionComponent<LayoutProps> = ({
		children,
}): JSX.Element => {

	const [isOpen, setIsOpen] = React.useState(true)
	return (
		<div className="layout">
			<SideMenu isOpen={isOpen} />
			<SideMenuOpener isOpen={isOpen} onOpen={setIsOpen} />
			<Dimmer isOpen={isOpen} onClick={() => (setIsOpen(false))} />
			{children}
		</div>
	)
};

export { Layout };
