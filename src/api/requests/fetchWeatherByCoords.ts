import axios from 'axios';

import { Coord, weatherDataInterface } from '../../utils/interfaces';

const API_BASE_URL = import.meta.env.VITE_OPEN_WEATHER_API_BASE_URL;
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export const fetchWeatherByCoords = async (coords: Coord): Promise<weatherDataInterface> => {
  if (!coords) return {} as weatherDataInterface;

  const { lat, lon } = coords;

  const { data } = await axios.get(`${API_BASE_URL}/data/2.5/weather`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });

  return data;
};
