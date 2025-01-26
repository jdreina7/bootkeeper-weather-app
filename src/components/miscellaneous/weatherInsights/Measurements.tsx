import { Grid2 } from '@mui/material';
import styled from 'styled-components';

import { useCityWeatherContext } from '../../../context/cityWheather/CityWeatherContext';
import { MeasurementInterface, weatherDataInterface } from '../../../utils/interfaces';
import { MeasurementItem } from './MeasurementItem';

const MeasurementsMainSection = styled(Grid2)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Measurements = () => {
  const { weatherData } = useCityWeatherContext();
  const {
    main: { feels_like, pressure, humidity },
    visibility,
  } = weatherData as weatherDataInterface;

  const measurementsArray: MeasurementInterface[] = [
    {
        title: 'Humidity',
        value: humidity,
        icon: 'humidity',
        unit_symbol: '%'
    },
    {
        title: 'Pressure',
        value: pressure,
        icon: 'barometer',
        unit_symbol: 'hPa'
    },
    {
        title: 'Visibility',
        value: visibility / 1000,
        icon: 'visibility',
        unit_symbol: '%'
    },
    {
        title: 'Feels Like',
        value: feels_like,
        icon: 'feels_like',
        unit_symbol: '°C'
    },
  ]

  return (
    <MeasurementsMainSection size={12} spacing={1}>
        {measurementsArray.map((item: MeasurementInterface) => (
            <MeasurementItem {...item} />
        ))}
    </MeasurementsMainSection>
  );
};
