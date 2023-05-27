import React, { useRef, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ComboBox() {
  const inputRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [cryptoFaqs, setCryptoFaqs] = useState([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Make an HTTP request to the API endpoint
    fetch('https://api.example.com/crypto-faqs')
      .then((response) => response.json())
      .then((data) => setCryptoFaqs(data));
  }, []);

  const handleAutocompleteChange = (event, value) => {
    setSelectedValue(value);
  };

  return (
    <>
      <Box backgroundColor="primary.main" padding="3rem">
        <Autocomplete
          disablePortal
          options={cryptoFaqs}
          getOptionLabel={(option) => option.question}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Not sure how to send or receive money using your crypto wallet? Use this search..."
              inputRef={inputRef}
            />
          )}
          value={selectedValue}
          onChange={handleAutocompleteChange}
        />
      </Box>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1">
            {selectedValue ? selectedValue.question : ''}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            {selectedValue ? selectedValue.answer : ''}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1">Empiya money transfer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Whether you're an individual sending money to your loved ones, a
            business owner conducting cross-border transactions, or an investor
            looking to capitalize on the potential of cryptocurrencies in
            Africa, our app caters to all your needs. We offer competitive
            exchange rates and low transaction fees to ensure you get the best
            value for your money.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
