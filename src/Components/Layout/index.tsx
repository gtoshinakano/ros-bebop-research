import * as React from "react";

import { LayoutProps } from "./Layout";
import { SideMenu, SideMenuOpener } from "@Components"
import {Dimmer} from "./styled"
import { ThemeProvider } from 'styled-components'
import {light, dark} from '@Definitions/Styled'
import {Button} from "@Commons"
const Layout: React.FunctionComponent<LayoutProps> = ({
		children,
}): JSX.Element => {

	const [isOpen, setIsOpen] = React.useState(true)
	const [theme, setTheme] = React.useState(light)

	const toggleTheme = () => {
		if(theme === light) setTheme(dark)
		else setTheme(light)
	}

	return (
		<ThemeProvider theme={theme}>
			<SideMenu isOpen={isOpen} />
			<SideMenuOpener isOpen={isOpen} onOpen={setIsOpen} />
			<Dimmer isOpen={isOpen} onClick={() => (setIsOpen(false))} />
			{children}
		</ThemeProvider>
	)
};

export { Layout };
