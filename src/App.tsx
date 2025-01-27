import { useContext } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import styled from 'styled-components';
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import './index.css';

import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { ThemeContext } from './context/theme/ThemeContext';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 10px;
`;

const ContentWrapper = styled.main`
  align-items: center;
  display: flex;
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
        <StyledComponentsThemeProvider theme={appTheme}>
          <AppContainer id='main-app-container'>
            <CssBaseline />
            <Header />
            <ContentWrapper>
              <Content />
            </ContentWrapper>
          </AppContainer>
          <Footer />
        </StyledComponentsThemeProvider>
      </ThemeProvider>
  )
}

export default App
