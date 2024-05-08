import { InputBase, Theme, alpha, styled } from '@mui/material';
import { padding } from '@mui/system';

export const headerStyle = (theme: Theme) => ({
  padding: theme.spacing(0.5),
  boxShadow: 'none',
  display: 'flex',
  justifyContent: 'center',
  '.headerTitle': {
    a: {
      color: 'white',
      textDecoration: 'none',
    },
  },
  '.MuiToolbar-root': {
    gap: '20px',
    minHeight: 'auto',
    '.nav-link-header': {
      textDecoration: 'none',
      color: 'white',
    },
    button: {
      fontSize: 14,
    },
    '.active': {
      color: theme.palette.secondary.main,
    },
  },
});

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  height: '30px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.5, 0.5, 0.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const buttonHeader = () => ({
  ':hover': {
    opacity: 0.6,
    transition: '0.6s',
  },
});
