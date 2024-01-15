import { CSSObject, Theme } from '@mui/material';

export const aboutStyle = (theme: Theme): CSSObject => ({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
});
