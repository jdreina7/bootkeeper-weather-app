import { Divider, Grid2, Typography } from '@mui/material';
import styled from 'styled-components';

import { useCityWeatherContext } from '../../../context/cityWheather/CityWeatherContext';
import { weatherDataInterface } from '../../../utils/interfaces';
import { getHours } from '../../../utils';
import {
  CONTENT_SUNRISE_SUNSET_TITLE,
  CONTENT_SUNRISE_TITLE,
  CONTENT_SUNSET_TITLE,
  THEME_DARK,
} from '../../../utils/constants';

const SunriseSection = styled(Grid2)`
  background-color: ${({ theme }) => (theme.palette.mode === THEME_DARK.toLocaleLowerCase() ? '#575757' : '#f2f2f2')};
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  width: 100%;
`;

const SunriseSunsetHeaderSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const SunriseSunsetContentSection = styled(Grid2)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  @media only screen and (max-width: 500px) {
    width: 90% !important;
  }
`;

const ContentSection = styled(Grid2)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  width: 100%;

  p {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 500px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export const SunriseSunset = () => {
  const { weatherData } = useCityWeatherContext();

  const {
    sys: { sunrise: sunriseUnixUTC, sunset: sunsetUnixUTC },
    timezone,
  } = weatherData as weatherDataInterface;

  return (
    <SunriseSection size={{ xs: 12, sm: 12, md: 6 }}>
      <SunriseSunsetHeaderSection>
        <h4>{CONTENT_SUNRISE_SUNSET_TITLE}</h4>
      </SunriseSunsetHeaderSection>

      <SunriseSunsetContentSection container spacing={1} size={12} id='main-ceontent'>
        <ContentSection size={{ xs: 12, sm: 12, md: 5 }} id="sunrise-content-section">
          <div>
            <img src={`/weather_icons/sunrise.svg`} alt="Sunrise" width={100} />
          </div>
          <div>
            <Typography>{CONTENT_SUNRISE_TITLE}</Typography>
            <Typography fontWeight={700}>{getHours(sunriseUnixUTC, timezone)}</Typography>
          </div>
        </ContentSection>

        <Divider orientation="vertical" variant="middle" flexItem />

        <ContentSection size={{ xs: 12, sm: 12, md: 5 }} id="sunset-content-section">
          <div>
            <img src={`/weather_icons/sunset.svg`} alt="Sunrise" width={100} />
          </div>
          <div>
            <Typography>{CONTENT_SUNSET_TITLE}</Typography>
            <Typography fontWeight={700}>{getHours(sunsetUnixUTC, timezone)}</Typography>
          </div>
        </ContentSection>
      </SunriseSunsetContentSection>
    </SunriseSection>
  );
};
