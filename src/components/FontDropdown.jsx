import { useContext } from "react"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CustomContext} from '../App'
import { fontChoices } from '../fonts'

export default function FontDropdown() {
  const {fontSelection, setFontSelection} = useContext(CustomContext);

  const handleChange = (e) => setFontSelection(e.target.value)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Fonts</InputLabel>
        <Select
          onChange={handleChange}
          value={fontSelection}
          label="Font Choices"
        >
          {fontChoices.map(font => <MenuItem value={font.class} key={font.class}>{font.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}