import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCocktailsByIngredient = async (ingredient: string) => {
    const response = await axios.get(`${API_BASE_URL}/filter.php?i=${ingredient}`);
    const limitedResults = response.data.drinks.slice(0, 12);
    return limitedResults;
};

export const fetchCocktailDetails = async (idDrink: string) => {
    const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${idDrink}`);
    return response.data.drinks[0]; 
};

export const fetchRandomCocktail = async () => {
    const response = await axios.get(`${API_BASE_URL}/random.php`);
    return response.data.drinks[0]; 
};