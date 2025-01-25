import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_OPEN_WEATHER_API_BASE_URL;
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export const fetchGeoLocation = async (query: string): Promise<[]> => {
  if (!query) return [];

  const { data } = await axios.get(`${API_BASE_URL}/geo/1.0/direct`, {
    params: {
      q: query,
      limit: 15,
      appid: API_KEY,
    },
  });

  return data;
};
