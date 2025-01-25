import { useQuery } from "@tanstack/react-query";

import { Coord } from "../../utils/interfaces";
import { fetchGeoLocation, fetchWeatherByCoords } from "../requests";

export const useGeoLocationQuery = (query: string) => {
  return useQuery({
    queryKey: ["geoLocation", query],
    queryFn: () => fetchGeoLocation(query),
    enabled: !!query,
  });
};

export const useWeatherByCoords = (coords: Coord) => {
  return useQuery({
    queryKey: ["geoLocation", coords],
    queryFn: () => fetchWeatherByCoords(coords),
    enabled: !!coords,
  });
};
