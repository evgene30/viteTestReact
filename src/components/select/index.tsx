/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-void */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
import { useSelector } from 'react-redux';
import {
  errorStyles,
  formStyles,
  selectStyles,
  switchStyles,
} from '@/components/select/style';
import { getSettings } from '../store/selector';

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
  const [options, setOptions] = useState<string[]>([]);
  const [open] = React.useState(false);
  const loading = open && checked && options.length === 0;

  const dataSettings = useSelector(getSettings({ keyPrimary: 'testSetting' }));

  console.log(dataSettings);

  const {
    control,
    watch,
    resetField,
    formState: { errors, isValid },
  } = useForm<TOptionState>({
    mode: 'onChange',
    defaultValues: {
      selectedOption: [],
      switch: true,
    },
  });

  useEffect(() => {
    const subscription = watch((value) => {
      setData(value as never);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setData, watch]);

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    void (async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      if (active) {
        setOptions([...data]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open && checked) {
      setOptions([]);
    }
    if (!checked) {
      setOptions(potions as never);
    }
  }, [checked, open]);

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
                        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          options.find((option: any) => value === option.id) ??
                          null
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
