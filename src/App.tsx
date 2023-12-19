import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from './theme';
import { router } from './routes/router';

const queryClient = new QueryClient();
const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} fallbackElement={null} />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
