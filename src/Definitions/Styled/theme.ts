// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports

const light: DefaultTheme = {
    borderRadius: '4px',
    backgroundColor: "#fafafa",
    palette: {
      common: {
        color: '#292929',
        white: '#ffffff'
      },
      primary: {
        main: '#188CBA',
        contrastText: '#ffffff',
        hover: '#188CBA',
      },
      secondary: {
        main: '#709fb0',
        contrastText: '#ffffff'
      },
      sideMenu: {
        backgroundColor: '#f4f5f7',
        languageBar: '#2c2c32'
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
        main: '#999',
        contrastText: '#fff',
        hover: '#888',
      },
      secondary: {
        main: '#ffffff',
        contrastText: '#008cba'
      },
      sideMenu: {
        backgroundColor: '#272A2E',
        languageBar: '#25252b'
      }
    }
};

export { light, dark };
