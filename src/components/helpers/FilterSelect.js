// FilterSelect.js
import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';

const FilterSelect = ({ label, options, value, onChange }) => {
  return (
    <FormControl fullWidth variant="outlined" sx={{ margin: '1% 2%' }}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        multiple
        value={value}
        onChange={onChange}
        renderValue={(selected) => selected.join(', ')}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={value.indexOf(option) > -1} />
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
