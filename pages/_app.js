import '../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { MenuBar } from '../components/menu';

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
      <div className="container">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
