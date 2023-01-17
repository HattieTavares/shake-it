import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [selection, setSelection] = React.useState('');

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selection}
          label={props.name}
          onChange={handleChange}
        >
          <MenuItem value={props.choiceOne}>{props.choiceOne}</MenuItem>
          <MenuItem value={props.choiceTwo}>{props.choiceTwo}</MenuItem>
          <MenuItem value={props.choiceThree}>{props.choiceThree}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}