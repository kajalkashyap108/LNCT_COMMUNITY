import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Box} from "@mui/material";


function About()
{
    return(
        <Box>
            <Navbar></Navbar>
            <p>thisnis mu about page</p>
            <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <p>i love you kurkure.</p>
            </Box>
            <Footer></Footer>
        </Box>

    )
}
export default About;

