import React, { useState } from "react";
import { TextField, Autocomplete, Box, CircularProgress } from "@mui/material";

import { useGeoLocationQuery } from "../../api/querys/useGeoLocationQuery";
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';


interface LocationOption {
  name: string;
  country: string;
  state?: string;
}

export const AutocompleteGeo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, isLoading } = useGeoLocationQuery(searchTerm);

  const options = data?.map((location: LocationOption) => ({
    name: location.name,
    country: location.country,
    state: location.state,
  }));

  return (
    <Autocomplete
      options={options || []}
      getOptionLabel={(option: LocationOption) =>
        `${option.name}${option.state ? `, ${option.state}` : ""}, ${option.country}`
      }
      fullWidth
      loading={isLoading}
      onInputChange={(_, value) => setSearchTerm(value)}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <WhereToVoteIcon sx={{ marginRight: 1, color: "primary.main" }} />
          {`${option.name}${option.state ? `, ${option.state}` : ""}, ${option.country}`}
        </Box>
      )}
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
  );
};
