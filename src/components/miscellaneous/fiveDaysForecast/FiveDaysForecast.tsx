import { Paper } from '@mui/material';

import styled from 'styled-components';
import { ForecastList } from './ForecastList';

const WeatherContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 20px !important;
  padding: 10px 20px;
`;

const ForecastTitleSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
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
        <ForecastTitle>5 Days Forecast</ForecastTitle>
      </ForecastTitleSection>

      <ForecastList />
    </WeatherContainer>
  );
};
