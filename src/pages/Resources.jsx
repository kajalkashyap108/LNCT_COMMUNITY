import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const resources = [
  {
    title: "Coding",
    description: "Improve your coding skills with these resources.",
    videoId: "tNm_NNSB3_w", // Replace with actual YouTube video ID for Coding
  },
  {
    title: "Placement Preparation",
    description: "Get ready for placements with our curated resources.",
    videoId: "f2PMfGfBOPo", // Replace with actual YouTube video ID for Placement Preparation
  },
 
  {
    title: "Development",
    description: "Sharpen your Development skills with practice tests.",
    videoId: "z0n1aQ3IxWI", // Replace with actual YouTube video ID for Aptitude
  },
  {
    title: "Communication",
    description: "Sharpen your Communication skills with practice tests.",
    videoId: "icudf_w_pqU", // Replace with actual YouTube video ID for Aptitude
  },
  {
    title: "Aptitude",
    description: "Sharpen your aptitude skills with practice tests.",
    videoId: "gTfPgPsDI3Y", // Replace with actual YouTube video ID for Aptitude
  },
  {
    title: "Aptitude(Advance)",
    description: "Sharpen your aptitude skills with practice tests.",
    videoId: "gTfPgPsDI3Y", // Replace with actual YouTube video ID for Aptitude
  },
];

function Resources() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Resources
        </Typography>
        <Grid container spacing={4}>
          {resources.map((resource, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6">{resource.title}</Typography>
                <Typography variant="body1" gutterBottom>
                  {resource.description}
                </Typography>
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${resource.videoId}`}
                  title={resource.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Resources;
