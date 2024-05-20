import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    colors: {
        background: '#fffbfb',
        lightBackground: '#64b4ff',
        darkGrey: '#939393',
        lightBlue: '#003888',
        button: '#64b4ff',
        disabledButton: '#939393',
    },
    text: {
        primary: '#1e1a1a',
        secondary: 'white',
    },
    fields: {
        background: '#ffffff',
    },
    alerts: {
        success: '#92ff92',
        error: '#ff6161',
    },
});

export default lightTheme;