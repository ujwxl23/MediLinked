import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Box, Container } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';


const firebaseConfig = {
  apiKey: "AIzaSyAK6jGldivi_kEIzwoADcEPaPOheluRp0g",
  authDomain: "revivetech-59b40.firebaseapp.com",
  databaseURL: "https://revivetech-59b40-default-rtdb.firebaseio.com",
  projectId: "revivetech-59b40",
  storageBucket: "revivetech-59b40.appspot.com",
  messagingSenderId: "659508121680",
  appId: "1:659508121680:web:8450a79a60e22bad750155",
  measurementId: "G-8HM1MZPRPQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User created:', user);
      toast.success('Registration successful!');
      // Redirect to dashboard or any other page after signup
      navigate('/table');
    } catch (error) {
      console.error('Error signing up:', error.message);
      toast.error('Error registoring in.'+ error.message);
    }
  };

  return (
     <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        boxShadow: 5,
        padding: 2,
      }}
    >
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h2" variant="h5">
            Sign Up
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
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </form>
          <Box mt={2}>
            <Typography variant="body1">
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
          </Box>
        </div>
      </Container>
       <ToastContainer />
    </Box>
  );
};

export default RegisterPage