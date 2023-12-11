import React, { useEffect } from 'react';
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
  value?: string;
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

type TOptionState = { selectedOption: Array<Option>; switch: boolean };
export const SelectLabels = ({ setData }: SelectLabelsProps) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm<TOptionState>({
    mode: 'onChange',
    defaultValues: {
      selectedOption: [],
      switch: true,
    },
  });

  useEffect(() => {
    const subscription = watch((value) => setData(value as never));

    return () => {
      subscription.unsubscribe();
    };
  }, [setData, watch]);

  return (
    <form>
      <Box sx={formStyles}>
        <Box sx={selectStyles}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Options</InputLabel>
            <Controller
              name="selectedOption"
              control={control}
              render={({ field: { onChange, value, ...field } }) => (
                <Select
                  {...field}
                  multiple
                  value={value || []}
                  onChange={(e) => {
                    const selectedOptions = e.target.value;
                    onChange(selectedOptions);
                  }}
                  label="Options"
                  renderValue={(selectedIds) => {
                    const selectedValues = selectedIds.map((id) => {
                      const option = options.find(
                        (o: Option) => o.id === (id as never),
                      );

                      return option ? option.label : '';
                    });

                    return selectedValues.join(', ');
                  }}
                >
                  {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.selectedOption && (
              <Typography color="error" sx={errorStyles}>
                Error choice
              </Typography>
            )}
          </FormControl>
          <Box sx={switchStyles}>
            <Controller
              name="switch"
              control={control}
              render={({ field: { value, ...field } }) => (
                <Switch
                  {...field}
                  checked={value}
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
