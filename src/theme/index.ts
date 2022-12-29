import { createTheme } from '@mui/material';

export const white = {
  palette: {
    type: 'light',
    primary: {
      main: '#47374c',
    },
    secondary: {
      main: 'rgba(127,144,201)',
    },
    error: {
      main: '#dc645b',
    },
  },
  typography: {
    fontFamily: 'Lato',
    fontSize: 13,
  },
  spacing: 8,
  shape: {
    borderRadius: 6,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
  },
};

const theme = createTheme(white);

export default theme;
