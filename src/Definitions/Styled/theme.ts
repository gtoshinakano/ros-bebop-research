// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports

const light: DefaultTheme = {
    borderRadius: '4px',
    backgroundColor: "#fafafa",
    palette: {
      common: {
        color: '#575757',
        white: '#ffffff'
      },
      primary: {
        main: '#1675e0',
        contrastText: '#ffffff',
        hover: '#1675e0',
      },
      secondary: {
        main: '#709fb0',
        contrastText: '#ffffff'
      },
      sideMenu: {
        backgroundColor: '#f4f5f7'
      }
    }
};

const dark: DefaultTheme = {
    borderRadius: '4px',
    backgroundColor: "#16181A",
    palette: {
      common: {
        color: '#ffffff',
        white: '#222831'
      },
      primary: {
        main: '#aaa',
        contrastText: '#fff',
        hover: '#999',
      },
      secondary: {
        main: '#ffffff',
        contrastText: '#008cba'
      },
      sideMenu: {
        backgroundColor: '#272A2E'
      }
    }
};

export { light, dark };
