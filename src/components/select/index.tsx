import * as React from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { formStyles } from './style';
import { useSelect } from '@/store';

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
  const { select, addSelect } = useSelect();

  const handleOptionChange = (event: SelectChangeEvent<Option[]>) => {
    const { value } = event.target;
    addSelect(value as Option[]);
  };

  const handleDeleteSelectedOptions = (id: string) => {
    addSelect(select.filter((option: Option) => option.id !== id));
  };

  return (
    <FormControl sx={formStyles}>
      <InputLabel disableAnimation shrink={false}>
        + Add Filter
      </InputLabel>
      <Select
        sx={{ borderRadius: '50px', height: '30px' }}
        size="small"
        multiple
        value={select}
        onChange={handleOptionChange}
        renderValue={() => ''}
      >
        {options.map((option: Option) => (
          <MenuItem key={option.id} value={option as never}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <Button onClick={() => handleDeleteSelectedOptions('1')}>Element</Button>
    </FormControl>
  );
};
