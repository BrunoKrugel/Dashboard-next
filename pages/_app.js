import '../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { MenuBar } from '../components/menu';

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

function getStorageValue(key, defaultValue) {
  // getting stored value
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    return saved || defaultValue;
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MenuBar user={getStorageValue('username', 'Usuário')} />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
