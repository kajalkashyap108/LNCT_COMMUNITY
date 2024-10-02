import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const groupsData = [
  { id: 1, name: "Photography Club", description: "A club for photography enthusiasts." },
  { id: 2, name: "Book Club", description: "A club for book lovers to discuss their favorite reads." },
  { id: 3, name: "Coding Group", description: "A group for sharing coding tips and projects." },
  { id: 4, name: "Travel Club", description: "A community for travelers to share experiences." },
];

function Groups() {
  const [open, setOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#f5f5f5",
    },
    card: {
      margin: "15px",
      textAlign: "center",
    },
    title: {
      fontWeight: "bold",
      marginBottom: "10px",
    },
    button: {
      marginTop: "10px",
    },
  };

  const handleJoinClick = (group) => {
    setSelectedGroup(group);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({ name: "", email: "" }); // Reset form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to your API
    console.log("Submitted data:", { ...formData, group: selectedGroup.name });
    handleClose(); // Close the dialog after submission
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Our Groups and Clubs
      </Typography>
      <Grid container spacing={2}>
        {groupsData.map((group) => (
          <Grid item xs={12} sm={6} md={4} key={group.id}>
            <Card style={styles.card}>
              <CardContent>
                <Typography variant="h5" style={styles.title}>
                  {group.name}
                </Typography>
                <Typography variant="body2">{group.description}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.button}
                  onClick={() => handleJoinClick(group)}
                >
                  Join
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Join {selectedGroup?.name}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Your Name"
            type="text"
            fullWidth
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Your Email"
            type="email"
            fullWidth
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </div>
  );
}

export default Groups;
