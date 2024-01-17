import React, { useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Switch,
  TextField,
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
  title: string;
  label: string;
};

type SelectLabelsProps = {
  setData: (value: { Option: string; switch: boolean }) => void;
};

const potions: Option[] = [
  { id: '1', title: 'option1', label: 'Option 1' },
  { id: '2', title: 'option2', label: 'Option 2' },
  { id: '3', title: 'option3', label: 'Option 3' },
];

type TOptionState = { selectedOption: Array<Option>; switch: boolean };
export const SelectLabels = ({ setData }: SelectLabelsProps) => {
  const [checked, setChecked] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);

  const {
    control,
    resetField,
    formState: { errors, isValid },
  } = useForm<TOptionState>({
    mode: 'onChange',
    defaultValues: {
      selectedOption: [],
      switch: true,
    },
  });

  return (
    <form>
      <Box sx={formStyles}>
        <Box sx={selectStyles}>
          <FormControl fullWidth>
            <Controller
              name="selectedOption"
              control={control}
              rules={{
                required: 'this field is required',
              }}
              render={({ field, fieldState: { error } }) => {
                const { onChange, value, ref, name } = field;

                return (
                  <Autocomplete
                    value={
                      value
                        ? options.find(
                            (option: Option) => String(value) === option.id,
                          ) ?? null
                        : null
                    }
                    getOptionLabel={(option) => option.label}
                    filterOptions={(opts, state) =>
                      opts.filter((opt) => opt.label.includes(state.inputValue))
                    }
                    onChange={(e, newValue) => {
                      onChange(newValue ? newValue.id : null);
                    }}
                    id="controllable-states-demo"
                    options={potions}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={name}
                        inputRef={ref}
                        error={!!error}
                      />
                    )}
                  />
                );
              }}
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
                  value={value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <Typography fontSize={14}>Check option</Typography>
          </Box>
          <Button
            disabled={!isValid}
            onClick={() => {
              setChecked(!checked);
              resetField('selectedOption', { defaultValue: [] });
            }}
            variant="outlined"
            color={checked ? 'error' : 'success'}
          >
            Load data
          </Button>
        </Box>
      </Box>
    </form>
  );
};
