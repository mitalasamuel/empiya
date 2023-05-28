import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#101828',
    },
    secondary: {
      main: '#111',
    },
  },
  typography: {
    fontWeightBold: 900,
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#567',
          display:'inline-block',
          '&.Mui-expanded': {
            backgroundColor: '#e0e0e0',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          fontWeight: 'bold',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
        
      },
    },
  },
});

export default theme;
