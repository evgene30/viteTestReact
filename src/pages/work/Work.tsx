import { Box, Button } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

import { workStyle } from './style';
import { CustomSnackbar } from '@/components/snackbar/CustomSnackbar';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const Work = () => {
  const { value, setValue } = useLocalStorage('buttonStatus', false);
  const [open, setOpen] = useState(false);

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    // нажатие вне кнопки
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleButtonClick = () => {
    setValue(!value);
    setOpen(false);
  };

  const handleCheckStatusAndRerender = (): void => {
    setOpen(true);
  };

  return (
    <>
      <Box sx={workStyle}>
        {value ? (
          <Button
            variant="contained"
            color="success"
            onClick={handleButtonClick}
          >
            Статус: true
          </Button>
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
        loadStatus={value as boolean}
      />
    </>
  );
};
