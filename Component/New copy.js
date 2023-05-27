import React from 'react';
import { styled, useTheme, ThemeProvider } from '@mui/material/styles';
import { Box, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import { ChevronRight, Close, Facebook } from '@mui/icons-material';

const drawerWidth = 240;

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
    <ThemeProvider theme={theme}>
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
            <Box>            <img height="30rem" src="/icon.png" />
            </Box>
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
          <Box display={['flex', 'flex', 'flex']}>
            <IconButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ display: open ? 'none' : 'block', backgroundColor: 'red' }}
            >
              <MenuIcon color="secondary" />
            </IconButton>
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

          <Box>
            <Button
              style={{ textTransform: 'capitalize' }}
              endIcon={<ChevronRight />}
              aria-controls="products-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              All Products
            </Button>
            {/* Dropdown menu */}

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1" color='primary.main'>All Products</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
              </AccordionDetails>
            </Accordion>

          </Box>
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
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
