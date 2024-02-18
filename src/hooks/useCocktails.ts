import { useQuery } from 'react-query';
import { fetchCocktailsByIngredient } from '../services/api';

export const useCocktails = (ingredient: string) => {
  return useQuery(['cocktails', ingredient], () => fetchCocktailsByIngredient(ingredient), {
    enabled: !!ingredient,
  });
};
