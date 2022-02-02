import '../styles/globals.css';
import {ThemeProvider, createTheme} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6165F7',
    },
    secondary: {
      main: '#1B0E51',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
