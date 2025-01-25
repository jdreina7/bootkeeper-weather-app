import { useQuery } from "@tanstack/react-query";

import { fetchWeatherByCoords } from "../requests/fetchWeatherByCoords";
import { Coord } from "../../utils/interfaces";

export const useWeatherByCoords = (coords: Coord) => {
  return useQuery({
    queryKey: ["geoLocation", coords],
    queryFn: () => fetchWeatherByCoords(coords),
    enabled: !!coords,
  });
};