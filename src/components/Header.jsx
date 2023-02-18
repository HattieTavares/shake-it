import React from 'react'
import { Box } from "@mui/material"
import Overview from './Overview'
import paperHeader from "/paperHeader.png"

export default function Header() {
  return (
    <Box sx={{
        boxShadow:  2,
        backgroundImage: `url(${paperHeader})`,
        backgroundRepeat: "no-repeat",
        objectFit: 'contain',
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin:"30px 0px"
      }}
    >
      <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100ch",
          padding:"10px 0px"
        }}>
        <h1 style={{fontFamily:"Just Me Again Down Here", fontSize:"40px", fontWeight:"normal", margin:"0"}}>Shake-It</h1>
        <Overview />
      </div>
    </Box>
  )
}
