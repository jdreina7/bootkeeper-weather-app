import { useEffect } from 'react';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Button } from '@mui/material';
import styled from 'styled-components';

import { useAirPollution, useForecastData, useWeatherByCoords } from '../../../api/querys';
import { useCityWeatherContext } from '../../../context/cityWheather/CityWeatherContext';
import { HEADER_CURRENT_LOCATION } from '../../../utils/constants';

const LocationButton = styled(Button)`
  border-radius: 10em !important;
  height: 3em;
`;

export const CurrentLocationButton = () => {
  const { cityCoords, setCityCoords, setWeatherData, setIsFetchingWeather, setAirPollutionData, setForecastData } =
    useCityWeatherContext();

  const { refetch: weatherRefetch, isFetching: weatherIsFetching } = useWeatherByCoords({
    lat: cityCoords?.lat || 0,
    lon: cityCoords?.lon || 0,
  });
  const { refetch: airPollutionRefetch, isFetching: airPollutionIsFetching } = useAirPollution({
    lat: cityCoords?.lat || 0,
    lon: cityCoords?.lon || 0,
  });
  const { refetch: forecastRefetch, isFetching: forecastIsFetching } = useForecastData({
    lat: cityCoords?.lat || 0,
    lon: cityCoords?.lon || 0,
  });

  const handleGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCityCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  useEffect(() => {
    async function fetchData() {
      if (cityCoords) {
        const makeRefetch = async () => {
          const resultWeather = await weatherRefetch();
          const resultAirPol = await airPollutionRefetch();
          const resultForecast = await forecastRefetch();

          if (weatherIsFetching || airPollutionIsFetching || forecastIsFetching) {
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

          if (resultForecast.data) {
            setForecastData(resultForecast.data);
            setIsFetchingWeather(false);
          }
        };

        makeRefetch();
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityCoords]);

  return (
    <LocationButton
      variant="outlined"
      onClick={handleGetCurrentLocation}
      endIcon={<MyLocationIcon className="custom-search-icon" fontSize="large" />}
    >
      {HEADER_CURRENT_LOCATION}
    </LocationButton>
  );
};
