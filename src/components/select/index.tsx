/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-void */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
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
import { useQueryData } from '../hooks/useQuery';

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
  const { data: queryData } = useQueryData();
  console.log(queryData?.data);
  const [checked, setChecked] = useState(false);
  const [options, setOptions] = useState<Option[]>(potions);
  const [open, setOpen] = React.useState(false);
  const loading = open && checked && options.length === 0;

  const {
    control,
    watch,
    resetField,
    formState: { errors },
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
      setOptions(potions);
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
              render={({ field: { onChange, value, name, ...field } }) => (
                <Autocomplete
                  {...field}
                  open={open}
                  onOpen={() => {
                    setOpen(true);
                  }}
                  onClose={() => {
                    setOpen(false);
                  }}
                  loading={loading}
                  fullWidth
                  isOptionEqualToValue={(option, dataVal) =>
                    option.id === dataVal.id
                  }
                  clearIcon={false}
                  // @ts-ignore
                  inputValue={value['title'] || ''}
                  options={options}
                  clearOnEscape
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={name}
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {loading ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                      }}
                    />
                  )}
                  onChange={(e, data) => {
                    onChange(data);
                  }}
                />
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
                  value={value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <Typography fontSize={14}>Check option</Typography>
          </Box>
          <Button
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
