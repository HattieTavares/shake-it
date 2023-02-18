import { useContext } from "react"
import { TextField } from '@mui/material'
import { CustomContext } from "../App";
import { styled } from '@mui/system';

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
        <form action="" style={{display:"flex", flexDirection:"column"}}>
            <TextField sx={{width: "350px", backgroundColor:"white", border:"1px solid black", textAlign:"center"}} id="outlined-basic" margin="normal" inputProps={{ maxLength: 34 }} placeholder="Your Text Here" variant="outlined" name="topText" value={userText.topText} onChange={handleChange} />
            
            <TextField sx={{width: "350px", backgroundColor:"white", border:"1px solid black", textAlign:"center"}} id="outlined-basic" margin="normal" inputProps={{ maxLength: 34 }} placeholder="Your Text Here" variant="outlined" name="bottomText" value={userText.bottomText} onChange={handleChange} />
        </form>
    )
}