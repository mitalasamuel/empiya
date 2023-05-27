import React from 'react';
import { styled, useTheme, } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, MenuItem, Select, Menu, ListItemButton, ListItemText } from '@mui/material';
import { ChevronRight, Close } from '@mui/icons-material';

const drawerWidth = 240;
const menuItems = [
  {
    text: `Empiya is a financial technology company leveraging blockchain technology to address Africa’s money transfer challenges. 
    Our platform provides a seamless experience for converting between cryptocurrencies to fiat currencies using all major payment methods including local bank transfers, Mobile Money, and digital wallets across Africa. 
    We believe sending money to and across Africa shouldn’t be hard and costly.`,
    variant: "body1"
  }
];


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

const DrawerHeader = styled('Box')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

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

  return (
    <Box>
      <CssBaseline />
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        padding={['1rem 2rem 0 2rem', '1rem 2rem 0 2rem', '1rem 12rem 0 12rem']}
      >
        <Box display="flex">
          <img height="30rem" src="/icon.png" />
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, color: 'primary.main', padding: '0 .8rem', fontWeight: 'fontWeightBold' }}
            component="h4"
          >
            Empiya
          </Typography>
        </Box>
        <Box display={['none', 'none', 'flex']}>
          <Button
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            endIcon={<ExpandMoreIcon />}
          >
            All Products
          </Button>
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
        <Box key={index}height='20rem'
        backgroundColor='primary.main'
        >
          <Typography >
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
          <Button style={{ textTransform: 'capitalize' }}>
            <Link href="/login" style={Styles}>
              Login
            </Link>
          </Button>
          <Button style={{ textTransform: 'capitalize' }}>
            <Link href="/signup" style={Styles}>
              Get Started
            </Link>
          </Button>
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
      <Box padding={['1rem 2rem', '1rem 2rem', '1rem 12rem']}>
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
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <MenuIcon color="primary" /> : <Close color="primary" />}
          </IconButton>
        </DrawerHeader>
        <List>
      
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
     {menuItems.map((item, index) => {
        if (item.button) {
          return (
            <Button
              key={index}
              aria-controls={item.ariaControls}
              aria-haspopup={item.ariaHasPopup}
              onClick={item.onClick}
              endIcon={item.endIcon}
            >
              {item.text}
            </Button>
          );
        }
        return (
          <MenuItem key={index}>
            <Typography variant={item.variant}>{item.text}</Typography>
          </MenuItem>
        );
      })}
          </Menu>
         <Divider color="#323a40" flexItem sx={{ borderRightWidth: 0.4 }} />
          <Button style={{ textTransform: 'capitalize' }}>
            <Link href="/receive" style={Styles}>
              Receive
            </Link>
          </Button>
          <Divider color="#323a40" flexItem sx={{ borderRightWidth: 0.4 }} />
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
        </List>
      </Drawer>
    </Box>
  );
}
