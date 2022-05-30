import '../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { MenuBar } from '../components/menu';
import { SnackbarProvider } from 'notistack';

const { getStorageValue } = require('../lib/db/storage');

const theme = createTheme({
  palette: {
    primary: {
      main: '#86AEFF',
    },
    secondary: {
      main: '#1B0E51',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MenuBar user={getStorageValue('name', 'Usuário')} />
      <SnackbarProvider maxSnack={5}>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
