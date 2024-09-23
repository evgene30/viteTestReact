import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { FC } from 'react';
import theme from './theme';
import { router } from './routes/router';
import { store } from './components/store/store';
import { ModalProvider } from './components/modal/ModalContext';
import { Modal } from './components/modal/Modal';
import { ValidateProvider } from './hooks/useValidateContextForm';

const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ValidateProvider>
        <ModalProvider>
          <CssBaseline />
          <RouterProvider router={router} fallbackElement={null} />
          <Modal />
        </ModalProvider>
      </ValidateProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
