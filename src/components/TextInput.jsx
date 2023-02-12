import { useContext } from "react"
import { TextField } from '@mui/material'
import { CustomContext } from "../App";

export default function TextInput() {
    const {userText, setUserText} = useContext(CustomContext);

    function handleChange(event) {
        const {name, value} = event.target
        setUserText(prevUserText => ({
            ...prevUserText,
            [name]: value
        }))
    }

    return (
        <form action="">
            <TextField id="outlined-basic" margin="normal" inputProps={{ maxLength: 34 }} helperText="Character limit per input: 34" placeholder="Your Text Here" variant="outlined" name="topText" value={userText.topText} onChange={handleChange} />
            
            <TextField id="outlined-basic" margin="normal" inputProps={{ maxLength: 34 }} helperText=" " placeholder="Your Text Here" variant="outlined" name="bottomText" value={userText.bottomText} onChange={handleChange} />
        </form>
    )
}