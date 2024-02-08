import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { aboutStyle } from './style';
import { useCustomHook } from '@/hooks/useGetData';

export const About = () => {
  const [initValue, setInitValue] = useState('1');

  const { value, someFunction } = useCustomHook(initValue);

  const handleClick = () => {
    setInitValue('2');

    someFunction('3');
  };

  return (
    <Box sx={aboutStyle}>
      <Button onClick={handleClick} variant="outlined">
        Click
      </Button>
    </Box>
  );
};
