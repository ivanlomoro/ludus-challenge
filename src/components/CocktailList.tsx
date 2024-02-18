import { useCocktails } from "../hooks/useCocktails";
import { Cocktail, CocktailCard } from "./CocktailCard";

interface CocktailListProps {
    ingredient: string;
}

export const CocktailList: React.FC<CocktailListProps> = ({ ingredient }) => {
    const { data: cocktails, isLoading, isError } = useCocktails(ingredient);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading cocktails</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cocktails?.map((cocktail: Cocktail) => (
                <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
            ))}
        </div>
    );
};
