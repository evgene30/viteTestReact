import { Box, Button } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import { workStyle } from './style';

export const Work = () => {
  const [buttonStatus, setButtonStatus] = useState(false);

  useLayoutEffect(() => {
    const savedStatus = localStorage.getItem('buttonStatus') as string;
    if (savedStatus !== null) {
      setButtonStatus(JSON.parse(savedStatus));
    }
  }, []);

  const handleButtonClick = () => {
    const newStatus = !buttonStatus;
    setButtonStatus(newStatus);
    localStorage.setItem('buttonStatus', JSON.stringify(newStatus));
  };

  const handleCheckStatusAndRerender = (): void => {
    const savedStatus = JSON.parse(localStorage.getItem('buttonStatus') || '');
    if (savedStatus === true) {
      window.location.reload();
    } else {
      alert('Статус кнопки не равен true');
    }
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
