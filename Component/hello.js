import React, { useState, useEffect } from 'react';
import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import countries from '../public/countries.json';
import { makeStyles } from '@material-ui/core/styles';

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
  const [result, setResult] = useState(' 0.9324 EUR');
  const [currencyData, setCurrencyData] = useState([]);
  const [flags, setFlags] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          'https://v6.exchangerate-api.com/v6/5f2922ce2f60c7b99ee5cc5c/latest/USD'
        );
        const data = await response.json();
        setCurrencyData(data.conversion_rates);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencyData();
  }, []);

  useEffect(() => {
    const fetchFlags = () => {
      const flags = {};
      Object.keys(countries).forEach((countryCode) => {
        const flag = countries[countryCode].flag;
        flags[countryCode] = flag;
      });
      setFlags(flags);
    };

    fetchFlags();
  }, []);

  const convertCurrency = () => {
    if (currencyData[baseCurrency] && currencyData[targetCurrency]) {
      const baseRate = currencyData[baseCurrency];
      const targetRate = currencyData[targetCurrency];
      const convertedAmount = (amount / baseRate) * targetRate;
      setResult(` ${convertedAmount} ${targetCurrency}`);
    } else {
      setResult('Invalid currency selection');
    }
  };

  return (
    <Box
      component="form"
      sx={{
        width: '100'
      }}
      Validate
      autoComplete="off"
      backgroundColor='whitesmoke' padding='2rem 2rem' display='inline-block' borderRadius={2}>
      <Box
        display='flex' margin={['1rem 0']} sx={{
          "& fieldset": {
            border: "none",
          },
        }}
        backgroundColor='#fff'>
        <TextField
          sx={{ borderRight: '1px solid #ccc' }}
          type="number"
          className={classes.input}
          label='You send'
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
          {Object.keys(currencyData).map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency.startsWith('CRYPTO_') ? (
                <img
                  src={flags['crypto']}
                  alt="Crypto Currency"
                  height={20}
                  width={30}
                />
              ) : (
                <img
                  src={flags[currency]}
                  alt={currency}
                  height={20}
                  width={30}
                />
              )}
              {currency}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box display='flex' sx={{
        "& fieldset": {
          border: "none",
        },
      }}
        backgroundColor='#fff'>
        <TextField type='text'
          sx={{ borderRight: '1px solid #ccc' }}
          label='You get'
          disabled value={result}></TextField>
        <Select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
          {Object.keys(currencyData).map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency.startsWith('CRYPTO_') ? (
                <img
                  src={flags['crypto']}
                  alt="Crypto Currency"
                  height={20}
                  width={30}
                />
              ) : (
                <img
                  src={flags[currency]}
                  alt={currency}
                  height={20}
                  width={30}
                />
              )}
              {currency}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box margin={['2rem 0 0 0']}
      >
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
            textTransform:'capitalise'
          }}>Exchange</Button>
      </Box>    </Box>
  );
};

export default Converter;
