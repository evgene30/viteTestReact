import { CSSObject, Theme } from '@mui/material';

export const noResultStyles = (theme: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});
