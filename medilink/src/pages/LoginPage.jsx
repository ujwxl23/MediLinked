import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
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

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard or any other page after login
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error.message);
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
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={handleLogin}>
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
              autoComplete="current-password"
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
              Login
            </Button>
          </form>
          <Box mt={2}>
            <Typography variant="body1">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </Typography>
          </Box>
        </div>
      </Container>
    </Box>
  );
};
export default LoginPage