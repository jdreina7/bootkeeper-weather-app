import { createContext, useCallback, useContext, useState } from 'react';

import { CityDataType } from '../../utils/types';
import { AirPollutionInterface, CityContextInterface, Coord, ForecastInterface, weatherDataInterface } from '../../utils/interfaces';

const CityWeatherContext = createContext<CityContextInterface | undefined>(undefined);

export const CityWeatherContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cityCoords, setCityCoords] = useState<CityDataType | null>(null);
  const [weatherData, setWeatherData] = useState<weatherDataInterface | null>(null);
  const [airPollutionData, setAirPollutionData] = useState<AirPollutionInterface | null>(null);
  const [forecastData, setForecastData] = useState<ForecastInterface | null>(null);
  const [isFetchingWeather, setIsFetchingWeather] = useState<boolean | null>(null);

  const updateCityCoords = useCallback((coords: Coord) => {
    setCityCoords(coords);
  }, []);

  return (
    <CityWeatherContext.Provider
      value={{
        cityCoords,
        setCityCoords: updateCityCoords,
        weatherData,
        setWeatherData,
        isFetchingWeather,
        setIsFetchingWeather,
        airPollutionData,
        setAirPollutionData,
        forecastData,
        setForecastData
      }}
    >
      {children}
    </CityWeatherContext.Provider>
  );
};

export const useCityWeatherContext = (): CityContextInterface => {
  const context = useContext(CityWeatherContext);

  if (!context) {
    throw new Error('useCityContext must be used within a CityProvider');
  }

  return context;
};
