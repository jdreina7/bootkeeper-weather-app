import { Divider, Grid2, Typography } from '@mui/material';
import styled from 'styled-components';

import { AirQualityIndicator } from '../airQualityIndicator/AirQualityIndicator';
import { useCityWeatherContext } from '../../../context/cityWheather/CityWeatherContext';
import { AirPollutionInterface } from '../../../utils/interfaces';

const AirPollutionSection = styled(Grid2)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => (theme.palette.mode === 'dark' ? '#575757' : '#f2f2f2')};
  padding: 10px 20px;
  border-radius: 20px !important;
`;

const AirPollutionHeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const AirPollutionContentSection = styled(Grid2)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AirPollution = () => {
  const { airPollutionData } = useCityWeatherContext();

  const { list } = airPollutionData as AirPollutionInterface;
  const { main, components } = list[0];
  return (
    <AirPollutionSection size={6} id="air-pollution-section">
      <AirPollutionHeaderSection>
        <h4>Air Quality Index</h4>
        <AirQualityIndicator aqi={main.aqi} />
      </AirPollutionHeaderSection>

      <AirPollutionContentSection container spacing={1} size={12}>
        <Grid2 size={2}>
          <img src={`/weather_icons/wind.svg`} alt="Wind" width={60} />
        </Grid2>

        <Grid2 size={2} textAlign={'center'}>
          <Typography color="secundary">
            PM25
          </Typography>
          <Typography variant="h6" fontWeight={700}>
            {Number(components.pm2_5).toPrecision(3)}
          </Typography>
        </Grid2>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Grid2 size={2} textAlign={'center'}>
          <Typography color="secundary">
            SO2
          </Typography>
          <Typography variant="h6" fontWeight={700}>
            {Number(components.so2).toPrecision(3)}
          </Typography>
        </Grid2>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Grid2 size={2} textAlign={'center'}>
          <Typography color="secundary">
            NO2
          </Typography>
          <Typography variant="h6" fontWeight={700}>
            {Number(components.no2).toPrecision(3)}
          </Typography>
        </Grid2>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Grid2 size={2} textAlign={'center'}>
          <Typography color="secundary">
            O3
          </Typography>
          <Typography variant="h6" fontWeight={700}>
            {Number(components.o3).toPrecision(3)}
          </Typography>
        </Grid2>
      </AirPollutionContentSection>
    </AirPollutionSection>
  );
};
