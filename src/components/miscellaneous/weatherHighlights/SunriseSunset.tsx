import { Divider, Grid2, Typography } from '@mui/material';
import styled from 'styled-components';

import { useCityWeatherContext } from '../../../context/cityWheather/CityWeatherContext';
import { weatherDataInterface } from '../../../utils/interfaces';
import { getHours } from '../../../utils';

const SunriseSection = styled(Grid2)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => (theme.palette.mode === 'dark' ? '#575757' : '#f2f2f2')};
  padding: 10px 20px;
  border-radius: 20px !important;
`;

const SunriseSunsetHeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SunriseSunsetContentSection = styled(Grid2)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const ContentSection = styled(Grid2)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const SunriseSunset = () => {
  const { weatherData } = useCityWeatherContext();

  const {
    sys: { sunrise: sunriseUnixUTC, sunset: sunsetUnixUTC },
    timezone,
  } = weatherData as weatherDataInterface;

  return (
    <SunriseSection size={6}>
      <SunriseSunsetHeaderSection>
        <h4>Sunrise & Sunset</h4>
      </SunriseSunsetHeaderSection>

      <SunriseSunsetContentSection container spacing={1} size={12}>
        <ContentSection size={5} id="sunrise-content-section">
          <div>
            <img src={`/weather_icons/sunrise.svg`} alt="Sunrise" width={80} />
          </div>
          <div>
            <Typography color="secundary">Sunrise</Typography>
            <Typography fontWeight={700}>{getHours(sunriseUnixUTC, timezone)}</Typography>
          </div>
        </ContentSection>

        <Divider orientation="vertical" variant="middle" flexItem />

        <ContentSection size={5} id="sunset-content-section">
          <div>
            <img src={`/weather_icons/sunset.svg`} alt="Sunrise" width={80} />
          </div>
          <div>
            <Typography color="secundary">Sunset</Typography>
            <Typography fontWeight={700}>{getHours(sunsetUnixUTC, timezone)}</Typography>
          </div>
        </ContentSection>
      </SunriseSunsetContentSection>
    </SunriseSection>
  );
};
