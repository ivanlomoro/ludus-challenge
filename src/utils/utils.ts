import { CocktailDetails } from "../components/CocktailCard";

 export const getIngredientsAndMeasures = (details: CocktailDetails): { ingredient: string, measure: string | null }[] => {
      const ingredientsAndMeasures: { ingredient: string, measure: string | null }[] = [];
  
      for (let i = 1; i <= 15; i++) {
          const ingredientKey = `strIngredient${i}` as keyof CocktailDetails;
          const measureKey = `strMeasure${i}` as keyof CocktailDetails;
  
          const ingredient = details[ingredientKey];
          const measure = details[measureKey];
  
          if (ingredient) { 
              ingredientsAndMeasures.push({
                  ingredient,
                  measure: measure || '',
              });
          } else {
              break;
          }
      }
  
      return ingredientsAndMeasures;
  };
  

export const getLimitedDrinkName = (name: string) => {
    const words = name.split(' ');
    if (words.length > 2) {
        return words.slice(0, 2).join(' ') + '...';
    }
    return name;
};