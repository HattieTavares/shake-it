import { useContext } from "react"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CustomContext } from "../App";
import { filterChoices } from '../filters';

export default function FilterDropdown() {
  const {filterSelection, setFilterSelection} = useContext(CustomContext);

  const handleChange = (e) => setFilterSelection(e.target.value)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>-- Choose a Filter --</InputLabel>
        <Select
          onChange={handleChange}
          value={filterSelection}
          label="filters"
        >
          {filterChoices.map(filter => <MenuItem value={filter.class} key={filter.class}>{filter.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}