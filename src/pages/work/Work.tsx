import { Box, Button } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { workStyle } from './style';
import { CustomSnackbar } from '@/components/snackbar/CustomSnackbar';

interface Window {
  __RUNTIME_CONFIG__: {
    API_URL: string;
    ANOTHER_CONFIG: string;
  };
}

// eslint-disable-next-line no-underscore-dangle
const config = (window as unknown as Window).__RUNTIME_CONFIG__;

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
      console.log(config);
    }
    setOpen(true);
  };

  return (
    <>
      <Box sx={workStyle}>
        {buttonStatus ? (
          <Link target="_blank" to={config.API_URL} reloadDocument>
            <Button
              variant="contained"
              color="success"
              onClick={handleButtonClick}
            >
              Статус: true
            </Button>
          </Link>
        ) : (
          <Button
            variant="contained"
            color="warning"
            onClick={handleButtonClick}
          >
            Статус: false
          </Button>
        )}

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
