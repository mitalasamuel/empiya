import { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Select, MenuItem, Box } from '@mui/material';

const CryptoConverter = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [fiatData, setFiatData] = useState([]);
  const [baseCrypto, setBaseCrypto] = useState('');
  const [targetFiat, setTargetFiat] = useState('');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch('https://api.coinpaprika.com/v1/coins');
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    const fetchFiatData = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        setFiatData(Object.keys(data.rates));
      } catch (error) {
        console.error('Error fetching fiat data:', error);
      }
    };

    // Fetch data from the crypto base currency API
    fetchCryptoData();

    // Fetch data from the countries currencies target API
    fetchFiatData();
  }, []);

  const handleConversion = () => {
    const selectedCrypto = cryptoData.find((crypto) => crypto.id === baseCrypto);
    const selectedFiatRate = 1 / fiatData.find((fiat) => fiat === targetFiat);

    if (!selectedCrypto) {
      console.error('Invalid base crypto currency');
      return;
    }

    if (!selectedCrypto.price) {
      console.error('Invalid price for base crypto currency');
      return;
    }

    if (!selectedFiatRate) {
      console.error('Invalid target fiat currency');
      return;
    }

    const converted = amount * selectedCrypto.price * selectedFiatRate;
    setConvertedAmount(converted.toFixed(2));
  };

  return (
    <Container maxWidth="sm">
      <Box style={{ backgroundColor: 'white' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Crypto Currency Converter
        </Typography>

        <TextField
          select
          label="Base Currency"
          value={baseCrypto}
          onChange={(e) => setBaseCrypto(e.target.value)}
          fullWidth
        >
          {cryptoData.map((crypto) => (
            <MenuItem key={crypto.id} value={crypto.id}>
              {crypto.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Target Currency"
          value={targetFiat}
          onChange={(e) => setTargetFiat(e.target.value)}
          fullWidth
        >
          {fiatData.map((fiat) => (
            <MenuItem key={fiat} value={fiat}>
              {fiat}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          label="Amount"
          fullWidth
        />

        <Button variant="contained" onClick={handleConversion}>
          Convert
        </Button>

        {convertedAmount && (
          <Typography variant="h6" align="center" gutterBottom>
            Converted Amount: {convertedAmount}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default CryptoConverter;
