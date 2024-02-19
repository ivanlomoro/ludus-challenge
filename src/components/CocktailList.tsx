import { useEffect } from "react";
import { useCocktails } from "../hooks/useCocktails";
import { CocktailCard } from "./CocktailCard";
import { toast } from 'react-hot-toast';

interface CocktailListProps {
  ingredient: string;
}

export const CocktailList: React.FC<CocktailListProps> = ({ ingredient }) => {
  const { data: cocktailsDetails, isLoading, isError } = useCocktails(ingredient);

  useEffect(() => {
    if (isError) {
      toast.error('No cocktails found with that ingredient.');
    }
  }, [isError]);

  if (isLoading) return (
    <div className="loader-overlay">
      <div className="loader"></div>
    </div>
  )
  if (isError) return null;

  const nonAlcoholicCocktails = cocktailsDetails?.filter(cocktail => cocktail.strAlcoholic !== "Alcoholic") || [];
  const alcoholicCocktails = cocktailsDetails?.filter(cocktail => cocktail.strAlcoholic === "Alcoholic") || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      {nonAlcoholicCocktails.map((details) => (
        <CocktailCard key={details.idDrink} details={details} />
      ))}

      {alcoholicCocktails.map((details) => (
        <CocktailCard key={details.idDrink} details={details} />
      ))}
    </div>
  );
};
