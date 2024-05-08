import { Theme } from '@mui/material';

export const footerStyles = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(2),
  fontSize: '13px',
  '.linkBlock': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    gap: theme.spacing(3),
    '.nav-link-header': {
      textDecoration: 'none',
      color: 'white',
      ':hover': {
        opacity: 0.5,
        transition: '0.5s',
      },
    },
    '.active': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
  '.copyrightBlock': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
