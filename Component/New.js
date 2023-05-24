'use client'
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
import { Accordion, AccordionDetails, AccordionSummary, Button, Modal } from '@mui/material';
import { ChevronRight, Close } from '@mui/icons-material';

const styleModal = {
    position: 'absolute',
    top: '50%',
    textTransform: 'capitalize',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: '#678',
    bgcolor: '#20262a',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const drawerWidth = 240;

const Styles = {
    textDecoration: 'none',
    padding: '0 1rem',
    color: '#678'

},
    Style = {
        textDecoration: 'none',
        padding: '0 1rem',
        color: '#111'
    }
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

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <Box>
            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }} padding={['1rem 2rem 0 2rem','1rem 2rem 0 2rem', '1rem 12rem 0 12rem']}>
                <Box display='flex'>
                    <img height='30rem' src='/icon.png'/>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1, color: '#678',padding:'0 .8rem',fontWeight:'900' }} component="h4">
                        Empiya
                    </Typography>
                </Box>
                <Box display={['none', 'none', 'flex']}>

                    <Box>
                        <Button style={{ textTransform: 'capitalize' }}
                            onClick={handleOpenModal}>All Products<ExpandMoreIcon /></Button>
                        <Modal
                            open={openModal}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={styleModal}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Send and receive money                                 </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>
                    </Box>
                    <Divider color='#323a40'
                        orientation="vertical" flexItem sx={{ borderRightWidth: .4 }} />
                    <Button style={{ textTransform: 'capitalize' }}>
                        <Link href='/'style={Styles}>About</Link>
                    </Button>
                    <Divider color='#323a40'
                        orientation="vertical" flexItem sx={{ borderRightWidth: .4 }} />
                    <Button style={{ textTransform: 'capitalize' }}>
                        <Link href='/'style={Styles}>Login</Link></Button>
                    <Divider color='#323a40'
                        orientation="vertical" flexItem sx={{ borderRightWidth: .4 }} />
                    <Button style={{ textTransform: 'capitalize' }}>
                        <Link href='/'style={Styles}>Get Started</Link></Button>

                </Box>
                <Box display={['flex', 'flex', 'none']}>
                    <IconButton
                        color="#678"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon style={{ color: '#678' }} />
                    </IconButton>
                </Box>
            </Box>
            <Box padding={['1rem 2rem', '1rem 2rem', '1rem 12rem']}>
                <Divider color='#323a40' sx={{ borderBottomWidth: '.1px' }} />
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        backgroundColor: '#20262a', color: '#323a40'

                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <MenuIcon color='#678' /> : <Close color='#678' />}
                    </IconButton>
                </DrawerHeader>
                <Box>
                    <Button style={{ textTransform: 'capitalize' }}
                        onClick={handleOpenModal}>All Products<ChevronRight /></Button>
                    <Modal
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={styleModal}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Send or Receive money to and from Africa                          </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </Box>
                <Divider color='#323a40'
                    flexItem sx={{ borderRightWidth: .4 }} />
                <Button style={{ textTransform: 'capitalize' }}>
                    <Link href='/'style={Styles}>Receive</Link>
                </Button>
                <Divider color='#323a40'
                    flexItem sx={{ borderRightWidth: .4 }} />
                <Button style={{ textTransform: 'capitalize' }}>
                    <Link href='/'style={Styles}>Login</Link></Button>
                <Divider color='#323a40'
                    flexItem sx={{ borderRightWidth: .4 }} />
                <Button style={{ textTransform: 'capitalize' }}>
                    <Link href='/'style={Styles}>Get Started</Link></Button>
                <Divider color='#323a40'
                    flexItem sx={{ borderRightWidth: .4 }} />


            </Drawer>
        </Box>
    );
}