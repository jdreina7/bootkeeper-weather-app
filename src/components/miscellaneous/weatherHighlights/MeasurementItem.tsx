import { Grid2, Typography } from '@mui/material';
import styled from 'styled-components';

import { MeasurementInterface } from '../../../utils/interfaces';
import { THEME_DARK } from '../../../utils/constants';

const MeasurementItemContainer = styled(Grid2)`
  background-color: ${({ theme }) => (theme.palette.mode === THEME_DARK.toLocaleLowerCase() ? '#575757' : '#f2f2f2')};
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  width: 100%;
`;

const MeasurementTitle = styled.h6`
  font-size: 1em;
  margin: 0px;
`;

const MeasurementContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const MeasurementItem = (item: MeasurementInterface) => {
  const { title, value, icon, unit_symbol } = item;

  return (
    <MeasurementItemContainer size={3}>
      <MeasurementTitle>{title}</MeasurementTitle>
      <MeasurementContent>
        <img src={`/weather_icons/${icon}.svg`} alt={title} width={'35%'} />
        <Typography fontWeight={700}>
          {value} {unit_symbol ? unit_symbol : null}
        </Typography>
      </MeasurementContent>
    </MeasurementItemContainer>
  );
};
