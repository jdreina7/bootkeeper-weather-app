import axios from 'axios';

const API_URL = 'http://api.openweathermap.org/geo/1.0/direct';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const fetchGeoLocation = async (query: string): Promise<[]> => {
  if (!query) return [];

  const { data } = await axios.get(API_URL, {
    params: {
      q: query,
      limit: 15,
      appid: API_KEY,
    },
  });

  return data;
};
