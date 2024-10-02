import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const alumniData = [
    {
        name: "John Doe",
        image: "https://via.placeholder.com/150",
        description: "Software Engineer at XYZ Corp.",
    },
    {
        name: "Jane Smith",
        image: "https://via.placeholder.com/150",
        description: "Product Manager at ABC Inc.",
    },
    {
        name: "Mike Johnson",
        image: "https://via.placeholder.com/150",
        description: "Data Scientist at 123 Ltd.",
    },
    // Add more alumni as needed
];

function Alumni() {
    return (
        <div>
            <Navbar />
            <Container maxWidth="lg" style={{ padding: '2rem' }}>
                <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    Our Esteemed Alumni
                </Typography>
                <Grid container spacing={4}>
                    {alumniData.map((alumnus, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={alumnus.image}
                                    alt={alumnus.name}
                                    style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                                />
                                <CardContent style={{ textAlign: 'center' }}>
                                    <Typography variant="h6">{alumnus.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {alumnus.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}

export default Alumni;
