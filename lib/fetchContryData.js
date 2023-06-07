import axios from 'axios';

export const fetchCountryData = async () => {
  try {
    const API_URL = 'https://v6.exchangerate-api.com/v6/5f2922ce2f60c7b99ee5cc5c/latest/USD';
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching country data:', error);
    return null;
  }
};
