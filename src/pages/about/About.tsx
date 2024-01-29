import React from 'react';
import {
  Box,
  Button,
  TextField,
  Autocomplete,
  AutocompleteProps,
} from '@mui/material';
import { aboutStyle } from './style';

export const About = () => {
  function createMuiComponent<T>(
    Component: React.ComponentType<T>,
    defaultProps: T,
  ) {
    return function MuiComponent(props: T & React.Attributes) {
      return <Component {...defaultProps} {...props} />;
    };
  }

  const PrimaryButton = createMuiComponent(Button, {
    variant: 'contained',
    color: 'primary',
  });
  const SecondaryButton = createMuiComponent(Button, {
    variant: 'outlined',
    color: 'secondary',
  });
  const DefaultTextField = createMuiComponent(TextField, {
    variant: 'outlined',
  });

  const AutocompleteComponent = createMuiComponent<
    AutocompleteProps<unknown, boolean, boolean, boolean>
  >(Autocomplete, {
    renderInput: (params) => (
      <TextField {...params} label="Выберите вариант" variant="outlined" />
    ),
    options: ['1', '3'],
  });

  return (
    <Box sx={aboutStyle as never}>
      <AutocompleteComponent />
    </Box>
  );
};
