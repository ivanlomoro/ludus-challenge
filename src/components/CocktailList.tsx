import { useCocktails } from "../hooks/useCocktails";
import { CocktailCard } from "./CocktailCard";

interface CocktailListProps {
  ingredient: string;
}

export const CocktailList: React.FC<CocktailListProps> = ({ ingredient }) => {
  const { data: cocktailsDetails, isLoading, isError } = useCocktails(ingredient);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading cocktails</div>;

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
