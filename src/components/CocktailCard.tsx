export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb?: string;
  }
  
  export interface CocktailCardProps {
    cocktail: Cocktail;
  }
  
  export const CocktailCard: React.FC<CocktailCardProps> = ({ cocktail }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      {cocktail.strDrinkThumb && (
        <img className="w-full" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{cocktail.strDrink}</div>
      </div>
    </div>
  );
  