import { useQuery } from 'react-query';
import { fetchCocktailsByIngredient, fetchCocktailDetails } from '../services/api';

interface CocktailSummary {
  idDrink: string;
}

export const useCocktails = (ingredient: string, page: number, limit: number) => {
  return useQuery(['cocktails', ingredient, page], async () => {
    if (!ingredient) return { cocktails: [], totalPages: 0 };

    const initialList = await fetchCocktailsByIngredient(ingredient);
    if (!initialList || initialList.length === 0) return { cocktails: [], totalPages: 0 };

    const detailsPromises = initialList.map((cocktail: CocktailSummary) =>
      fetchCocktailDetails(cocktail.idDrink)
    );
    let detailsList = await Promise.all(detailsPromises);

    detailsList = detailsList.sort((a, b) => {
      if (a.strAlcoholic === "Alcoholic" && b.strAlcoholic !== "Alcoholic") return 1;
      if (a.strAlcoholic !== "Alcoholic" && b.strAlcoholic === "Alcoholic") return -1;
      return 0;
    });

    const startIndex = (page - 1) * limit;
    const selectedCocktails = detailsList.slice(startIndex, startIndex + limit);

    const totalPages = Math.ceil(detailsList.length / limit);

    return { cocktails: selectedCocktails, totalPages };
  }, {
    enabled: !!ingredient,
    keepPreviousData: true,
  });
};
