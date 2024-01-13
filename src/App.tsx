import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import theme from './theme';
import { router } from './routes/router';
import { store } from './components/store/store';

const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} fallbackElement={null} />
    </ThemeProvider>
  </Provider>
);

export default App;
