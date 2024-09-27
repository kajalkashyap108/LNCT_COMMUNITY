import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import LabTabs from "../Component/Tab1"; 

function Announcement() {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Announcement</h1>
                <Box sx={{ width: 500, maxWidth: '100%' }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search..."
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            sx: {
                                height: '40px', // Decrease the height of the textbox
                                fontSize: '16px', // Adjust font size if needed
                            },
                            
                        }}
                    />
                </Box>
            </div>
            <div>
                <LabTabs></LabTabs>
            </div>
            
            <Footer />
        </div>
    );
}

export default Announcement;
