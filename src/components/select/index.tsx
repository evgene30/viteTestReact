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

type Search = {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: unknown;
  };
  company: { name: string; catchPhrase: string; bs: string };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

type SelectLabelsProps = {
  setData?: () => void;
  closeModal?: () => void;
  data?: Search[];
  setDeleteSearchTextAction?: () => void;
};

const potions: Option[] = [
  { id: '1', title: 'option1', label: 'Option 1' },
  { id: '2', title: 'option2', label: 'Option 2' },
  { id: '3', title: 'option3', label: 'Option 3' },
];

type TOptionState = { selectedOption: Array<Option>; switch: boolean };

export const SelectLabels = ({
  closeModal,
  data,
  setDeleteSearchTextAction,
}: SelectLabelsProps) => {
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
  const filteredOptions = data?.map((option: Search | Option) => {
    if (option instanceof Option) {
      return option;
    }

    return null;
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
                            (option: Option | Search) =>
                              String(value) === option.id,
                          ) ?? null
                        : null
                    }
                    getOptionLabel={(option: Option | null) => {
                      if (option) {
                        return option.label;
                      }

                      return '';
                    }}
                    onChange={(e, newValue) => {
                      onChange(newValue ? newValue.id : null);
                    }}
                    id="controllable-states-demo"
                    options={filteredOptions as never}
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
              if (setDeleteSearchTextAction && closeModal) {
                setDeleteSearchTextAction();
                closeModal();
              }
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
