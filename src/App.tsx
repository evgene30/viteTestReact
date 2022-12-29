import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import { router } from './routes/router';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} fallbackElement={null} />
  </ThemeProvider>
);

export default App;
