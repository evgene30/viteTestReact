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
  '.footer': {
    flexShrink: 0,
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    justifyContent: 'start',
    alignItems: 'center',
    gap: theme.spacing(3),
    padding: theme.spacing(1.5),
    fontSize: '14px',
  },
});
