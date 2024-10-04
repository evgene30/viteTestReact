import { Theme } from '@mui/material';

export const layoutStyle = (theme: Theme) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  '.content': {
    padding: theme.spacing(2),
    flex: 1,
  },
});
