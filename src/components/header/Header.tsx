import { useContext } from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.png';

import { CustomThemeSwitch } from '../miscellaneous/customThemeSwitch/CustomThemeSwitch';
import { ThemeContext } from '../../context/theme/ThemeContext';
import { CustomSearchField } from '../miscellaneous/customSearchField/CustomSearchField';
import { CurrentLocationButton } from '../miscellaneous/currentLocationBtn/CurrentLocationButton';
import { Grid2 } from '@mui/material';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1em;
  width: 100%;

  .app-title {
    font-size: 3em;
    font-weight: bold;
    margin-left: -0.8em;
  }
`;

const HeaderSwitchThemeSection = styled(Grid2)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const HeaderLogoSection = styled(Grid2)`
  display: flex;
  align-items: top;
  justify-content: center;
`;

const HeaderSearchSection = styled(Grid2)`
  display: flex;
  align-items: top;
  justify-content: center;
`;

const HeaderCurrentLocation = styled(Grid2)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const newTheme = theme === 'Light' ? 'Dark' : 'Light';
    setTheme(newTheme);
  };
  return (
    <Grid2 container spacing={2}>
      <HeaderSwitchThemeSection size={12}>
        <CustomThemeSwitch handleThemeChange={handleThemeChange} />
      </HeaderSwitchThemeSection>
      <HeaderContainer>
        <HeaderLogoSection size={4}>
          <img src={logo} alt="Instant Weather" width={'50%'} />
        </HeaderLogoSection>
        <HeaderSearchSection size={4}>
          <CustomSearchField />
        </HeaderSearchSection>
        <HeaderCurrentLocation size={4}>
          <CurrentLocationButton />
        </HeaderCurrentLocation>
      </HeaderContainer>
    </Grid2>
  );
};
