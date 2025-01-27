import { useState, useEffect } from 'react';
import { Grid2 } from '@mui/material';

import { useCityWeatherContext } from '../../../context/cityWheather/CityWeatherContext';
import { ForecastDailyListItemToShow, weatherDataInterface } from '../../../utils/interfaces';
import { DailyForecastCard } from './DailyForecastCard';
import { generateDynamicKey } from '../../../utils';

export const DailyForecastList = () => {
  const [listData, setListData] = useState<ForecastDailyListItemToShow[]>([]);
  const { forecastData, weatherData } = useCityWeatherContext();

  useEffect(() => {
    const forecastItems: ForecastDailyListItemToShow[] = [];
    if (forecastData) {
      for (const [index, data] of forecastData.list.entries()) {
        if (index > 7) break;
        const {
          dt: dateTimeUnix,
          main: { temp },
          weather,
          wind: { deg: windDirection, speed: windSpeed },
        } = data;
        const [{ icon, description }] = weather;
        const { timezone } = weatherData as weatherDataInterface;

        forecastItems.push({
          dateTimeUnix,
          icon,
          description,
          temp,
          windDirection,
          windSpeed,
          timezone,
        } as ForecastDailyListItemToShow);
      }

      setListData(forecastItems);
    }
  }, [forecastData, weatherData]);

  return (
    <Grid2 container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 4, md: 4 }}>
      {Array.from(listData).map((item, index) => (
        <Grid2 key={index} size={{ xs: 1, sm: 1, md: 1 }}>
          <DailyForecastCard key={generateDynamicKey()} {...item} />
        </Grid2>
      ))}
    </Grid2>
  );
};
