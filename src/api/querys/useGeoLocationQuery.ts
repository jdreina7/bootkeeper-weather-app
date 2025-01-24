import { useQuery } from "@tanstack/react-query";

import { fetchGeoLocation } from "../requests/fetchGeoLocation";

export const useGeoLocationQuery = (query: string) => {
  return useQuery({
    queryKey: ["geoLocation", query],
    queryFn: () => fetchGeoLocation(query),
    enabled: !!query,
  });
};
