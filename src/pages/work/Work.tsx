import { Box, Button, Snackbar } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import { workStyle } from './style';

export const Work = () => {
  const [buttonStatus, setButtonStatus] = useState(false);

  useLayoutEffect(() => {
    const savedStatus = localStorage.getItem('buttonStatus');
    if (savedStatus !== null && typeof savedStatus === 'string') {
      setButtonStatus(JSON.parse(savedStatus) as boolean);
    }
  }, []);

  const handleButtonClick = () => {
    const newStatus = !buttonStatus;
    setButtonStatus(newStatus);
    localStorage.setItem('buttonStatus', JSON.stringify(newStatus));
  };

  const handleCheckStatusAndRerender = (): JSX.Element => {
    const savedStatus = JSON.parse(localStorage.getItem('buttonStatus') || '');
    if (savedStatus === true) {
      window.location.reload();

      return <Box />;
    }

    return (
      <Snackbar autoHideDuration={3000} message="Статус кнопки не равен true" />
    );
  };

  return (
    <Box sx={workStyle}>
      <Button
        variant="contained"
        color={buttonStatus ? 'success' : 'warning'}
        onClick={handleButtonClick}
      >
        {buttonStatus ? 'Статус: true' : 'Статус: false'}
      </Button>
      <Button variant="contained" onClick={handleCheckStatusAndRerender}>
        Проверить статус и перерендерить
      </Button>
    </Box>
  );
};
