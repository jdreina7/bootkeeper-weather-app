import { CityDataType } from './types';

export interface CityContextInterface {
  cityCoords: CityDataType | null;
  setCityCoords: (coords: Coord) => void;
  weatherData: weatherDataInterface | null;
  setWeatherData: (data: weatherDataInterface) => void;
  isFetchingWeather: boolean | null;
  setIsFetchingWeather: (isFetching: boolean) => void;
  airPollutionData: AirPollutionInterface | null;
  setAirPollutionData: (data: AirPollutionInterface) => void;
  forecastData: ForecastInterface | null;
  setForecastData: (data: ForecastInterface) => void;
}

// Weather interface
export interface weatherDataInterface {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: WeatherMain;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Rain {
  '1h': number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

// Air pollution interface
export interface AirPollutionInterface {
  coord: Coord;
  list: List[];
}

export interface List {
  main: AirPollutionMain;
  components: { [key: string]: number };
  dt: number;
}

export interface AirPollutionMain {
  aqi: number;
}

export interface AqiDataInterface {
  id: number;
  color: string;
  level: string;
  message: string;
}

export interface MeasurementInterface {
  title: string;
  value: number;
  icon: string;
  unit_symbol?: string;
}

export interface ForecastInterface {
  cod:     string;
  message: number;
  cnt:     number;
  list:    ForecastListItem[];
  city:    City;
}

export interface City {
  id:         number;
  name:       string;
  coord:      Coord;
  country:    string;
  population: number;
  timezone:   number;
  sunrise:    number;
  sunset:     number;
}

export interface ForecastListItem {
  dt:          number;
  main:        MainClass;
  weather:     Weather[];
  clouds:      Clouds;
  wind:        Wind;
  visibility?: number;
  pop:         number;
  rain?:       Rain;
  sys:         Sys;
  dt_txt:      Date;
}

export interface ForecastListItemToShow {
  icon: string;
  description: string;
  date: Date;
  temp_max: number;
}

export interface Clouds {
  all: number;
}

export interface MainClass {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  sea_level:  number;
  grnd_level: number;
  humidity:   number;
  temp_kf:    number;
}

export interface Rain {
  "3h": number;
}

export interface Sys {
  pod: Pod;
}

export enum Pod {
  D = "d",
  N = "n",
}

export interface Weather {
  id:          number;
  main:        MainEnum;
  description: Description;
  icon:        string;
}

export enum Description {
  BrokenClouds = "broken clouds",
  ClearSky = "clear sky",
  LightRain = "light rain",
  ModerateRain = "moderate rain",
  OvercastClouds = "overcast clouds",
}

export enum MainEnum {
  Clear = "Clear",
  Clouds = "Clouds",
  Rain = "Rain",
}

export interface Wind {
  speed: number;
  deg:   number;
  gust:  number;
}
