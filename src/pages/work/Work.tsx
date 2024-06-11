import { Box, Button } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import { workStyle } from './style';
import { CustomSnackbar } from '@/components/snackbar/CustomSnackbar';

export const Work = () => {
  const [buttonStatus, setButtonStatus] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    // нажатие вне кнопки
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useLayoutEffect(() => {
    const savedStatus = localStorage.getItem('buttonStatus');
    if (savedStatus) {
      setButtonStatus(JSON.parse(savedStatus) as boolean);
    }
  }, []);

  const handleButtonClick = () => {
    const newStatus = !buttonStatus;
    setButtonStatus(newStatus);
    localStorage.setItem('buttonStatus', JSON.stringify(newStatus));
    setOpen(false);
  };

  const handleCheckStatusAndRerender = (): void => {
    const savedStatus = JSON.parse(localStorage.getItem('buttonStatus') || '');
    if (savedStatus) {
      console.log(savedStatus);
    }
    setOpen(true);
  };

  return (
    <>
      <Box sx={workStyle}>
        <Button
          variant="contained"
          color={buttonStatus ? 'success' : 'warning'}
          onClick={handleButtonClick}
        >
          {buttonStatus ? 'Статус: true' : 'Статус: false'}
        </Button>
        <Button variant="contained" onClick={handleCheckStatusAndRerender}>
          Check status
        </Button>
      </Box>
      <CustomSnackbar
        openBar={open}
        handleClose={handleClose}
        loadStatus={buttonStatus}
      />
    </>
  );
};
