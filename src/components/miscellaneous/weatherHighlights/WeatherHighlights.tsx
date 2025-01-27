import { useEffect } from 'react';
import { Grid2, Paper } from '@mui/material';
import styled from 'styled-components';

import { useCityWeatherContext } from '../../../context/cityWheather/CityWeatherContext';
import { useAirPollution, useWeatherByCoords } from '../../../api/querys';
import { AirPollution } from './AirPollution';
import { SunriseSunset } from './SunriseSunset';
import { weatherDataInterface } from '../../../utils/interfaces';
import { getHours } from '../../../utils';
import { Measurements } from './Measurements';
import { CONTENT_HIGHLIGHTS_TITLE } from '../../../utils/constants';

const HighlightsContainer = styled(Paper)`
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

const TitleSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const HighlightsTitle = styled.h2`
  margin: 0px 0px 10px;
`;

export const WeatherHighlights = () => {
  const { cityCoords, setIsFetchingWeather, weatherData, setWeatherData, setAirPollutionData } =
    useCityWeatherContext();

  const { refetch: weatherRefetch, isFetching: weatherIsFetching } = useWeatherByCoords({
    lat: cityCoords?.lat || 0,
    lon: cityCoords?.lon || 0,
  });
  const { refetch: airPollutionRefetch, isFetching: airPollutionIsFetching } = useAirPollution({
    lat: cityCoords?.lat || 0,
    lon: cityCoords?.lon || 0,
  });

  useEffect(() => {
    async function fetchData() {
      if (cityCoords) {
        const makeRefetch = async () => {
          const resultWeather = await weatherRefetch();
          const resultAirPol = await airPollutionRefetch();

          if (weatherIsFetching || airPollutionIsFetching) {
            setIsFetchingWeather(true);
          }

          if (resultWeather.data) {
            setWeatherData(resultWeather.data);
            setIsFetchingWeather(false);
          }

          if (resultAirPol.data) {
            setAirPollutionData(resultAirPol.data);
            setIsFetchingWeather(false);
          }
        };

        makeRefetch();
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityCoords]);

  const {
    dt: dateUnix,
    sys: { country },
    timezone,
    name,
  } = weatherData as weatherDataInterface;

  return (
    <HighlightsContainer elevation={9} id="insigths-container">
      <TitleSection>
        <HighlightsTitle>{CONTENT_HIGHLIGHTS_TITLE}</HighlightsTitle>
        <span>
          {getHours(dateUnix, timezone)} in {name}, {country}
        </span>
      </TitleSection>
      <Grid2 container spacing={1}>
        <AirPollution />
        <SunriseSunset />
        <Measurements />
      </Grid2>
    </HighlightsContainer>
  );
};
