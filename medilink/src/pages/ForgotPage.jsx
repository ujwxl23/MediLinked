import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, TextField, Button, Box, Container } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

const ForgotPage = () => {
  const [email, setEmail] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      console.log("Email:", email);
    } catch (error) {
      console.error("Error in verify:", error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        boxShadow: 5,
        padding: 2,
      }}
    >
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h2" variant="h5">
            Forgot
          </Typography>
          <form onSubmit={handleSignup}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Verify
            </Button>
          </form>
        </div>
      </Container>
      <ToastContainer />
    </Box>
  );
};

export default ForgotPage;
