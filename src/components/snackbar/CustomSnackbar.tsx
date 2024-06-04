/* eslint-disable @typescript-eslint/dot-notation */
import React from 'react';
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
      message={loadStatus ? 'Status loading ... true' : 'Loading ... false'}
      open={openBar}
      onClose={handleClose}
      autoHideDuration={loadStatus ? 3000 : null}
      action={action}
      ContentProps={{
        style: {
          width: '350px',
          boxShadow: '4px 4px 15px 10px rgba(0,0,0,0.1)',
          backgroundColor: palette[loadStatus ? 'success' : 'error'].main,
        },
      }}
    />
  );
};
