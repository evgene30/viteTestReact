import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import theme from './theme';
import { router } from './routes/router';
import { store } from './components/store/store';
import { ModalProvider } from './components/modal/ModalContext';
import { Modal } from './components/modal/Modal';

const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <CssBaseline />
        <RouterProvider router={router} fallbackElement={null} />
        <Modal />
      </ModalProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
