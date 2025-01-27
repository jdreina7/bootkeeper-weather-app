import { Divider, Paper, Typography } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from 'styled-components';

import { useCityWeatherContext } from '../../../context/cityWheather/CityWeatherContext';
import { getDate, kelvinToCelsius, transformToCamelCase } from '../../../utils';
import { weatherDataInterface } from '../../../utils/interfaces';
import { CONTENT_NOW_TITLE } from '../../../utils/constants';

const WeatherContainer = styled(Paper)`
  align-items: center;
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  width: 100%;

  #location-section {
      div {
        width: 100% !important;
      }
    }

  @media only screen and (max-width: 500px) {
    #temperature-section {
      h1 {
        font-size: 2.5rem;
      }
    };

    #location-section {
      div {
        font-size: 1rem;
        width: 100%;
      }
    }
    #date-section {
      div {
        font-size: 1rem;
      }
    }
  }
`;

const NowWeatherFirstSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  width: 100%;
`;

const WeatherNowTitle = styled.h2`
  margin-bottom: -20px;
`;

const WeatherTemp = styled.h1`
  font-size: 3rem;
`;

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const WeatherItem = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.2em;
  margin: 10px;
`;

export const NowWeatherSection = () => {
  const { weatherData } = useCityWeatherContext();

  const {
    weather,
    dt: dateUnix,
    sys: { country },
    main: { temp },
    name,
    timezone,
  } = weatherData as weatherDataInterface;
  const [{ description, icon }] = weather;

  return (
    <WeatherContainer elevation={9} id="main-container-now-wether">
      <NowWeatherFirstSection>
        <Section id='title-section'>
          <WeatherNowTitle>{CONTENT_NOW_TITLE}</WeatherNowTitle>
        </Section>
        <Section id='temperature-section'>
          <WeatherTemp>{kelvinToCelsius(temp)}°C</WeatherTemp>
          <img
            src={`/weather_icons/${icon === '03d' || icon === '03n' ? '03dn' : icon}.svg`}
            alt={description}
            width={150}
          />
        </Section>
        <Section id='description-section'>
          <Typography variant="h5" gutterBottom>
            {transformToCamelCase(description)}
          </Typography>
        </Section>
      </NowWeatherFirstSection>

      <Divider variant="middle" flexItem />

      <Section id='location-section'>
        <WeatherItem color="textDisabled">
          <LocationOnIcon sx={{ fontSize: 25 }} />
          {name}, {country}
        </WeatherItem>
      </Section>
      <Section id='date-section'>
        <WeatherItem color="textDisabled">
          <EventAvailableIcon sx={{ fontSize: 25, marginRight: '5px' }} />
          {getDate(dateUnix, timezone)}
        </WeatherItem>
      </Section>
    </WeatherContainer>
  );
};
