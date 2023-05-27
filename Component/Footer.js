import { Grid, Typography, Box, styled } from '@mui/material';
import { Twitter, LinkedIn, YouTube, GitHub } from '@mui/icons-material';

const StyledTypography = styled(Typography)(({ theme }) => ({
  textDecoration: 'none',
}));

const Footer = () => {
  return (
    <footer>
      <Box bgcolor='primary.main' py={4}>
        <Grid container alignItems="center" justifyContent="space-between" mt={4} sx={{ color: 'white', textAlign: 'start' }}>
          <Grid item xs={6} sm={3}>
            <Box display="flex" flexDirection="column" alignItems='center'>
              <Typography variant="h6" fontWeight="bold" mb={2}>Socials</Typography>
              <Box display="flex" justifyContent="center">
                <Twitter size={24} style={{ marginRight: '1rem' }} />
                <LinkedIn size={24} style={{ marginRight: '1rem' }} />
                <YouTube size={24} style={{ marginRight: '1rem' }} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" fontWeight="bold" mb={2}>Company</Typography>
              <StyledTypography component="a" color="inherit" href="/about">About</StyledTypography>
              <StyledTypography component="a" color="inherit" href="/team">Team</StyledTypography>
              <StyledTypography component="a" color="inherit" href="/careers">Careers</StyledTypography>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" fontWeight="bold" mb={2}>Support</Typography>
              <StyledTypography component="a" color="inherit" href="/contact" sx={{ mb: 1 }}>Contact us</StyledTypography>
              <StyledTypography component="a" color="inherit" href="/help-center" sx={{ mb: 1 }}>Help Centre</StyledTypography>
              <StyledTypography component="a" color="inherit" href="/faqs">FAQs</StyledTypography>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" fontWeight="bold" mb={2}>Products</Typography>
              <StyledTypography component="a" color="inherit" href="/send-money">Send Money</StyledTypography>
              <StyledTypography component="a" color="inherit" href="/sell-crypto">Sell Crypto</StyledTypography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box bgcolor='secondary.dark' py={2} textAlign="center" color="white">
        <Typography variant="body2">&copy; Empiya Money 2015—2023. All rights reserved.</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
