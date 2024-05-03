import { CSSObject, Theme } from '@mui/material';

export const paginationStyles = (theme: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'start',
});
