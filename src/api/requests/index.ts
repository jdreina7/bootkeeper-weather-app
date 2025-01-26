import axios from 'axios';

import { AirPollutionInterface, Coord, ForecastInterface, weatherDataInterface } from '../../utils/interfaces';

const API_BASE_URL = import.meta.env.VITE_OPEN_WEATHER_API_BASE_URL;
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

// Url segments
const URL_GEO_SEGMENT = '/geo/1.0/direct';
const URL_COMMON_SEGMENT = '/data/2.5';
const URL_WEATHER_SEGMENT = '/weather';
const URL_AIR_POLLUTION_SEGMENT = '/air_pollution';
const URL_FORECAST_SEGMENT = '/forecast';

/**
 * Query to search a new city by its name
 * @param query String to search for a new city
 * @returns Weather data from the city
 */
export const fetchGeoLocation = async (query: string): Promise<[]> => {
  if (!query) return [];

  const { data } = await axios.get(`${API_BASE_URL}${URL_GEO_SEGMENT}`, {
    params: {
      q: query,
      limit: 15,
      appid: API_KEY,
    },
  });

  return data;
};

/**
 * Query to search weather data based on the city coords
 * @param coords Lat and Long for get the city weather
 * @returns More data about the city weather
 */
export const fetchWeatherByCoords = async (coords: Coord): Promise<weatherDataInterface> => {
  if (!coords) return {} as weatherDataInterface;

  const { lat, lon } = coords;

  const { data } = await axios.get(`${API_BASE_URL}${URL_COMMON_SEGMENT}${URL_WEATHER_SEGMENT}`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });

  return data;
};

export const fetchAirPollution = async (coords: Coord): Promise<AirPollutionInterface> => {
  if (!coords) return {} as AirPollutionInterface;

  const { lat, lon } = coords;

  const { data } = await axios.get(`${API_BASE_URL}${URL_COMMON_SEGMENT}${URL_AIR_POLLUTION_SEGMENT}`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });

  return data;
};

export const fetchForecastData = async (coords: Coord): Promise<ForecastInterface> => {
  if (!coords) return {} as ForecastInterface;

  const { lat, lon } = coords;

  const { data } = await axios.get(`${API_BASE_URL}${URL_COMMON_SEGMENT}${URL_FORECAST_SEGMENT}`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });

  return data;
};