import { Theme } from '@mui/material';
import { fontWeight } from '@mui/system';
import { opacity } from 'html2canvas/dist/types/css/property-descriptors/opacity';
import { textDecorationLine } from 'html2canvas/dist/types/css/property-descriptors/text-decoration-line';

export const footerStyles = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  justifyContent: 'start',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(2),
  fontSize: '13px',
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
});
