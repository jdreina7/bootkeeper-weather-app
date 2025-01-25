import { useCityWeatherContext } from "../../context/cityWheather/CityWeatherContext";
import styled from "styled-components";

import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import { CircularProgress } from "@mui/material";

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

  return isFetchingWeather ? (
    <div className="loading">
      <CircularProgress />
    </div>
  ) : (
    <ContentContainer>
      {!weatherData && (
        <div className="no-city-selected">
          <NotListedLocationIcon sx={{ fontSize: 200 }} />
          <h1>Please select a city to display the weather data.</h1>
        </div>
      )}
      {weatherData && (
        <>
          <h2>Selected City</h2>
          <p>Name: {weatherData.name}</p>
          <p>Country: {weatherData.base}</p>
          <p>State: {weatherData.timezone}</p>
        </>
      )}
    </ContentContainer>
  );
}
