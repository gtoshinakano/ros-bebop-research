// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports

const light: DefaultTheme = {
    name: "light",
    borderRadius: '4px',
    backgroundColor: "#fafafa",
    palette: {
      common: {
        color: '#292929',
        white: '#ffffff',
        contrastText: '#fff',
        contrastBg: '#333',
        darkerText: '#999'
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
      },
      summary: {
        backgroundColor: "#f4f1f2",
        color: "#757575",
        border: "#c4c1c2"
      }
    }
};

const dark: DefaultTheme = {
    name: "dark",
    borderRadius: '4px',
    backgroundColor: "#16181A",
    palette: {
      common: {
        color: '#ffffff',
        white: '#222831',
        contrastText: '#fff',
        contrastBg: '#333',
        darkerText: '#999'
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
      },
      summary: {
        backgroundColor: "#202329",
        color: "#b5b5b5",
        border: "#343132"
      }
    }
};

export { light, dark };
