import React, { useEffect, useState } from "react";
import { TextField, Autocomplete, Box, CircularProgress } from "@mui/material";

import { useGeoLocationQuery, useWeatherByCoords } from "../../api/querys";
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import { LocationOptionType } from "../../utils/types";
import { useCityWeatherContext } from "../../context/cityWheather/CityWeatherContext";
import { Coord } from "../../utils/interfaces";

const max = 1000000000;

export const AutocompleteGeo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [cityCoords, setCityCoords] = useState<Coord>()
  const { data, isLoading, error } = useGeoLocationQuery(searchTerm);
  const { setWeatherData, setIsFetchingWeather } = useCityWeatherContext();
  const dynamicKey = Math.floor(Math.random() * max);
  const { refetch, isFetching } = useWeatherByCoords({ lat: cityCoords?.lat || 0, lon: cityCoords?.lon || 0 }!);

  useEffect(() => {
    async function fetchData() {
      if (cityCoords) {
        const makeRefetch = async () => {
          const result = await refetch();
      
          if (isFetching) {
            setIsFetchingWeather(true);
          }
      
          if (result.data) {
            setWeatherData(result.data);
            setIsFetchingWeather(false);
          }
        };

        makeRefetch();
      }
    }
    fetchData();
  }, [cityCoords]);

  const options = data?.map((location: LocationOptionType) => ({
    key: `${dynamicKey}-${location.lat}-${location.lon}`,
    name: location.name,
    country: location.country,
    state: location.state,
    local_names: location.local_names,
    lat : location.lat,
    lon: location.lon,
  }));

  return !error ? (
    <Autocomplete
      options={options || []}
      getOptionLabel={(option: LocationOptionType) =>
        `${option.name}${option.state ? `, ${option.state}` : ""}, ${option.country}`
      }
      fullWidth
      loading={isLoading}
      onInputChange={(_, value) => setSearchTerm(value)}
      onChange={(_, selectedOption) => {
        if (selectedOption) {
          setCityCoords({ lat: selectedOption.lat || 0, lon: selectedOption.lon || 0 });
        }
      }}
      renderOption={(props, option) => {
        const { ...otherProps } = props;
        return (
          <Box component="li" {...otherProps} key={option.key}>
            <WhereToVoteIcon sx={{ marginRight: 1, color: "primary.main" }} />
            {`${option.name}${option.state ? `, ${option.state}` : ""}, ${option.country}`}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search City"
          variant="outlined"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            },
          }}
        />
      )}
    />
  ) : (
    <div>Error: {error.message}</div>
  );
};
