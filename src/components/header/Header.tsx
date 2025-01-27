import { useContext } from 'react';
import { Grid2 } from '@mui/material';
import styled from 'styled-components';

import logo from '../../assets/logo.png';

import { CustomThemeSwitch } from '../miscellaneous/customThemeSwitch/CustomThemeSwitch';
import { ThemeContext } from '../../context/theme/ThemeContext';
import { CustomSearchField } from '../miscellaneous/customSearchField/CustomSearchField';
import { CurrentLocationButton } from '../miscellaneous/currentLocationBtn/CurrentLocationButton';
import { THEME_LIGHT, THEME_DARK, APP_NAME } from '../../utils/constants';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  width: 100%;

  .app-title {
    font-size: 3em;
    font-weight: bold;
    margin-left: -0.8em;
  }
`;

const HeaderSection = styled(Grid2)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const newTheme = theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    setTheme(newTheme);
  };

  return (
    <Grid2 container spacing={2}>
      <CustomThemeSwitch handleThemeChange={handleThemeChange} />
      <HeaderContainer>
        <HeaderSection size={4}>
          <img src={logo} alt={APP_NAME} width={'50%'} />
        </HeaderSection>
        <HeaderSection size={4}>
          <CustomSearchField />
        </HeaderSection>
        <HeaderSection size={4}>
          <CurrentLocationButton />
        </HeaderSection>
      </HeaderContainer>
    </Grid2>
  );
};
