import axios from 'axios';

const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

export const fetchCocktailsByIngredient = async (ingredient: string) => {
    const response = await axios.get(`${API_BASE_URL}/filter.php?i=${ingredient}`);
    console.log("Respuesta:", response.data);
    const limitedResults = response.data.drinks.slice(0, 6);
    return limitedResults;
};


export const fetchCocktailDetails = async (idDrink: string) => {
    const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${idDrink}`);
    return response.data.drinks[0]; 
};