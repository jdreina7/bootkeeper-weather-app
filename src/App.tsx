import { useContext } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import styled from 'styled-components';

import './index.css';

import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { ThemeContext } from './context/theme/ThemeContext';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;


function App() {
  const { theme } = useContext(ThemeContext);

  const appTheme = createTheme({
    palette: {
      mode: theme.toLowerCase() as 'light' | 'dark',
    },
  });

  return (
      <ThemeProvider theme={appTheme}>
        <AppContainer>
          <CssBaseline />
          <Header />
          <ContentWrapper>
            <Content />
          </ContentWrapper>
          <Footer />
        </AppContainer>
      </ThemeProvider>
  )
}

export default App
