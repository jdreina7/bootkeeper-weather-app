import { useQuery } from "@tanstack/react-query";

import { Coord } from "../../utils/interfaces";
import { fetchAirPollution, fetchForecastData, fetchGeoLocation, fetchWeatherByCoords } from "../requests";

export const useGeoLocationQuery = (query: string) => {
  return useQuery({
    queryKey: ["geoLocation", query],
    queryFn: () => fetchGeoLocation(query),
    enabled: !!query,
  });
};

export const useWeatherByCoords = (coords: Coord) => {
  return useQuery({
    queryKey: ["weather-by-coords", coords],
    queryFn: () => fetchWeatherByCoords(coords),
    enabled: !!coords,
  });
};

export const useAirPollution = (coords: Coord) => {
  return useQuery({
    queryKey: ["air-pollution", coords],
    queryFn: () => fetchAirPollution(coords),
    enabled: !!coords,
  });
};

export const useForecastData = (coords: Coord) => {
  return useQuery({
    queryKey: ["forecast-data", coords],
    queryFn: () => fetchForecastData(coords),
    enabled: !!coords,
  });
};
