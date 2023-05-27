const fs = require('fs');
const fetch = require('node-fetch');

const generateFlags = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3/all');
    const countryData = await response.json();

    const flags = {};

    countryData.forEach((country) => {
      const countryCode = Object.keys(country.flags)[0];
      const flag = country.flags[countryCode];
      flags[countryCode] = flag;
    });

    fs.writeFileSync('./public/countries.json', JSON.stringify(flags), 'utf-8');
    console.log('Flags generated successfully.');
  } catch (error) {
    console.error('Error generating flags:', error);
  }
};

generateFlags();
