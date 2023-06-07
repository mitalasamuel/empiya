import { Grid, Typography, Box, styled } from "@mui/material";
import { Twitter, LinkedIn, YouTube, GitHub } from "@mui/icons-material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  textDecoration: "none",
}));

const Footer = () => {
  return (
    <footer>
      <Box bgcolor="primary.main"
        padding={["1rem 0 0 0", "2rem 0 0 0"]}>
        <Grid
          container
          display={["flex"]}
          flexWrap={['wrap', 'wrap', 'nowrap', 'nowrap']}
          justifyContent="space-between"
          mt={4}
          sx={{ color: "white", textAlign: "start" }}
          padding={["1rem", "4rem", "0 12rem", "0 12rem"]}
          width="100%"
        >
          <Grid item xs={6} sm={3}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Socials
              </Typography>
              <Box display="flex" component='a' href='/'margin={['.5rem 0']}>
                <img height="30rem" src="/icon.png" />
              </Box>
              <Box display="flex">
                <Twitter size={24} style={{ marginRight: "1rem" }} />
                <LinkedIn size={24} style={{ marginRight: "1rem" }} />
                <YouTube size={24} style={{ marginRight: "1rem" }} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Company
              </Typography>
              <StyledTypography component="a" color="inherit" href="/about">
                About
              </StyledTypography>
              <StyledTypography component="a" color="inherit" href="/team">
                Team
              </StyledTypography>
              <StyledTypography component="a" color="inherit" href="/careers">
                Careers
              </StyledTypography>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Support
              </Typography>
              <StyledTypography
                component="a"
                color="inherit"
                href="/contact"
                sx={{ mb: 1 }}
              >
                Contact us
              </StyledTypography>
              <StyledTypography
                component="a"
                color="inherit"
                href="/help-center"
                sx={{ mb: 1 }}
              >
                Help Centre
              </StyledTypography>
              <StyledTypography component="a" color="inherit" href="/faqs">
                FAQs
              </StyledTypography>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Products
              </Typography>
              <StyledTypography
                component="a"
                color="inherit"
                href="/send-money"
              >
                Send Money
              </StyledTypography>
              <StyledTypography
                component="a"
                color="inherit"
                href="/sell-crypto"
              >
                Sell Crypto
              </StyledTypography>
            </Box>
          </Grid>
        </Grid>

        <Box
          bgcolor="tertiary.main"
          py={2}
          margin={["2rem 0 0 0"]}
          textAlign="center"
          color="white"
        >
          <Typography variant="body2">
            &copy; Empiya Money 2020—2023. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
