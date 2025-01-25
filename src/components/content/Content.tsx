import { CircularProgress } from "@mui/material";
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import styled from "styled-components";

import { useCityWeatherContext } from "../../context/cityWheather/CityWeatherContext";
import { NO_CITY_SELECTED } from "../../utils/constants";
import { useEffect } from "react";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .no-city-selected {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
  }
`;

export const Content = () => {
  const { weatherData, isFetchingWeather } = useCityWeatherContext();

  useEffect(() => {
    console.log('27 weatherData >>> ', weatherData);
    console.log('28 isFetchingWeather >>> ', isFetchingWeather);
  }, [weatherData, isFetchingWeather]);

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
        <>
          <h2>Selected City</h2>
          {JSON.stringify(weatherData)}
        </>
      )}
    </ContentContainer>
  );
}
