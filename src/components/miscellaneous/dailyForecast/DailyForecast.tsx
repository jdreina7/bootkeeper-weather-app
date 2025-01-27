import { Paper } from '@mui/material';
import styled from 'styled-components';
import { DailyForecastList } from './DailyForecastList';

const DailyForecastContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px !important;
  padding: 20px;
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
        <Title>Today at</Title>
      </TitleSection>
      <DailyForecastList />
    </DailyForecastContainer>
  );
};
