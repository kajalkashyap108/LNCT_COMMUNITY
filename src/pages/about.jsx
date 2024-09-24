import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MediaCard from "../Component/Cards";
import Abtimg1 from "../Assets/choukesy_lnct.jpg";
import Abtimg2 from "../Assets/ladies_lnct.jpg";
import Abtimg3 from "../Assets/IMG_20240828_103114.jpg";
import Abtimg4 from "../Assets/mca_head.jpg";
import Abtimg5 from "../Assets/principle_lnct.jpg";




function About() {
    return (
        <div>
            <Navbar />
            <div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <h2>Meet Our Beautiful Team</h2>
                    <div style={{ lineHeight: "0.8", textAlign: "center", marginTop: "-20px" }}>
                        <p>Our philosophy is simple: hire great people and give them the</p>
                        <p>resources and support to do their best work.</p>
                    </div>
                </div>

                <div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="outlined">Book a demo</Button>
                        <Button variant="contained">Get in touch</Button>
                    </div>
                </div>

                <div>
                <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
> 
<img src={Abtimg1}></img> 
<img src={Abtimg2}></img>
<img src={Abtimg3}></img>
<img src={Abtimg4}></img>
<img src={Abtimg5}></img>
</Stack>
                          
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
