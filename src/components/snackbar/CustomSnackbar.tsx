import { Snackbar, IconButton, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CustomSnackbarProps {
  openBar: boolean;
  handleClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
  loadStatus?: boolean;
}

export const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  openBar = false,
  handleClose,
  loadStatus = false,
}) => {
  const { palette } = useTheme();

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={(event) => handleClose(event, 'close')}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      message={loadStatus ? 'Success!' : 'Loading ... false'}
      open={openBar}
      onClose={handleClose}
      autoHideDuration={3000}
      action={action}
      ContentProps={{
        style: {
          fontSize: '15px',
          fontWeight: 500,
          width: '350px',
          boxShadow: '4px 4px 15px 10px rgba(0,0,0,0.1)',
          backgroundColor: palette[loadStatus ? 'success' : 'error'].main,
        },
      }}
    />
  );
};
