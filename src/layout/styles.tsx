import { Theme } from '@mui/material';

export const layoutStyle = (theme: Theme) => ({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  '.content': {
    padding: theme.spacing(2),
    flex: 1,
  },
  '.footer': {
    flexShrink: 0,
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.common.white,
  },
});
