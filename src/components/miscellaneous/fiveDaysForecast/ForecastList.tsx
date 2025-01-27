import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

import { useCityWeatherContext } from '../../../context/cityWheather/CityWeatherContext';
import { generateDynamicKey, kelvinToCelsius, monthNames, weekDayNames } from '../../../utils';
import { ForecastListItemToShow } from '../../../utils/interfaces';

const ForecastListContentSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ItemIconDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const ContentText = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 1em;
  text-align: center;
`;

export const ForecastList = () => {
  const [listData, setListData] = useState<ForecastListItemToShow[]>([]);
  const { forecastData } = useCityWeatherContext();

  useEffect(() => {
    const forecastItems: ForecastListItemToShow[] = [];
    if (forecastData) {
      for (let i = 7, len = forecastData?.list.length; i < len; i += 8) {
        const {
          main: { temp_max },
          weather,
          dt_txt,
        } = forecastData.list[i];
        const [{ icon, description }] = weather;
        const date = new Date(dt_txt);

        forecastItems.push({ temp_max, icon, description, date });
      }

      setListData(forecastItems);
    }
  }, [forecastData]);

  return listData ? (
    <ForecastListContentSection>
      {listData.map((item) => {
        return (
          <ListItem key={generateDynamicKey()}>
            <ItemIconDiv>
              <img
                src={`/weather_icons/${item.icon === '03d' || item.icon === '03n' ? '03dn' : item.icon}.svg`}
                alt={item.description}
                width={50}
              />
              <Typography variant="h6">{kelvinToCelsius(item.temp_max)}°</Typography>
            </ItemIconDiv>

            <ContentText>
              {weekDayNames[item.date.getUTCDay()]}, {item.date.getDate()} {monthNames[item.date.getUTCMonth()]}
            </ContentText>
          </ListItem>
        );
      })}
    </ForecastListContentSection>
  ) : null;
};
