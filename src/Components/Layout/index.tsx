import * as React from "react";

import { LayoutProps } from "./Layout";
import { SideMenu, SideMenuOpener } from "@Components"
import {Dimmer, ThemedGlobal} from "./styled"
import { ThemeProvider } from 'styled-components'
import {light, dark} from '@Definitions/Styled'

const Layout: React.FunctionComponent<LayoutProps> = ({
		children,
}): JSX.Element => {

	const [isDark, setIsDark] = React.useState(typeof window !== "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches)
	const [isOpen, setIsOpen] = React.useState(true)
	const [theme, setTheme] = React.useState(!isDark ? light : dark)

	const toggleTheme = () => {
		if(!isDark) {
			setTheme(dark)
			setIsDark(true)
		}
		else {
			setTheme(light)
			setIsDark(false)
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<ThemedGlobal />
			<SideMenu isOpen={isOpen} toggleTheme={toggleTheme} isDark={isDark} />
			<SideMenuOpener isOpen={isOpen} onOpen={setIsOpen} />
			<Dimmer isOpen={isOpen} onClick={() => (setIsOpen(false))} />
			{children}
		</ThemeProvider>
	)
};

export { Layout };
