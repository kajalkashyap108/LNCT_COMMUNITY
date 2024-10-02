import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextField from '@mui/material/TextField';

function Contact() {
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ padding: '20px', flexDirection: "row",marginLeft:'20vw' }}>
                    <h1>Get in touch with us</h1>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: '0px' }}>
                        <div>
                            <div style={{ display: "flex", marginBottom: '10px' }}>
                                <MailOutlineIcon />
                                <p style={{ marginLeft: '10px', margin: 0 }}>connect@LNCT_GROUPS</p>
                            </div>

                            <div style={{ display: "flex", marginBottom: '10px' }}>
                                <PhoneInTalkIcon />
                                <p style={{ marginLeft: '10px', margin: 0 }}> 0755 618 5300</p>
                            </div>

                            <div style={{ display: "flex", marginBottom: '20px' }}>
                                <LocationOnIcon />
                                <p style={{ marginLeft: '10px', margin: 0 }}>Raisen Rd, nr. Hanuman Mandir ·</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div style={{ marginTop: '10vh', marginLeft: '10vw' }}>
                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="First Name"
                                    defaultValue=""
                                />
                                 <TextField sx={{marginLeft:'30px'}}
                                    required
                                    id="outlined-required"
                                    label="Last Name"
                                    defaultValue=""
                                />
                               


                                
                            </div>
                        </div>

                        <TextField sx={{marginTop:'5px'}}
                                    required 
                                    id="outlined-required"
                                    label="Email"
                                    defaultValue=""
                                />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required style={{ margin: '5px 0', padding: '10px', width: '300px' }}></textarea>

                        <button type="submit" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
