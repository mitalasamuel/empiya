/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ErrorContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <Typography variant="h1" color="primary" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="h4" color="textSecondary" gutterBottom>
        Something went wrong.
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center" gutterBottom>
        We're sorry, but an error has occurred.
        <br />
        Please try again later.
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Go to Home
      </Button>
    </ErrorContainer>
  );
};

export default ErrorPage;
