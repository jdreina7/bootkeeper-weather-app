import { Grid2 } from '@mui/material';
import styled from 'styled-components';

import { useCityWeatherContext } from '../../../context/cityWheather/CityWeatherContext';
import { MeasurementInterface, weatherDataInterface } from '../../../utils/interfaces';
import { MeasurementItem } from './MeasurementItem';
import { generateDynamicKey } from '../../../utils';
import {
  UNIT_HUMIDITY_TITLE,
  UNIT_PRESSURE_TITLE,
  UNIT_VISIBILITY_TITLE,
  UNIT_FEELS_LIKE_TITLE,
} from '../../../utils/constants';

const MeasurementsMainSection = styled(Grid2)`
  align-items: center;
  display: flex;
  justify-content: space-between;
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
      title: UNIT_HUMIDITY_TITLE,
      value: humidity,
      icon: 'humidity',
      unit_symbol: '%',
    },
    {
      title: UNIT_PRESSURE_TITLE,
      value: pressure,
      icon: 'barometer',
      unit_symbol: 'hPa',
    },
    {
      title: UNIT_VISIBILITY_TITLE,
      value: visibility / 1000,
      icon: 'visibility',
      unit_symbol: '%',
    },
    {
      title: UNIT_FEELS_LIKE_TITLE,
      value: feels_like,
      icon: 'feels_like',
      unit_symbol: '°C',
    },
  ];

  return (
    <MeasurementsMainSection
      container
      spacing={{ xs: 1, sm: 1, md: 2 }}
      columns={{ xs: 12, sm: 12, md: 12 }}
      direction={{ xs: 'column', md: 'row' }}
    >
      {measurementsArray.map((item: MeasurementInterface) => (
        <MeasurementItem key={generateDynamicKey()} {...item} />
      ))}
    </MeasurementsMainSection>
  );
};
