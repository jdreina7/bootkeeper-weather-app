import { Grid2, Typography } from '@mui/material';
import styled from 'styled-components';
import { MeasurementInterface } from '../../../utils/interfaces';

const MeasurementItemContainer = styled(Grid2)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => (theme.palette.mode === 'dark' ? '#575757' : '#f2f2f2')};
  padding: 10px 20px;
  border-radius: 20px !important;
`;

const MeasurementTitle = styled.h6`
  font-size: 1em;
  margin: 0px;
`;

const MeasurementContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const MeasurementItem = (item: MeasurementInterface) => {
  const { title, value, icon, unit_symbol } = item;

  return (
    <MeasurementItemContainer size={3}>
      <MeasurementTitle>{title}</MeasurementTitle>
      <MeasurementContent>
        <img src={`/weather_icons/${icon}.svg`} alt="Humidity" width={'50%'} />
        <Typography fontWeight={700}>
          {value} {unit_symbol ? unit_symbol : null}
        </Typography>
      </MeasurementContent>
    </MeasurementItemContainer>
  );
};
