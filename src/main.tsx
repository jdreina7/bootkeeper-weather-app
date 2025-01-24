import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'

import App from './App.tsx'
import { ThemeContextProvider } from './context/ThemeContextProvider.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
  </QueryClientProvider>
)
