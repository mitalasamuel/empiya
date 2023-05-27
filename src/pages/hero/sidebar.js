import React from 'react';
import { Box, Button } from '@mui/material';
import Link from 'next/link';

const Sidebar = () => {
  const styles = {
    textDecoration: 'none',
    padding: '0 1rem',
    color: '#678',
    fontSize: '1.06rem'
  };

  return (
    <Box>
      <Box minWidth={['100%', '10rem', '10rem', '30rem']} display={['none', 'none', 'block', 'block']}>
        <Box margin={['0', '0 0 0 0']}>
          <Box sx={{ width: "100%" }} display={['flex']} alignItems='center'>
            <Box
              sx={{
                background: "linear-gradient(135deg, #4aaffd 0%, #FF8E53 100%)",
                height: '.06rem',
                width: ['0', '2rem', '1rem', '12rem']
              }}
              variant="determinate"
            />
            <Link href='/' style={styles}>Exchange</Link>
          </Box>
        </Box>
        <Box margin={['0', '2rem 0']}>
          <Box sx={{ width: "100%" }} display={['flex']} alignItems='center'>
            <Box
              sx={{
                background: "linear-gradient(135deg, #4aaffd 0%, #FF8E53 100%)",
                height: '.06rem',
                width: ['0', '3rem', '5rem', '12rem']
              }}
              variant="determinate"
            />
            <Link href='/' style={styles}>Send</Link>
          </Box>
        </Box>
        <Box margin={['0', '2rem 0']}>
          <Box sx={{ width: "100%" }} display={['flex']} alignItems='center'>
            <Box
              sx={{
                background: "linear-gradient(135deg, #4aaffd 0%, #FF8E53 100%)",
                height: '.06rem',
                width: ['0', '2rem', '3rem', '12rem']
              }}
              variant="determinate"
            />
            <Link href='/' style={styles}>Receive</Link>
          </Box>
        </Box>
        <Box margin={['0', '0 0 0 0']}>
          <Box sx={{ width: "100%" }} display={['flex']} alignItems='center'>
            <Box
              sx={{
                background: "linear-gradient(135deg, #4aaffd 0%, #FF8E53 100%)",
                height: '.06rem',
                width: ['0', '3rem', '5rem', '12rem'],
              }}
              variant="determinate"
            />
            <Link href='/' style={styles}>Trade</Link>
          </Box>
          <Button style={{ textTransform: 'capitalize' }} />
        </Box>
      </Box>
      <Box minWidth={['100%', '100%', '30rem']} display={['flex', 'flex', 'none', 'none']}>
        <Box margin={['0', '0 0 0 0']}>
          <Box sx={{ width: "100%" }} display={['flex']} alignItems='center'>
            <Button>
              <Link href='/' style={styles}>Exchange</Link>
            </Button>
          </Box>
        </Box>
        <Box margin={['0', '0 0 0 0']}>
          <Box sx={{ width: "100%" }} display={['flex']} alignItems='center'>
            <Button>
              <Link href='/' style={styles}>Send</Link>
            </Button>
          </Box>
        </Box>
        <Box>
          <Box sx={{ width: "100%" }} display={['flex']} alignItems='center'>
            <Button>
              <Link href='/' style={styles}>Receive</Link>
            </Button>
          </Box>
        </Box>
        <Box margin={['0', '0 0 0 0']}>
          <Box sx={{ width: "100%" }} display={['flex']} alignItems='center'>
            <Button>
              <Link href='/' style={styles}>Trade</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
