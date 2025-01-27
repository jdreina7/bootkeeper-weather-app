import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';

import { FOOTER_MADE, FOOTER_IN, FOOTER_POWERED } from '../../utils/constants';

const FooterContainer = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.default};
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  width: 100%;
`;

const SectionLeft = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 1em;

  #septum-logo {
    width: 15%;
  }

  @media only screen and (max-width: 500px) {
    p {
      display: none;
    }

    #septum-logo {
      width: 20%;
    }
  }
`;

const SectionRight = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 1em;
  justify-content: end;

  #openweather-logo {
    margin-bottom: 25px;
    width: 20%;
  }

  @media only screen and (max-width: 500px) {
    p {
      display: none;
    }

    #openweather-logo {
      width: 30%;
    }
  }
`;

const PoweredBy = styled.p`
  margin: 0px 10px 0px;
`;

const MadeIn = styled.p`
  margin-right: 5px;
`;

const Septum = styled.p`
  margin: 0 5px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <SectionLeft>
        <MadeIn>{FOOTER_MADE}</MadeIn>
        <FavoriteIcon
          color="error"
          sx={{
            display: {
              xs: 'none',
              md: 'block',
            },
          }}
        />
        <Septum>{FOOTER_IN}</Septum>
        <a href="https://septum.com.co" target="blank">
          <img id="septum-logo" src={`/logoSeptum.png`} alt="Septum" />
        </a>
      </SectionLeft>

      <SectionRight>
        <PoweredBy>{FOOTER_POWERED}</PoweredBy>
        <img id="openweather-logo" src={`/openweatherlogo.png`} alt="openweather.org" />
      </SectionRight>
    </FooterContainer>
  );
};
