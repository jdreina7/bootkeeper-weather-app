import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Button } from '@mui/material';
import styled from 'styled-components';

import { useWeatherByCoords } from '../../api/querys';
import { useCityWeatherContext } from '../../context/cityWheather/CityWeatherContext';
import { useEffect } from 'react';

const LocationButton = styled(Button)`
  height: 3em;
  border-radius: 10em !important;
`;

export const CurrentLocationButton = () => {
  const { cityCoords, setCityCoords, setWeatherData, setIsFetchingWeather } = useCityWeatherContext();
  const { refetch, isFetching } = useWeatherByCoords({ lat: cityCoords?.lat || 0, lon: cityCoords?.lon || 0 }!);

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
          const result = await refetch();

          if (isFetching) {
            setIsFetchingWeather(true);
          }

          if (result.data) {
            setWeatherData(result.data);
            setIsFetchingWeather(false);
          }
        };

        makeRefetch();
      }
    }
    fetchData();
  }, [cityCoords]);

  return (
    <LocationButton
      variant="outlined"
      onClick={handleGetCurrentLocation}
      endIcon={<MyLocationIcon className="custom-search-icon" fontSize="large" />}
    >
      CURRENT LOCATION
    </LocationButton>
  );
};
