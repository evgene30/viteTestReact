import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import {
  errorStyles,
  formStyles,
  selectStyles,
  switchStyles,
} from '@/components/select/style';

export type Option = {
  id: string;
  value: string;
  label: string;
};

type SelectLabelsProps = {
  setData: (value: { Option: string; switch: boolean }) => void;
};

const options: Option[] = [
  { id: '1', value: 'option1', label: 'Option 1' },
  { id: '2', value: 'option2', label: 'Option 2' },
  { id: '3', value: 'option3', label: 'Option 3' },
];
export const SelectLabels = ({ setData }: SelectLabelsProps) => {
  const {
    control,
    getValues,
    formState: { errors },
  } = useForm<{ Option: string; switch: boolean }>({
    mode: 'onChange',
    defaultValues: {
      Option: '',
      switch: true,
    },
  });

  return (
    <form onChange={() => setData(getValues())}>
      <Box sx={formStyles}>
        <Box sx={selectStyles}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Options</InputLabel>
            <Controller
              name="Option"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  sx={{ position: 'relative' }}
                  error={!!errors.Option}
                  labelId="demo-simple-select-label"
                  label="Option"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    setData(getValues());
                  }}
                  value={field.value}
                >
                  {options.map((option) => (
                    <MenuItem key={option.id} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.Option && (
              <Typography color="error" sx={errorStyles}>
                Error choice
              </Typography>
            )}
          </FormControl>
          <Box sx={switchStyles}>
            <Controller
              name="switch"
              control={control}
              render={({ field }) => (
                <Switch
                  {...field}
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <Typography fontSize={14}>Check option</Typography>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
