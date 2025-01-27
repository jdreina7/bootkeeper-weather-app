import { Paper } from '@mui/material';
import styled from 'styled-components';

import { ForecastList } from './ForecastList';
import { CONTENT_FIVE_DAYS_FORECAST_TITLE } from '../../../utils/constants';

const WeatherContainer = styled(Paper)`
  align-items: center;
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 20px;
  width: 100%;
`;

const ForecastTitleSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ForecastTitle = styled.h2`
  margin-bottom: 10px;
`;

export const FiveDaysForecast = () => {
  return (
    <WeatherContainer elevation={9}>
      <ForecastTitleSection>
        <ForecastTitle>{CONTENT_FIVE_DAYS_FORECAST_TITLE}</ForecastTitle>
      </ForecastTitleSection>

      <ForecastList />
    </WeatherContainer>
  );
};
