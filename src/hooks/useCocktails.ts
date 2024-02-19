import { useQuery } from 'react-query';
import { fetchCocktailsByIngredient, fetchCocktailDetails } from '../services/api';

interface CocktailSummary {
    idDrink: string;
  }
  
export const useCocktails = (ingredient: string) => {
  return useQuery(['cocktails', ingredient], async () => {
    if (!ingredient) return [];
    
    const initialList = await fetchCocktailsByIngredient(ingredient);
    if (!initialList || initialList.length === 0) return [];

    const detailsPromises = initialList.map((cocktail : CocktailSummary) =>
      fetchCocktailDetails(cocktail.idDrink)
    );
    const detailsList = await Promise.all(detailsPromises);

    return detailsList;
  }, {
    enabled: !!ingredient,
  });
};
