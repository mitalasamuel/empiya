import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import firebase from '../pages/api/firebase';
import { useRouter } from 'next/router';

const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px',
  margin: '0 auto',
});

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const existingUser = await firebase.auth().fetchSignInMethodsForEmail(email);

      if (existingUser.length > 0) {
        console.log('Email already exists');
        return;
      }

      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // User is signed up successfully
      // Redirect to the login page
      router.push('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      // User is signed up successfully with Google
      // Redirect or perform additional actions
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFacebookSignup = async () => {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      // User is signed up successfully with Facebook
      // Redirect or perform additional actions
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePhoneSignup = async () => {
    try {
      const phoneNumber = '+1234567890'; // Replace with the user's phone number input
      const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container'); // Replace 'recaptcha-container' with the ID of the reCAPTCHA container element in your form
  
      const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier);
      const verificationCode = window.prompt('Enter the verification code'); // Prompt the user to enter the verification code
  
      if (verificationCode) {
        await confirmationResult.confirm(verificationCode);
        // User is signed up successfully with the phone number
        // Redirect or perform additional actions
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <FormContainer style={{ backgroundColor: 'whitesmoke', padding: '2rem' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Signup
      </Typography>
      <form onSubmit={handleSignup}>
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
          Signup
        </Button>
        <Button variant="outlined" onClick={handleGoogleSignup}>
        Sign up with Google
      </Button>
      <Button variant="outlined" onClick={handleFacebookSignup}>
        Sign up with Facebook
      </Button>
      <Button variant="outlined" onClick={handlePhoneSignup}>
        Sign up with Phone Number
      </Button>
   </form>
       </FormContainer>
  );
};

export default Signup;
