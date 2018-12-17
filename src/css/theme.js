import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#f27573',
      main: '#ef5350',
      dark: '#a73a38',
      contrastText: '#ffffff',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'Abel',
    ].join(','),
    useNextVariants: true,
    quote: {
      color: '#ffffff'
    }
  },
});

export default theme;