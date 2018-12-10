import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#476353',
      main: '#1e392a',
      dark: '#001400',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#b1afb0',
      main: '#828081',
      dark: '#565455',
      contrastText: '#000000',
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