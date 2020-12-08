// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports

const light: DefaultTheme = {
    borderRadius: '4px',
    backgroundColor: "#fafafa",
    palette: {
      common: {
        color: '#292929',
        white: '#ffffff',
        contrastText: '#fff',
        contrastBg: '#333'
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
      },
      markdown: {
        blockquote:{
          backgroundColor: "#f1f2f4",
          color: "#333",
          borderLeft: "0.8em #ccc solid"
        }
      }
    }
};

const dark: DefaultTheme = {
    borderRadius: '4px',
    backgroundColor: "#16181A",
    palette: {
      common: {
        color: '#ffffff',
        white: '#222831',
        contrastText: '#fff',
        contrastBg: '#333'
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
      },
      markdown: {
        blockquote:{
          backgroundColor: "#202329",
          color: "#9aa6bc",
          borderLeft: "0.8em #383a3f solid"
        }
      }
    }
};

export { light, dark };
