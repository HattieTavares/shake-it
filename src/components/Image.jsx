import React from 'react'
import { useRef, useState } from 'react'
import { Box } from "@mui/material"
import { Grid } from "@mui/material"
import { Button } from '@mui/material';
import { shadows } from '@mui/system';
import polaroidFrame from "/polaroidFrame.png"

function Image() {

    const uploadImageRef = useRef(null);

    const [imageFile, setImageFile] = useState(null)

    const handleChange = (e) => {
        setImageFile(URL.createObjectURL(e.target.files[0]))
    }

    const renderImage = () => {
        <img src={imageFile} alt="Your Uploaded Photo" />
    }

    return(
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Box sx={{
                boxShadow: 2,
                backgroundImage: `url(${polaroidFrame})`,
                backgroundRepeat: "no-repeat",
                height: "420px",
                width: "350px",}}
            >
                <Box onClick={() => uploadImageRef.current && uploadImageRef.current.click()}

                style={{
                    background: "#373b3b",
                    height: "310px",
                    width: "310px",
                    marginTop: "20px",
                    marginLeft: "20px",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                }}>
                {imageFile ? renderImage() : <p>Upload Image</p>}
                </Box>
            </Box>
            <input onChange={handleChange} ref={uploadImageRef} type={"file"} accept={"image/*"} hidden />
            <Button disabled={!imageFile} variant="outlined">Download Photo</Button>
        </Grid>
    )
}

export default Image