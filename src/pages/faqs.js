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

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleAutocompleteChange = (event, value) => {
        setSelectedValue(value);
    };

    return (
        <>
          <Box backgroundColor='primary.main' padding='3rem'>
                <Autocomplete
                    disablePortal
                    options={cryptoFaqs}
                    getOptionLabel={(option) => option.question}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Not sure how to send or receive money using your crypto wallet? Use this search..."
                            inputRef={inputRef}
                            sx={{
                                "& .MuiInputBase-input": {
                                    fontWeight: 700, // Adjust the font weight value as desired
                                    color: "#333", // Adjust the color value as desired
                                },
                            }}
                        />
                    )}
                    value={selectedValue}
                    onChange={handleAutocompleteChange}
                />
            </Box>


            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body1">{selectedValue ? selectedValue.question : ''}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">{selectedValue ? selectedValue.answer : ''}</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body1">Empiya money transfer</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">Whether you're an individual sending money to your loved ones, a business owner conducting cross-border transactions, or an investor looking to capitalize on the potential of cryptocurrencies in Africa, our app caters to all your needs. We offer competitive exchange rates and low transaction fees to ensure you get the best value for your money.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

// Rest of the code...
const cryptoFaqs = [
    {
        question: 'Who is Empiya?',
        answer: 'Empiya is a financial technology company leveraging blockchain technology to address Africa’s money transfer challenges. Our platform provides a seamless experience for converting between cryptocurrencies to fiat currencies using all major payment methods including local bank transfers, Mobile Money, and digital wallets across Africa. We believe sending money to and across Africa shouldn’t be hard and costly.',
    },
    {
        question: 'What is blockchain technology?',
        answer: 'Blockchain technology is a decentralized digital ledger that records transactions across multiple computers. It ensures transparency, security, and immutability of data.',
    },
    {
        question: 'What is cryptocurrency mining?',
        answer: 'Cryptocurrency mining is the process of validating and adding new transactions to the blockchain. Miners use powerful computers to solve complex mathematical problems that secure the network and receive rewards in the form of newly minted cryptocurrencies.',
    },
    {
        question: 'What is the difference between a cryptocurrency and a token?',
        answer: 'Cryptocurrencies are digital currencies that operate on their own blockchain networks, while tokens are digital assets built on existing blockchain platforms, such as Ethereum. Tokens can represent various assets or functionalities within a blockchain ecosystem.',
    },
    {
        question: 'How does a cryptocurrency wallet work?',
        answer: 'A cryptocurrency wallet is a software application that allows users to securely store, send, and receive cryptocurrencies. It generates and stores the user\'s private keys, which are necessary for accessing and managing their cryptocurrency holdings.',
    },
    {
        question: 'What is a smart contract?',
        answer: 'A smart contract is a self-executing contract with the terms of the agreement directly written into lines of code. It automatically enforces the execution of transactions when predefined conditions are met. Smart contracts are often built on blockchain platforms and enable decentralized and trustless interactions.',
    },
    {
        question: 'What is the role of cryptography in cryptocurrencies?',
        answer: 'Cryptography plays a crucial role in cryptocurrencies by providing secure communication, ensuring the integrity of transactions, and enabling the creation and management of digital signatures. It helps protect the privacy and security of users and their transactions within the decentralized network.',
    },
    // Add more FAQ entries here...
];
