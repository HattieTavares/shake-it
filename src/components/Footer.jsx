import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

export default function Footer() {
    return (
        <footer style={{backgroundColor:"#b3844e", color:"white", width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"10px 30px", fontFamily:"Just Me Again Down Here", fontSize:"1.5rem", marginTop:"50px", borderTop:"5px solid #c29d71"}}>
            <p style={{margin:"0"}}>&copy; 2022 Hattie Tavares</p>
            <p style={{margin:"0"}}><Link style={{textDecoration:"none"}} href='https://github.com/HattieTavares/shake-it' color="inherit" target="_blank"><GitHubIcon /> GitHub</Link></p>
        </footer>
    )
}