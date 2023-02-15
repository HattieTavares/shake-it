import React from 'react'
import { useContext, useRef, useState } from 'react'
import { Box } from "@mui/material"
import { Grid } from "@mui/material"
import { Button } from '@mui/material';
import { styled} from '@mui/system';
import polaroidFrame from "/polaroidFrame.png"
import { CustomContext } from '../App';
import "../styles/userStyling.css"
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';

function Image() {

    const uploadImageRef = useRef(null);

    const imageResultRef = useRef(null);

    const [imageFile, setImageFile] = useState(null)

    const { filterSelection } = useContext(CustomContext)

    const { fontSelection } = useContext(CustomContext)

    const { userText } = useContext(CustomContext)

    const handleChange = (e) => {
        setImageFile(URL.createObjectURL(e.target.files[0]))
    }

    function checkBrowser() {
        const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if(isSafari || iOS) {
            return true
        } else {
            return false
        }
    }

    const handleDownload = () => {
        const safari = checkBrowser()
        console.log(safari)
        if(safari) {
            htmlToImage.toPng(imageResultRef.current)
            .then(function (dataURL1) {
                var link = document.createElement("a");
                link.download = "my-shake-it.png";
                link.href = dataURL1;
                link.click();

                htmlToImage.toPng(imageResultRef.current)
                .then(function (dataURL2) {
                    var link = document.createElement("a");
                    link.download = "my-shake-it.png";
                    link.href = dataURL2;
                    link.click();

                    resolve(dataURL2);
                });
            })
            .catch(function (error) {
                console.log("Oops, something went wrong.", error)
            })
        } else {
            htmlToImage.toPng(imageResultRef.current)
            .then(function (dataUrl) {
                saveAs(dataUrl, 'my-shake-it.png');
            })
            .catch(function (error) {
                console.log("Oops, something went wrong.", error)
            })
        }
    }

    const StyledImage = styled('img')(props => ({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }))

    const renderImage = () => (
        <StyledImage className={filterSelection} src={imageFile} alt="Your Uploaded Photo" />
    )

    return(
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Box sx={{
                boxShadow:  2,
                
                backgroundImage: `url(${polaroidFrame})`,
                backgroundRepeat: "no-repeat",
                height: "420px",
                width: "350px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
                }}
                ref={imageResultRef}
            >
                <Box onClick={() => uploadImageRef.current && uploadImageRef.current.click()}

                sx={{
                    background: "#373b3b",
                    height: "310px",
                    width: "310px",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    position: "relative",
                    left: "20px",
                    top: "20px",
                }}>
                {imageFile ? renderImage() : <p>Upload Image</p>}
                </Box>
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-around", height:"90px",}}>
                    <span className={fontSelection}>{userText.topText}</span>
                    <span className={fontSelection}>{userText.bottomText}</span>
                </Box>
            </Box>
            <input onChange={handleChange} ref={uploadImageRef} type={"file"} accept={"image/*"} hidden />
            <Button disabled={!imageFile} onClick={handleDownload} variant="outlined">Download Photo</Button>
        </Grid>
    )
}

export default Image