import React, { useState } from 'react';
import { Typography, TextField, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import firebase from '../pages/api/firebase'
import 'firebase/compat/auth';
import { useRouter } from 'next/router';
import { Facebook, Google } from '@mui/icons-material';

const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px',
  margin: '0 auto',
});

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      router.push('/'); // Redirect to the dashboard page on successful login
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      router.push('/'); // Redirect to the dashboard page on successful login
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      router.push('/'); // Redirect to the dashboard page on successful login
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <FormContainer>
      <Typography variant="h2" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin} style={{ backgroundColor: 'whitesmoke', padding: '2rem' }}>
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
        <IconButton variant="contained" onClick={handleGoogleLogin} style={{ marginTop: '1rem' }}>
        <Google />
      </IconButton>
      <IconButton variant="contained" onClick={handleFacebookLogin} style={{ marginTop: '1rem' }}>
        <Facebook />
      </IconButton>
      </form>
     
    </FormContainer>
  );
};

export default Login;
