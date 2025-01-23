import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import './index.css';

import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';


function App() {
  const { theme } = useContext(ThemeContext);

  const appTheme = createTheme({
    palette: {
      mode: theme.toLowerCase() as 'light' | 'dark',
    },
  });

  return (
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
  )
}

export default App
