import {createTheme} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    //mode: 'dark',
    primary: {
      main: '#3f51b5',
      light: '#55aaff',
      dark: '#1f1f47',
      contrastText: '#ffffff',
    },
    pink: {
      main: '#fdb3ed',
      light: '#ffe0f9',
      dark: '#4c1b50',
      contrastText: '#2c2a2a',
    }
  },
  colors: {
    background: '#0e1e32',
    lightBackground: '#1f1f47',
    darkGrey: '#939393',
    lightBlue: '#55aaff',
    button: '#3f51b5',
    disabledButton: '#939393',
    blackText: '#2c2a2a',
    audioPlayer: '#f2f3f3',
    white: '#eaeaea',
  },
  text: {
    primary: 'white',
    light: '#eaeaea',
    secondary: '#1e1a1a',
  },
  fields: {
    background: '#eaeaea',
  },
  alerts: {
    success: '#92ff92',
    error: '#ff6161',
  },
  padding: {
    box: '2rem',
  },
});

export default darkTheme;