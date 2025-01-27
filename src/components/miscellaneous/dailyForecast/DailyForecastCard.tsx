import { Grid2, Tooltip, Typography } from '@mui/material';

import styled from 'styled-components';
import { ForecastDailyListItemToShow } from '../../../utils/interfaces';
import { getHours, mpsToKmh, transformToCamelCase } from '../../../utils';

const CardContainer = styled(Grid2)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => (theme.palette.mode === 'dark' ? '#575757' : '#f2f2f2')};
  padding: 10px 20px;
  border-radius: 20px !important;
  text-align: center;
`;

const CardTitle = styled.h6`
  font-size: 1em;
  margin: 0px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const DailyForecastCard = (item: ForecastDailyListItemToShow) => {
  const { dateTimeUnix, icon, description, temp, windDirection, windSpeed, timezone } = item;

  return (
    <CardContainer>
      <CardTitle>{getHours(dateTimeUnix, timezone)}</CardTitle>
      <CardContent>
        <Tooltip title={transformToCamelCase(description)} placement="top-end">
          <img
            src={`/weather_icons/${icon === '03d' || icon === '03n' ? '03dn' : icon}.svg`}
            alt={description}
            width={'30%'}
          />
        </Tooltip>
        <Typography fontWeight={700}>{temp}°</Typography>

        <Tooltip title={`Wind direction: ${windDirection - 180}°`} placement="top-end">
          <img
            src={`/weather_icons/direction.png`}
            alt={description}
            width={'15%'}
            style={{ transform: `rotate(${windDirection - 180}deg)`, cursor: 'help', margin: '20px auto'}}
          />
        </Tooltip>

        <Typography fontWeight={700}>{mpsToKmh(windSpeed).toPrecision(2)} km/h</Typography>
      </CardContent>
    </CardContainer>
  );
};
