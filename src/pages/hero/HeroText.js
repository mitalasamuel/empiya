import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    gradient: {
      main: "linear-gradient(-39deg, #4991f8 0%, #4bc1ff 100%)",
      mainChannel: "0 0 0",
      light: "linear-gradient(135deg, #4aaffd 0%, #4992f8 100%)",
      lightChannel: "0 0 0",
      dark: "linear-gradient(135deg, #4cc2ff 0%, #4aa0fa 100%)",
      darkChannel: "0 0 0",
      contrastText: "#fff",
      contrastTextChannel: "0 0 0",
    },
  },
});
const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function HeroText() {
  const header = <div>{`Send and receive money instantly.`}</div>,
    content = (
      <div>
        {`The financial technology company leveraging blockchain technology to address Africa’s money transfer challenges`}
      </div>
    );

  return (
    <Box padding={["0", "0 0 0 2rem"]}>
      <Box maxWidth={["100%","100%", "30rem"]} 
      padding={["2rem", "0 12rem 2rem 0"]}
      >
        <Typography
          variant="h4"
          align="left"
          padding={["0 0 .7rem 0"]}
          color="grey.700"
          sx={{
            backgroundcolor: "primary",
            backgroundImage: `linear-gradient(45deg, #5514B4, #80ecff)`,
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {header}
        </Typography>
        <Typography variant="p" 
        lineHeight={["1.5rem"]} 
        color="#ffffff80">
          {content}
        </Typography>
      </Box>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%", padding: "0 2rem" }}>
          <Button
            style={{
              textDecoration: "none",
              background: "linear-gradient(45deg, #6be3fe 30%,  #538fff 60%)",
              borderRadius: 3,
              border: 0,
              color: "white",
              height: 48,
              padding: "0 30px",
              boxShadow: "0 1px 3px 1px rgba(255, 105, 135, .3)",
            }}
          >
            <Link
              href="/about"
              style={{
                textDecoration: "none",
                textTransform: "capitalize",
                color: "whitesmoke",
                fontSize: "1rem",
                fontWeight: "900",
                height: "100%",
                width: "100%",
                alignItems: "center",
                display: "flex",
              }}
            >
              About us
            </Link>
          </Button>
        </Box>
      </ThemeProvider>
      {/* <Button
       sx={{
         background: (theme) => theme.vars.palette.gradient[color].main,
         "&:hover": {
           background: (theme) => theme.vars.palette.gradient[color].dark
         }
       }}
       variant="contained"
     >
       BUTTON
     </Button> */}
    </Box>
  );
}
