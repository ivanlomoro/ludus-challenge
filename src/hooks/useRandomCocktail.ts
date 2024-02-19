import { useQuery } from 'react-query';
import { fetchRandomCocktail as fetchRandomCocktailAPI } from '../services/api';

export const useRandomCocktail = () => {
  const query = useQuery('randomCocktail', fetchRandomCocktailAPI, {
    enabled: false,
  });

  return query;
};
