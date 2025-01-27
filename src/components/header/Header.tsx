import { useContext } from 'react';
import { Grid2 } from '@mui/material';
import styled from 'styled-components';

import logo from '../../assets/logo.png';

import { CustomThemeSwitch } from '../miscellaneous/customThemeSwitch/CustomThemeSwitch';
import { ThemeContext } from '../../context/theme/ThemeContext';
import { CustomSearchField } from '../miscellaneous/customSearchField/CustomSearchField';
import { CurrentLocationButton } from '../miscellaneous/currentLocationBtn/CurrentLocationButton';
import { THEME_LIGHT, THEME_DARK, APP_NAME } from '../../utils/constants';

const HeaderContainer = styled(Grid2)`
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  width: 100%;
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
    <Grid2>
      <CustomThemeSwitch handleThemeChange={handleThemeChange} />
      <HeaderContainer
        container
        spacing={{ xs: 1, sm: 1, md: 2 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
        direction={{ xs: 'column', md: 'row' }}
      >
        <HeaderSection size={{ xs: 12, sm: 4, md: 4 }} order={{ xs: 1, md: 1 }}>
          <img src={logo} alt={APP_NAME} width={'50%'} />
        </HeaderSection>
        <HeaderSection size={{ xs: 12, sm: 4, md: 4 }} order={{ xs: 3, md: 2 }}>
          <CustomSearchField />
        </HeaderSection>
        <HeaderSection size={{ xs: 12, sm: 4, md: 4 }} order={{ xs: 2, md: 3 }}>
          <CurrentLocationButton />
        </HeaderSection>
      </HeaderContainer>
    </Grid2>
  );
};
