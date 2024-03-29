import React from 'react'
import { useContext, useRef, useState } from 'react'
import { Box } from "@mui/material"
import { Grid } from "@mui/material"
import { Button } from '@mui/material';
import { styled } from '@mui/system';
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

    const regDownload = async () => {
        htmlToImage.toPng(imageResultRef.current)
        .then(function (dataUrl) {
            saveAs(dataUrl, 'my-shake-it.png');
        })
        .catch(function (error) {
            console.log("Oops, something went wrong.", error)
        })
    }

    const safariDownload = () => {
        setTimeout(() => {
            // ios/macos redundant painting
            htmlToImage.toPng(imageResultRef.current)
            .then(() => {
              htmlToImage.toPng(imageResultRef.current)
              .then(() => {
                htmlToImage.toPng(imageResultRef.current)
                .then(function (dataUrl) {
                    saveAs(dataUrl, 'my-shake-it.png');
                })
              })
            })
            .catch((error) => {
              console.error('oops, something went wrong!', error);
              alert('Ooops! Something went wrong. Try again.');
            });
          }, 1500);
    }

    const handleDownload = () => {
        const safari = checkBrowser()
        console.log(safari)
        if(safari) {
            safariDownload()
        } else {
            regDownload()
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

    const StyledButton = styled('button')(props => ({
        width:"80%",
        backgroundColor:"white",
        padding: "0.4em",
        fontFamily:"Just Me Again Down Here",
        textAlign: "center",
        fontSize:"1.5rem",
        border: "1px solid black"
    }))

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
            <StyledButton sx={{marginTop:"10px",}} disabled={!imageFile} onClick={handleDownload} variant="outlined">Download Image</StyledButton>
        </Grid>
    )
}

export default Image