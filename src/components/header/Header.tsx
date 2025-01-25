import { useContext } from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.png';

import { CustomThemeSwitch } from '../customThemeSwitch/CustomThemeSwitch';
import { ThemeContext } from '../../context/theme/ThemeContext';
import { CustomSearchField } from '../customSearchField/CustomSearchField';

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

const HeaderLogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 30%;
`;

const HeaderSearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const HeaderSwitchThemeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 20%;
`;

export const Header = () => {

  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const newTheme = theme === 'Light' ? 'Dark' : 'Light';
    setTheme( newTheme);
  };
  return (
    <HeaderContainer>
      <HeaderLogoSection>
        <img src={logo} alt="JDR Weather App" width={"80%"} />
      </HeaderLogoSection>

      <HeaderSearchSection>
        <CustomSearchField />
      </HeaderSearchSection>

      <HeaderSwitchThemeSection >
        <CustomThemeSwitch handleThemeChange={handleThemeChange} />
      </HeaderSwitchThemeSection>
    </HeaderContainer>
  );
};
