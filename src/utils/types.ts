export type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export type CityDataType = {
  lat?: number;
  lon?: number;
};

export type LocationOptionType = {
  name: string;
  country: string;
  state?: string;
  local_names?: object;
  lat?: number;
  lon?: number;
}
