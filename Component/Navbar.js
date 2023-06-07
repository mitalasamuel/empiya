import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, MenuItem, Menu, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UserProfile from './UserProfile';

const drawerWidth = 240;
const menuItems = [
  {
    text: `Empiya is a financial technology company leveraging blockchain technology to address Africa’s money transfer challenges. 
    Our platform provides a seamless experience for converting between cryptocurrencies to fiat currencies using all major payment methods including local bank transfers, Mobile Money, and digital wallets across Africa. 
    We believe sending money to and across Africa shouldn’t be hard and costly.`,
    variant: 'body1',
  },
];
const HomeLink = {
  Box: {
    display: 'flex',
    component: 'a',
    href: '/',
  },
  img: {
    height: '30rem',
    src: '/icon.png',
  },
  Typography: {
    variant: 'h6',
    noWrap: true,
    sx: {
      flexGrow: 1,
      color: 'tertiary.main',
      padding: '0 .8rem',
      fontWeight: 'fontWeightBold',
    },
    component: 'h4',
    textDecoration: 'none',
  },
  text: 'Empiya',
};

const Styles = {
  textDecoration: 'none',
  padding: '0 1rem',
  color: '#678',
};

const Style = {
  textDecoration: 'none',
  padding: '0 1rem',
  color: '#111',
};

export default function Navbar({ isLoggedIn }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userObject = JSON.parse(localStorage.getItem('userObject'));
      if (userObject) {
        const { firstName, lastName } = userObject;
        setProfilePhotoUrl(firstName + ' ' + lastName);
        setFirstName(firstName);
      }
    }
  }, []);

  useEffect(() => {
    console.log(`User's name is ${firstName}`);
  }, [firstName]);

  return (
    <Box
    style={{
      position: 'fixed',
      width: '100%',
      marginBottom: '8rem',
      top: 0,
      zIndex: 999,
    }}
    backgroundColor= '#000'

  >   
     <CssBaseline />
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        padding={['1.2rem 2rem', '1rem 2rem 0 2rem', '1rem 12rem 0 12rem']}
      >
        <Box component='a' href='/'>
          <img height="30rem" src="/icon.png" alt="Empiya Logo" />
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              color: 'tertiary.main',
              padding: '0 .8rem',
              fontWeight: 'fontWeightBold'
            }}
            component="h4"
            textDecoration='none'
          >
            {/* Empiya */}
          </Typography>
        </Box>
        <Box display={['none', 'none', 'flex']}>
          <Box display='flex' alignItems='center' cursor='pointer'>
            <Typography variant="body2" sx={{ cursor: 'pointer' }} marginRight='-1rem' onClick={handleMenuOpen}>
              All Products
            </Typography>
            <Button
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              endIcon={<ExpandMoreIcon />}
            >
            </Button>
          </Box>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {menuItems.map((item, index) => (
              <Box key={index} height='20rem' backgroundColor='primary.main'>
                <Typography>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Menu>
          <Button style={{ textTransform: 'capitalize' }}>
            <Link href="/about" style={Styles}>
              About
            </Link>
          </Button>
          {!isLoggedIn && (
            <>
              <Button style={{ textTransform: 'capitalize' }}>
                <Link href="/login" style={Styles}>
                  Login
                </Link>
              </Button>
              <Divider color="#323a40" flexItem sx={{ borderRightWidth: 0.4 }} />
              <Button style={{ textTransform: 'capitalize' }}>
                <Link href="/signup" style={Styles}>
                  Get Started
                </Link>
              </Button>
              <Divider color="#323a40" flexItem sx={{ borderRightWidth: 0.4 }} />
            </>
          )}
          {isLoggedIn && (
            <>
              <UserProfile />
              {/* Add code for logged-in user buttons */}
            </>
          )}
        </Box>
        <Box display={['flex', 'flex', 'none']}>
          <Button
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={open ? { display: 'none' } : {}}
          >
            <MenuIcon color="primary" />
          </Button>
        </Box>
      </Box>
      <Box padding={['0rem 2rem', '0rem 2rem', '0rem 12rem']}>
        <Divider color="#323a40" sx={{ borderBottomWidth: '.1px' }} />
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#20262a',
            color: '#323a40',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon color="primary" />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              <Typography variant={item.variant}>{item.text}</Typography>
            </MenuItem>
          ))}
          <Typography>{firstName}</Typography>
          <Divider color="#323a40" flexItem sx={{ borderRightWidth: 0.4 }} />
          <Button style={{ textTransform: 'capitalize' }}>
            <Link href="/receive" style={Styles}>
              Receive
            </Link>
          </Button>
          <Divider color="#323a40" flexItem sx={{ borderRightWidth: 0.4 }} />
          <Avatar>{profilePhotoUrl}</Avatar>
        </List>
      </Drawer>
    </Box>
  );
}
