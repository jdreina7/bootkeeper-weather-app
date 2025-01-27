import { Divider, Grid2, Typography } from '@mui/material';
import styled from 'styled-components';

import { AirQualityIndicator } from '../airQualityIndicator/AirQualityIndicator';
import { useCityWeatherContext } from '../../../context/cityWheather/CityWeatherContext';
import { AirPollutionInterface } from '../../../utils/interfaces';
import {
  CONTENT_AIR_QUALITY_INDEX,
  THEME_DARK,
  UNIT_NO2,
  UNIT_O3,
  UNIT_PM25,
  UNIT_SO2,
} from '../../../utils/constants';

const AirPollutionSection = styled(Grid2)`
  background-color: ${({ theme }) => (theme.palette.mode === THEME_DARK.toLocaleLowerCase() ? '#575757' : '#f2f2f2')};
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  width: 100%;
`;

const AirPollutionHeaderSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const AirPollutionContentSection = styled(Grid2)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  text-align: center;
  width: 100%;
`;

export const AirPollution = () => {
  const { airPollutionData } = useCityWeatherContext();

  const { list } = airPollutionData as AirPollutionInterface;
  const { main, components } = list[0];
  return (
    <AirPollutionSection size={{ xs: 12, sm: 12, md: 6 }} id="air-pollution-section">
      <AirPollutionHeaderSection>
        <h4>{CONTENT_AIR_QUALITY_INDEX}</h4>
        <AirQualityIndicator aqi={main.aqi} />
      </AirPollutionHeaderSection>

      <AirPollutionContentSection container spacing={1} size={12}>
        <Grid2 size={{ xs: 12, sm: 12, md: 2 }}>
          <img src={`/weather_icons/wind.svg`} alt="Wind" width={70}/>
        </Grid2>

        <Grid2 size={2} textAlign={'center'}>
          <Typography color="secundary">{UNIT_PM25}</Typography>
          <Typography variant="h6" fontWeight={700}>
            {components.pm2_5.toPrecision(3)}
          </Typography>
        </Grid2>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Grid2 size={2} textAlign={'center'}>
          <Typography color="secundary">{UNIT_SO2}</Typography>
          <Typography variant="h6" fontWeight={700}>
            {components.so2.toPrecision(3)}
          </Typography>
        </Grid2>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Grid2 size={2} textAlign={'center'}>
          <Typography color="secundary">{UNIT_NO2}</Typography>
          <Typography variant="h6" fontWeight={700}>
            {components.no2.toPrecision(3)}
          </Typography>
        </Grid2>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Grid2 size={2} textAlign={'center'}>
          <Typography color="secundary">{UNIT_O3}</Typography>
          <Typography variant="h6" fontWeight={700}>
            {components.o3.toPrecision(3)}
          </Typography>
        </Grid2>
      </AirPollutionContentSection>
    </AirPollutionSection>
  );
};
