import countries from '../public/countries.json';

export { countries };


export const getCountryFlag = (countryCode) => {
    // Mapping of country codes to flag emojis or SVGs
    const flags = {
      USD: '🇺🇸',
      EUR: '🇪🇺',
      GBP: '🇬🇧',
      // Add more country codes and corresponding flag emojis or SVGs here
    };
    
  
    return flags[countryCode] || ''; // Return the flag emoji or SVG based on the country code, or an empty string if not found
  };