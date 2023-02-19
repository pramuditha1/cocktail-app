import axios from 'axios';

const API_BASE_URL = 'https://www.thecocktaildb.com';
const apiURL = `${API_BASE_URL}/api/json/v1/1/random.php`;


export const fetchRandomCocktails = () => axios.get(apiURL);