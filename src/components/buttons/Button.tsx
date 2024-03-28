import { Button as ButtonMUI } from '@mui/material';
import React, { ReactNode } from 'react';

export const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;

  children: ReactNode;
}) => (
  <ButtonMUI variant="outlined" onClick={onClick}>
    {children}
  </ButtonMUI>
);
