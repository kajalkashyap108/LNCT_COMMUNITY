import React, { useState } from "react";
import { AppBar, Tabs, Tab, Typography, Box, TextField, Button,Paper,Divider } from "@mui/material";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const tabLabels = ["Exams", "Technology", "Coding", "Placement", "Fun Activities"];

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSend = () => {
        if (inputValue.trim()) {
            setMessages([...messages, inputValue]);
            setInputValue("");
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, backgroundColor: '#f9f9f9' }}>
            <Box sx={{ height: 300, overflowY: 'auto', mb: 2, border: '1px solid #ddd', borderRadius: 1, padding: 1, bgcolor: '#fff' }}>
                {messages.map((msg, index) => (
                    <Box key={index} sx={{ marginBottom: 1, display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography variant="body1" sx={{ bgcolor: '#e1f5fe', borderRadius: 1, padding: 1, maxWidth: '70%' }}>
                            {msg}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Divider sx={{ marginBottom: 1 }} />
            <Box display="flex" alignItems="center">
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Type a message"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    sx={{ marginRight: 1 }}
                />
                <Button variant="contained" color="primary" onClick={handleSend}>
                    Send
                </Button>
            </Box>
        </Paper>
    );
};

function Discussion() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Navbar />
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    {tabLabels.map((label, index) => (
                        <Tab key={index} label={label} />
                    ))}
                </Tabs>
            </AppBar>
            <Box sx={{ padding: 2 }}>
                <Typography variant="h6">{tabLabels[value]}</Typography>
                <ChatInterface />
            </Box>
            <Footer />
        </div>
    );
}

export default Discussion;
