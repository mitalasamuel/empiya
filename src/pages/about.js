import { makeStyles } from "@material-ui/core";
import { Box, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    blockquote: {
        margin: '1rem 0',
        fontWeight: 700,
        padding: '0.5rem 1rem',
        fontWeight: '900',
        fontFamily: "'Montserrat', sans-serif",
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        fontStyle: 'italic',
    },
}));

const styles = {
    backgroundImage: `url("/crypto.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '0',
    height: '100vh'
};

const headings = {
    fontFamily: "'Sansita', sans-serif"
};

const aboutData = [
    {
        title: "The Future of crypto conversion starts here",
        subhead: "About us",
        content: `Empiya is a financial technology company leveraging blockchain technology to address Africa’s money transfer challenges. Our platform provides a seamless experience for converting between cryptocurrencies to fiat currencies using all major payment methods including local bank transfers, Mobile Money, and digital wallets across Africa. We believe sending money to and across Africa shouldn’t be hard and costly.`,
        button: (
            <Button
                variant="contained"
                style={{
                    background: 'linear-gradient(45deg, #6be3fe 30%,  #538fff 60%)',
                    borderRadius: 3,
                    border: 0,
                    color: 'white',
                    height: 48,
                    padding: '0 30px',
                    boxShadow: '0 1px 3px 1px rgba(255, 105, 135, .3)',
                    textDecoration: 'none',
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                    fontWeight: '900',
                }}
                component={Link}
                href="/contact"
            >
                Contact us
            </Button>
        ),
    },
    {
        block: "Surely safe and easy to use.",

    },
];

export default function About() {
    const classes = useStyles();

    return (
        <Box sx={styles}>
            <Box
                display="flex"
                padding={['1rem', '2rem', '0 12rem']}
                height="100%"
                width="100%"
                justifyContent="flex-end"
                alignItems="center"
                style={{ background: "linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgb(7, 7, 32) 70%, black  90%" }}
            >
                <Grid
                    container
                    justifyContent="flex-end"
                    height="100%"
                    maxWidth="30rem"
                >
                    {aboutData.map((item, index) => (
                        <Grid item key={index}>
                            <Typography variant="body1" component="blockquote" className={classes.blockquote}>
                                {item.block}
                            </Typography>
                            <Typography variant="h3" sx={{ lineHeight: 1.2, ...headings }}>
                                {item.title}
                            </Typography>
                            <Box
                                item
                                display='flex'
                                height="100%"
                                padding={['4rem 0']}
                                maxWidth="30rem"
                                flexDirection='column'
                            >
                                <Typography variant="h5" sx={{ lineHeight: 1.8, ...headings }}>
                                    {item.subhead}
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: 1.6, color: '#b4b4b4' }}>
                                    {item.content}
                                </Typography>
                                <Typography variant="button" margin={['1rem 0']}>
                                    {item.button}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}