import { Theme } from '@mui/material';

export const workStyle = (theme: Theme) => ({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
});
