import { Theme } from '@mui/material';
import { fontSize, height, padding } from '@mui/system';

export const layoutStyle = (theme: Theme) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  '.content': {
    padding: theme.spacing(2),
    flex: 1,
  },
});
