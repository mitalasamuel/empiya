import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

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
            noValidate
            autoComplete="off"
        >

            <Box>
                <TextField
                    type='number'
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
                <Box>
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
            </Box>
        </Box>
    );
}

export default Buy