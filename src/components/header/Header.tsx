import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import { APP_TITLE } from '../../utils/constants';
import { Button, TextField } from '@mui/material';
import { CustomThemeSwitch } from '../customThemeSwitch/CustomThemeSwitch';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1em;

  .app-title {
    font-size: 3em;
    font-weight: bold;
    margin-left: -0.8em;
  }
`;

interface HeaderSectionProps {
  direction: 'left' | 'right' | 'center';
  percentage: number;
}

const HeaderSection = styled.div<HeaderSectionProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ direction }) => direction};
  width: ${({ percentage }) => percentage}%;
`;

export const Header = () => {

  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const newTheme = theme === 'Light' ? 'Dark' : 'Light';
    setTheme( newTheme);
  };
  return (
    <HeaderContainer>
      <HeaderSection direction="left" percentage={30}>
        <img src={logo} alt="JDR Weather App" width={"20%"} />
        <h1 className="app-title">{APP_TITLE}</h1>
      </HeaderSection>

      <HeaderSection direction="center" percentage={30}>
        <TextField id="outlined-basic" label="Search City" variant="outlined" />
        <Button variant="contained">Search</Button>
      </HeaderSection>

      <HeaderSection direction="right" percentage={30}>
        <CustomThemeSwitch handleThemeChange={handleThemeChange} />
      </HeaderSection>
    </HeaderContainer>
  );
};
