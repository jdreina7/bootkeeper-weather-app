import { createContext, useContext, useState } from 'react';

import { CityDataType } from '../../utils/types';
import { CityContextInterface, weatherDataInterface } from '../../utils/interfaces';

const CityWeatherContext = createContext<CityContextInterface | undefined>(undefined);

export const CityWeatherContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cityWeatherData, setCityWeatherData] = useState<CityDataType | null>(null);
  const [weatherData, setWeatherData] = useState<weatherDataInterface | null>(null);
  const [isFetchingWeather, setIsFetchingWeather] = useState<boolean | null>(null);

  return (
    <CityWeatherContext.Provider
      value={{
        cityWeatherData,
        setCityWeatherData,
        weatherData,
        setWeatherData,
        isFetchingWeather,
        setIsFetchingWeather
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
