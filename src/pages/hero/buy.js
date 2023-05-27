// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import { Button } from '@mui/material';

// const Languages = [
//     {
//         value: 'USD Dollar',
//         label: 'USD',
//     },
//     {
//         value: 'EUR',
//         label: 'EUR',
//     },
//     {
//         value: 'GBP',
//         label: 'Pound Sterling',
//     },
// ];
// const TimeZone = [
//     {
//         value: 'AFRICA',
//         label: 'Africa',
//     },
//     {
//         value: 'ASIA',
//         label: 'Asia',
//     },
//     {
//         value: 'AMERICA',
//         label: 'America',
//     },
// ];

// function Buy() {
//     return (
//         <Box
//             backgroundColor='white'
//             component="form"
//             sx={{
//                 '& .MuiTextField-root': { m: 1, width: '25ch' },
//             }}
//             borderRadius='1rem'
//             noValidate
//             autoComplete="off"
//         >

//             <Box padding={['1rem', '2rem 4rem']} backgroundColor='white'  alignItems='center' display={'flex'} flexDirection='column'
//             >
//                 <Box display={['flex']}>
//                     <TextField type='number'
//                         label="You send"
//                         id="filled-size-normal"
//                         defaultValue="Normal"
//                         variant="filled"
//                     />
//                     <TextField
//                         select
//                         label="You send"
//                         defaultValue="USD Dollar"
//                         // helperText="Please select your currency"
//                         variant="standard"
//                     >
//                         {Languages.map((option) => (
//                             <MenuItem key={option.value} value={option.value}>
//                                 {option.label}
//                             </MenuItem>
//                         ))}
//                     </TextField>

//                 </Box>
//                 <Box display={['flex']}>
//                     <TextField
//                         type='number'
//                         label="You get"
//                         id="filled-size-normal"
//                         defaultValue="Normal"
//                         variant="filled"
//                     /><TextField
//                         select
//                         label="Native select"
//                         defaultValue="EUR"
//                         SelectProps={{
//                             native: true,
//                         }}
//                         // helperText="Please select your currency"
//                         variant="standard"
//                     >
//                         {TimeZone.map((option) => (
//                             <option key={option.value} value={option.value}>
//                                 {option.label}
//                             </option>
//                         ))}
//                     </TextField>
//                 </Box>
//                 <Button
//                     style={{
//                         background: 'linear-gradient(45deg, #6be3fe 30%,  #538fff 60%)',
//                         borderRadius: 3,
//                         border: 0,
//                         color: 'white',
//                         height: 48,
//                         margin:'2rem 0 0 0',
//                         padding: '0 30px',
//                         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

//                     }}>Send Now</Button>
//             </Box>
//         </Box>
//     );
// }

// export default Buy
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="content-container">
        <h1>About Empiya</h1>
        <p>
          We believe sending money to and across Africa shouldn’t be hard and costly. Empiya is a financial technology
          company leveraging blockchain technology to address Africa’s money transfer challenges. Our platform provides a
          seamless experience for converting between cryptocurrencies to fiat currencies using all major payment methods
          including local bank transfers, Mobile Money, and digital wallets across Africa.
        </p>
        <p>
          Over the years sending money to and across Africa has been costly, making Africans both in Africa and in the
          diaspora lose dollars due to unstable exchange rates. Although the existing solutions claim to provide free
          services, their exchange rates are exorbitant, way below the market rates, causing Africans to lose a lot of money
          during the currency conversion.
        </p>
        <p>
          We are addressing these challenges by working as a bridge between the African diaspora and those in Africa to
          send and receive money.
        </p>
      </div>
      <div className="image-container">
        <Image src="/empiya-logo.png" alt="Empiya Logo" width={200} height={200} />
      </div>
      <style jsx>{`
       .about-page {
        background-color: #6b7280;
        color: #fff;
        padding: 40px;
      }

        .content-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .image-container {
          text-align: center;
          margin-top: 40px;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
