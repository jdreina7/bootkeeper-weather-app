import { CircularProgress, Grid2 } from '@mui/material';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import styled from 'styled-components';

import { useCityWeatherContext } from '../../context/cityWheather/CityWeatherContext';
import { NowWeatherSection } from '../miscellaneous/nowWeatherSection/NowWeatherSection';
import { NO_CITY_SELECTED } from '../../utils/constants';
import { WeatherHighlights } from '../miscellaneous/weatherHighlights/WeatherHighlights';
import { FiveDaysForecast } from '../miscellaneous/fiveDaysForecast/FiveDaysForecast';
import { DailyForecast } from '../miscellaneous/dailyForecast/DailyForecast';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  width: 100%;

  .no-city-selected {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
  }
`;

const MainGrid = styled(Grid2)`
  width: 100%;
`;

export const Content = () => {
  const { weatherData, isFetchingWeather } = useCityWeatherContext();

  return isFetchingWeather ? (
    <div className="loading">
      <CircularProgress />
    </div>
  ) : (
    <ContentContainer>
      {!weatherData && (
        <div className="no-city-selected">
          <NotListedLocationIcon sx={{ fontSize: 200 }} />
          <h1>{NO_CITY_SELECTED}</h1>
        </div>
      )}
      {weatherData && (
        <MainGrid container spacing={2}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <NowWeatherSection />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <WeatherHighlights />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FiveDaysForecast />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <DailyForecast />
          </Grid2>
        </MainGrid>
      )}
    </ContentContainer>
  );
};
