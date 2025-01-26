import { useMemo } from 'react';
import { Tooltip, Chip } from '@mui/material';

import { AirPollutionMain, AqiDataInterface } from '../../../utils/interfaces';
import { aqiOptions } from '../../../utils';

export const AirQualityIndicator = ({ aqi }: AirPollutionMain) => {
  const aqidata: AqiDataInterface[] = useMemo(() => {
    return aqiOptions.filter((opt) => opt.id === aqi) as AqiDataInterface[];
  }, [aqi]);

  const { level, message, color } = aqidata[0];

  return (
    <Tooltip title={message} enterDelay={500} leaveDelay={200} placement='top-end'>
      <Chip size="medium" label={level} style={{ backgroundColor: color, cursor: 'help' }} />
    </Tooltip>
  );
};
