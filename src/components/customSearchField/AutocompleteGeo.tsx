import React, { useState } from "react";
import { TextField, Autocomplete, Box, CircularProgress } from "@mui/material";

import { useGeoLocationQuery } from "../../api/querys/useGeoLocationQuery";
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import { LocationOptionType } from "../../utils/types";
import { useCityWeatherContext } from "../../context/cityWheather/CityWeatherContext";

const max = 1000000000;


export const AutocompleteGeo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, isLoading, error } = useGeoLocationQuery(searchTerm);
  const { setCityWeatherData } = useCityWeatherContext();
  const dynamicKey = Math.floor(Math.random() * max);

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
          setCityWeatherData(selectedOption);
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
          fullWidth
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
