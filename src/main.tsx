import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';

import App from './App.tsx';
import { ThemeContextProvider } from './context/theme/ThemeContextProvider.tsx';
import { CityWeatherContextProvider } from './context/cityWheather/CityWeatherContext.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <CityWeatherContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </CityWeatherContextProvider>
  </QueryClientProvider>
);
