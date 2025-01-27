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
  align-items: center;
  width: 100%;
  margin-bottom: 100px;

  .no-city-selected {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
  }
`;

const NoContent = styled.div`
  margin-top: 100px;
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
        <NoContent className="no-city-selected">
          <NotListedLocationIcon sx={{ fontSize: 150 }} />
          <h1>{NO_CITY_SELECTED}</h1>
        </NoContent>
      )}
      {weatherData && (
        <MainGrid container spacing={2}>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <NowWeatherSection />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 9 }}>
            <WeatherHighlights />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <FiveDaysForecast />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 9 }}>
            <DailyForecast />
          </Grid2>
        </MainGrid>
      )}
    </ContentContainer>
  );
};
