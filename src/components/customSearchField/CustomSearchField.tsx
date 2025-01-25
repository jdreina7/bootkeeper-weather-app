import TravelExploreIcon from '@mui/icons-material/TravelExplore';

import styled from "styled-components"

import { AutocompleteGeo } from "./AutocompleteGeo";

import { useCityWeatherContext } from "../../context/cityWheather/CityWeatherContext";
import { useWeatherByCoords } from "../../api/querys/useWeatherByCoords";

const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .custom-search-icon {
        cursor: pointer;
        margin-left: 0.5em;
    }
`;

export const CustomSearchField = () => {
  const { cityWeatherData, setWeatherData, setIsFetchingWeather } = useCityWeatherContext();
  const { refetch, isFetching } = useWeatherByCoords({ lat: cityWeatherData?.lat || 0, lon: cityWeatherData?.lon || 0 }!);
  

  const handleFetchWeather = async () => {
    if (cityWeatherData) {
      const result = await refetch();

      if (isFetching) {
        setIsFetchingWeather(true);
      } else {
        setIsFetchingWeather(false);
      }

      if (result.data) {
        setWeatherData(result.data);
      }
    }
  };

  return (
    <SearchContainer>
        <AutocompleteGeo />
        <TravelExploreIcon className="custom-search-icon" fontSize="large" onClick={handleFetchWeather} />
    </SearchContainer>
  )
}
