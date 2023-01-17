import React from 'react'
import { Box } from "@mui/material"
import { Button } from '@mui/material';

function Image() {
    return(
        <Box>
            <img src="polaroidFrame.png" alt="" />
            <Button variant="outlined">Download Photo</Button>
        </Box>
    )
}

export default Image