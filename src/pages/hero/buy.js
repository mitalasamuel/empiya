import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

const Languages = [
    {
        value: 'USD Dollar',
        label: 'USD',
    },
    {
        value: 'EUR',
        label: 'EUR',
    },
    {
        value: 'GBP',
        label: 'Pound Sterling',
    },
];
const TimeZone = [
    {
        value: 'AFRICA',
        label: 'Africa',
    },
    {
        value: 'ASIA',
        label: 'Asia',
    },
    {
        value: 'AMERICA',
        label: 'America',
    },
];

function Buy() {
    return (
        <Box
            backgroundColor='white'
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            borderRadius='1rem'
            noValidate
            autoComplete="off"
        >

            <Box padding={['1rem', '2rem 4rem']} backgroundColor='white'  alignItems='center' display={'flex'} flexDirection='column'
            >
                <Box display={['flex']}>
                    <TextField type='number'
                        label="You send"
                        id="filled-size-normal"
                        defaultValue="Normal"
                        variant="filled"
                    />
                    <TextField
                        select
                        label="You send"
                        defaultValue="USD Dollar"
                        // helperText="Please select your currency"
                        variant="standard"
                    >
                        {Languages.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                </Box>
                <Box display={['flex']}>
                    <TextField
                        type='number'
                        label="You get"
                        id="filled-size-normal"
                        defaultValue="Normal"
                        variant="filled"
                    /><TextField
                        select
                        label="Native select"
                        defaultValue="EUR"
                        SelectProps={{
                            native: true,
                        }}
                        // helperText="Please select your currency"
                        variant="standard"
                    >
                        {TimeZone.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Box>
                <Button
                    style={{
                        background: 'linear-gradient(45deg, #6be3fe 30%,  #538fff 60%)',
                        borderRadius: 3,
                        border: 0,
                        color: 'white',
                        height: 48,
                        margin:'2rem 0 0 0',
                        padding: '0 30px',
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

                    }}>Send Now</Button>
            </Box>
        </Box>
    );
}

export default Buy