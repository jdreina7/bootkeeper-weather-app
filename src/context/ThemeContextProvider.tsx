import { FC, PropsWithChildren, useState } from 'react';
import { useMediaQuery } from '@mui/material';

import { ThemeContext } from './ThemeContext';

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useState(prefersDarkMode ? 'Dark' : 'Light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
