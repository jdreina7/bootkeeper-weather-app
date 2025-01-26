import { useCityWeatherContext } from '../../../context/cityWheather/CityWeatherContext';
import { Divider, Paper, Typography } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from 'styled-components';

import { getDate, kelvinToCelsius, transformToCamelCase } from '../../../utils';
import { weatherDataInterface } from '../../../utils/interfaces';

const WeatherContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 20px !important;
`;

const NowWeatherFirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5px 20px;
`;

const WeatherNowTitle = styled.h2`
    margin-bottom: -20px;
`;

const WeatherTemp = styled.h1`
  font-size: 3rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const WeatherItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  width: 45%;
  margin: 10px;
`;

export const NowWeatherSection = () => {
  const { weatherData } = useCityWeatherContext();

  const {
    weather,
    dt: dateUnix,
    sys: { country },
    main: { temp},
    name,
    timezone,
  } = weatherData as weatherDataInterface;
  const [{ description, icon }] = weather;

  return (
    <WeatherContainer elevation={9}>
      <NowWeatherFirstSection>
        <Section>
            <WeatherNowTitle>Now</WeatherNowTitle>
        </Section>
        <Section>
          <WeatherTemp>
            {kelvinToCelsius(temp)}°C
          </WeatherTemp>
          <img src={`/weather_icons/${icon === '03d' || icon === '03n' ? '03dn' : icon}.svg`} alt={description} width={150} />
        </Section>
        <Section>
          <Typography variant="h5" gutterBottom>
            {transformToCamelCase(description)}
          </Typography>
        </Section>
      </NowWeatherFirstSection>

      <Divider variant="middle" flexItem />

      <Section>
        <WeatherItem color="textDisabled">
          <EventAvailableIcon sx={{ fontSize: 20 }} />
          {getDate(dateUnix, timezone)}
        </WeatherItem>
      </Section>
      <Section>
        <WeatherItem color="textDisabled">
          <LocationOnIcon sx={{ fontSize: 20 }} />
          {name}, {country}
        </WeatherItem>
      </Section>
    </WeatherContainer>
  );
};
