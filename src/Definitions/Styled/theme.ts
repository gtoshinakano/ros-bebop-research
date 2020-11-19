// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports

const light: DefaultTheme = {
    borderRadius: '4px',
    palette: {
      common: {
        black: '#222831',
        white: '#ffffff'
      },
      primary: {
        main: '#726a95',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#709fb0',
        contrastText: '#ffffff'
      }
    }
};

const dark: DefaultTheme = {
    borderRadius: '4px',
    palette: {
      common: {
        black: '#ffffff',
        white: '#222831'
      },
      primary: {
        main: 'ffffff',
        contrastText: '#726a95'
      },
      secondary: {
        main: '#ffffff',
        contrastText: '#709fb0'
      }
    }
};

export { light, dark };
