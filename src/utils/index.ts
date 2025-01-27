export const weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. formate: "Sunday 10, Jan"
 */
export const getDate = (dateUnix: number, timezone: number): string => {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

/**
 * @param {number} timeUnix Unix time in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time String. formate: "HH:MM AM/PM"
 */
export const getHours = function (timeUnix: number, timezone: number): string {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  //const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';

  return `${hours % 12 || 12} ${period}`;
};

/**
 * @param {number} mps Metter per seconds
 * @returns {number} Kilometer per hours
 */
export const mpsToKmh = (mps: number): number => {
  const mph = mps * 3600;

  return mph / 1000;
};

export const aqiOptions = [
  {
    id: 1,
    color: '#088A4B',
    level: 'Good',
    message: 'Air quality is considered satisfactory, and air pollution poses little or no risk',
  },
  {
    id: 2,
    color: '#58D3F7',
    level: 'Fair',
    message:
      'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
  },
  {
    id: 3,
    color: '#AEB404',
    level: 'Moderate',
    message: 'Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
  },
  {
    id: 4,
    color: '#FF8000',
    level: 'Unhealthy',
    message: 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.',
  },
  {
    id: 5,
    color: '#DF0101',
    level: 'Hazardous',
    message: 'Health warnings of emergency conditions. The entire population is more likely to be affected.',
  },
];

/**
 * @param str String to cast to camel case
 * @returns Transformed string
 */
export const transformToCamelCase = (str: string): string => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

/**
 * @param kelvin Kelvin temperature
 * @returns Celsius temperature
 */
export const kelvinToCelsius = (kelvin: number): number => {
  return Math.round(kelvin - 273.15);
};

export const generateDynamicKey = (): string => {
  const dynamicKey = Math.floor(Math.random() * 999999999);

  return `${dynamicKey} - ${Date.now()}`
}