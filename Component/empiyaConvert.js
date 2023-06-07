import React, { useState, useEffect } from 'react';
import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
  input: {
    '& input[type=number]': {
      '-moz-appearance': 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    }
  },
});

const Converter = () => {
  const classes = useStyles();

  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [result, setResult] = useState('0.9324 EUR');
  const [flags, setFlags] = useState({});

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await axios.get(
          'https://api.exchangerate-api.com/v4/latest/USD'
        );
        const coins = response.data.rates;
        const flags = {};
        Object.entries(coins).forEach(([currency, rate]) => {
          flags[currency.toUpperCase()] = `https://www.countryflags.io/${currency.slice(
            0,
            2
          )}/flat/64.png`;
        });
        setFlags(flags);
      } catch (error) {
        console.error('Error fetching flags:', error);
      }
    };
    

    fetchFlags();
  }, []);

  const convertCurrency = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
      );
      const rates = response.data.rates;
      const rate = rates[targetCurrency];
      const convertedAmount = amount * rate;
      setResult(`${convertedAmount} ${targetCurrency}`);
    } catch (error) {
      setResult("Invalid currency selection");
    }
  };
  

  return (
    <Box
      component="form"
      sx={{
        width: '100%',
      }}
      Validate
      height="100%"
      autoComplete="off"
      backgroundColor="whitesmoke"
      padding="2rem"
      display={['block', 'block', 'inline-block', 'inline-block']}
      borderRadius={2}
      minHeight={['100%', '100%', '50vh', '60vh']}
      margin={['1rem 2rem', '1rem', '0', '0']}
    >
      <Box
        display="flex"
        margin={['1rem 0']}
        sx={{
          "& fieldset": {
            border: "none",
          },
        }}
        backgroundColor="#fff"
      >
        <TextField
          sx={{ borderRight: '1px solid #ccc' }}
          type="number"
          className={classes.input}
          label="You send"
          inputProps={{
            style: {
              '-webkit-appearance': 'none',
              '-moz-appearance': 'textfield',
              margin: 0,
            },
          }}
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <Select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
          {Object.keys(flags).map((currency) => (
            <MenuItem key={currency} value={currency}>
              <img
                height={20}
                width={30}
                src={flags[currency]}
                alt={currency}
              />
              {currency}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box
        display="flex"
        sx={{
          "& fieldset": {
            border: "none",
          },
        }}
        backgroundColor="#fff"
      >
        <TextField
          type="text"
          sx={{ borderRight: '1px solid #ccc' }}
          label="You get"
          disabled
          value={result}
        />
        <Select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
          {Object.keys(flags).map((currency) => (
            <MenuItem key={currency} value={currency}>
              <img
                height={20}
                width={30}
                src={flags[currency]}
                alt={currency}
              />
              {currency}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box margin={['2rem 0 0 0']}>
        <Button
          onClick={convertCurrency}
          style={{
            background: 'linear-gradient(45deg, #6be3fe 30%,  #538fff 60%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            width: '100%',
            textTransform: 'capitalize',
          }}
        >
          Exchange
        </Button>
      </Box>
    </Box>
  );
};

export default Converter;
