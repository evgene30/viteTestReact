import { Theme } from '@mui/material';
import { width } from '@mui/system';

export const workStyle = (theme: Theme) => ({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  '& button': {
    width: '200px',
  },
});
