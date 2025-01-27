import { Paper } from '@mui/material';
import styled from 'styled-components';

import { DailyForecastList } from './DailyForecastList';
import { CONTENT_DAILY_FORECAST_TITLE } from '../../../utils/constants';

const DailyForecastContainer = styled(Paper)`
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h2`
  margin: 0px 0px 10px;
`;

export const DailyForecast = () => {
  return (
    <DailyForecastContainer elevation={9} id="insigths-container">
      <TitleSection>
        <Title>{CONTENT_DAILY_FORECAST_TITLE}</Title>
      </TitleSection>
      <DailyForecastList />
    </DailyForecastContainer>
  );
};
