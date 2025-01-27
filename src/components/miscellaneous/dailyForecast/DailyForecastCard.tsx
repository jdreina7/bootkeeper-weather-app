import { Grid2, Tooltip, Typography } from '@mui/material';
import styled from 'styled-components';

import { ForecastDailyListItemToShow } from '../../../utils/interfaces';
import { getHours, mpsToKmh, transformToCamelCase } from '../../../utils';
import { CONTENT_DAILY_FORECAST_WIND, THEME_DARK, UNIT_KM_PER_HOUR } from '../../../utils/constants';

const CardContainer = styled(Grid2)`
  background-color: ${({ theme }) => (theme.palette.mode === THEME_DARK.toLocaleLowerCase() ? '#575757' : '#f2f2f2')};
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  text-align: center;
  width: 100%;
`;

const CardTitle = styled.h6`
  font-size: 1em;
  margin: 0px;
`;

const CardContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
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

        <Tooltip title={`${CONTENT_DAILY_FORECAST_WIND} ${windDirection - 180}°`} placement="top-end">
          <img
            src={`/weather_icons/direction.png`}
            alt={description}
            width={'15%'}
            style={{ transform: `rotate(${windDirection - 180}deg)`, cursor: 'help', margin: '20px auto' }}
          />
        </Tooltip>

        <Typography fontWeight={700}>{mpsToKmh(windSpeed).toPrecision(2)} {`${UNIT_KM_PER_HOUR}`} </Typography>
      </CardContent>
    </CardContainer>
  );
};
