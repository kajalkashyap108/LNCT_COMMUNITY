import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '20px',flexDirection:"row" }}>
                <h1>Get in touch with us</h1>
                <div style={{ display: "flex", flexDirection: "column", marginTop: '0px' }}>

                    <div style={{ display: "flex", marginBottom: '10px' }}>
                        <MailOutlineIcon />
                        <p style={{ marginLeft: '10px', margin: 0 }}>connect@LNCT_GROUPS</p>
                    </div>

                    <div style={{ display: "flex", marginBottom: '10px' }}>
                        <PhoneInTalkIcon />
                        <p style={{ marginLeft: '10px', margin: 0 }}>(215) 979-8030</p>
                    </div>
                    
                    <div style={{ display: "flex", marginBottom: '20px' }}>
                        <LocationOnIcon />
                        <p style={{ marginLeft: '10px', margin: 0 }}>500 Office Center Drive, Suite 400, Fort Washington, PA 19034</p>
                    </div>

                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{display:'flex',flexDirection:'column'}}>
                        <div>
                        <label htmlFor="name">First Name:</label>
                        <input type="text" id="name" name="name" required style={{ margin: '5px 0', padding: '10px', width: '300px' }} />
                        

                        
                        <label htmlFor="name">Last Name:</label>
                        <input type="text" id="name" name="name" required style={{ margin: '5px 0', padding: '10px', width: '300px' }} />
                        </div>
                        </div>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required style={{ margin: '5px 0', padding: '10px', width: '300px' }} />

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
