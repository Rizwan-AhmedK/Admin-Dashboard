import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl style={{width: "100%"}}  sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Role</InputLabel>
      <Select

        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Role"
        onChange={handleChange}
      >
        <MenuItem value="">
        </MenuItem>
        <MenuItem value="ustaad">Ustaad</MenuItem>
        <MenuItem value="user">User</MenuItem>
      </Select>
    </FormControl>
  );
}
