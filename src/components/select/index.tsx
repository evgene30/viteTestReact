import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { formStyles } from '@/components/select/style';

export type Option = {
  id: string;
  value: string;
  label: string;
};

const options: Option[] = [
  { id: '1', value: 'option1', label: 'Option 1' },
  { id: '2', value: 'option2', label: 'Option 2' },
  { id: '3', value: 'option3', label: 'Option 3' },
];
export const SelectLabels = () => {
  const { control, handleSubmit } = useForm<{ Option: string }>({
    defaultValues: {
      Option: options[0].value,
    },
  });

  const onSubmit: SubmitHandler<{ Option: string }> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={formStyles}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Options</InputLabel>
          <Controller
            name="Option"
            control={control}
            render={({ field }) => (
              <Select
                labelId="demo-simple-select-label"
                label="Option"
                {...field}
              >
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: '150px', height: '54px', boxShadow: 'none' }}
        >
          Send form
        </Button>
      </Box>
    </form>
  );
};
