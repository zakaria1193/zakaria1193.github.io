// FilterSelect.js
import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const FilterSelect = ({ label, options, value, onChange }) => {
  return (
    <FormControl fullWidth variant="outlined" sx={{ marginRight: 2, marginBottom: 2 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        multiple
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
