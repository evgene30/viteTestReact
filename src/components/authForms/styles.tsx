import { Theme } from '@mui/material';

export const loginStyle = (theme: Theme) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '90vh',

  h1: {
    fontWeight: 'bold',
    margin: 0,
  },
  h2: {
    textAlign: 'center',
  },
  p: {
    fontSize: '14px',
    fontWeight: 100,
    lineHeight: '20px',
    letterSpacing: '0.5px',
  },
  span: {
    fontSize: '12px',
  },
  a: {
    color: '#333',
    fontSize: '14px',
    textDecoration: 'none',
    margin: '15px 0',
  },
  button: {
    borderRadius: '20px',
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '12px 45px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'transform 80ms ease-in',
  },
  'button:active': {
    transform: 'scale(0.95)',
  },
  'button:focus': {
    outline: 'none',
  },
  'button.ghost': {
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
  },
  form: {
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 50px',
    height: '100%',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#eee',
    border: 'none',
    padding: '12px 15px',
    margin: '8px 0',
    width: '100%',
  },
  '.container': {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow:
      '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    position: 'relative',
    overflow: 'hidden',
    width: '768px',
    maxWidth: '100%',
    minHeight: '480px',
  },
  '.form-container': {
    position: 'absolute',
    top: 0,
    height: '100%',
    transition: 'all 0.6s ease-in-out',
  },
  '.sign-in-container': {
    left: 0,
    width: '50%',
    zIndex: 2,
  },
  '.container.right-panel-active .sign-in-container': {
    transform: 'translateX(100%)',
  },
  '.sign-up-container': {
    left: 0,
    width: '50%',
    opacity: 0,
    zIndex: 1,
  },
  '.container.right-panel-active .sign-up-container': {
    transform: 'translateX(100%)',
    opacity: 1,
    zIndex: 5,
    animation: 'show 0.6s',
  },
  '@keyframes show': {
    '0%, 49.99%': {
      opacity: 0,
      zIndex: 1,
    },
    '50%, 100%': {
      opacity: 1,
      zIndex: 5,
    },
  },
  '.overlay-container': {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '50%',
    height: '100%',
    overflow: 'hidden',
    transition: 'transform 0.6s ease-in-out',
    zIndex: 100,
  },
  '.container.right-panel-active .overlay-container': {
    transform: 'translateX(-100%)',
  },
  '.overlay': {
    background: theme.palette.primary.main,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0 0',
    color: '#ffffff',
    position: 'relative',
    left: '-100%',
    height: '100%',
    width: '200%',
    transform: 'translateX(0)',
    transition: 'transform 0.6s ease-in-out',
  },
  '.container.right-panel-active .overlay': {
    transform: 'translateX(50%)',
  },
  '.overlay-panel': {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 40px',
    textAlign: 'center',
    top: 0,
    height: '100%',
    width: '50%',
    transform: 'translateX(0)',
    transition: 'transform 0.6s ease-in-out',
  },
  '.overlay-left': {
    transform: 'translateX(-20%)',
  },
  '.container.right-panel-active .overlay-left': {
    transform: 'translateX(0)',
  },
  '.overlay-right': {
    right: 0,
    transform: 'translateX(0)',
  },
  '.container.right-panel-active .overlay-right': {
    transform: 'translateX(20%)',
  },
  '.social-container': {
    margin: '20px 0',
    a: {
      borderRadius: '50%',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 5px',
      height: '40px',
      width: '40px',
    },
    'a:hover': {
      transition: '0.5s',
      opacity: '0.3',
    },
  },
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    fontSize: '14px',
    bottom: 0,
    position: 'fixed',
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 999,
    p: {
      margin: '10px 0',
    },
    i: {
      color: 'red',
    },
    a: {
      color: '#3c97bf',
      textDecoration: 'none',
    },
  },
});
