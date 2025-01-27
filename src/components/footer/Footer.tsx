import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';

import { FOOTER_MADE, FOOTER_IN, FOOTER_POWERED } from '../../utils/constants';

const FooterContainer = styled.footer`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  width: 100%;
`;

const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const PoweredBy = styled.p`
  margin: 25px 10px 0px;
`;

const MadeIn = styled.p`
  margin-right: 5px ;
`;

const Septum = styled.p`
  margin: 0 5px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Section>
        <MadeIn>{FOOTER_MADE}</MadeIn>
        <FavoriteIcon  color='error' />
        <Septum>{FOOTER_IN}</Septum>
        <a href="https://septum.com.co" target='blank'>
          <img src={`/logoSeptum.png`} alt="Septum" width={70} />
        </a>
      </Section>

      <Section>
        <PoweredBy>{FOOTER_POWERED}</PoweredBy>
        <img src={`/openweatherlogo.png`} alt="openweather.org" width={100} />
      </Section>
    </FooterContainer>
  );
};
