import * as React from "react";

import { LayoutProps } from "./Layout";
import { SideMenu, SideMenuOpener, TopNav } from "@Components"
import {Dimmer, ThemedGlobal} from "./styled"
import { ThemeProvider } from 'styled-components'
import {light, dark} from '@Definitions/Styled'

const Layout: React.FunctionComponent<LayoutProps> = ({
		children,
}): JSX.Element => {

	const [isDark, setIsDark] = React.useState(false)
	const [isOpen, setIsOpen] = React.useState(false)
	const [theme, setTheme] = React.useState(!isDark ? light : dark)

	React.useEffect(() => {
		if(typeof window !== "undefined"){
			const localDark = window.localStorage.getItem("isDark") === "true"
			const schemaIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			if(localDark){
				setIsDark(true)
				setTheme(dark)
			}
			else if(!schemaIsDark) window.localStorage.setItem("isDark", "false")
			else if(schemaIsDark && !window.localStorage.getItem("isDark")){
				setIsDark(true)
				setTheme(dark)
				window.localStorage.setItem("isDark", "true")
			}
		}
	}, [])

	const toggleTheme = () => {
		if(!isDark) {
			setTheme(dark)
			setIsDark(true)
			window.localStorage.setItem("isDark", "true")
		}
		else {
			setTheme(light)
			setIsDark(false)
			window.localStorage.setItem("isDark", "false")
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<ThemedGlobal />
			<SideMenu isOpen={isOpen} toggleTheme={toggleTheme} isDark={isDark} />
			<SideMenuOpener isOpen={isOpen} onOpen={setIsOpen} />
			<Dimmer isOpen={isOpen} onClick={() => (setIsOpen(false))} />
			<TopNav />
			{children}
		</ThemeProvider>
	)
};

export { Layout };
