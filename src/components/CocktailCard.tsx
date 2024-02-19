export interface CocktailDetails {
    idDrink: string;
    strDrink: string;
    strDrinkThumb?: string;
    strInstructions: string;
    strAlcoholic: string;
}



export interface CocktailCardProps {
    details: CocktailDetails; 
}

export const CocktailCard: React.FC<CocktailCardProps> = ({ details }) => {
    const getIngredientsAndMeasures = () => {
        const ingredientsAndMeasures: { ingredient: string, measure: string }[] = [];

        for (let i = 1; i <= 6; i++) {
            const ingredientKey = `strIngredient${i}` as keyof typeof details;
            const measureKey = `strMeasure${i}` as keyof typeof details;

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

    const ingredientsAndMeasures = getIngredientsAndMeasures();

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            {details.strDrinkThumb && (
                <img className="w-full" src={details.strDrinkThumb} alt={details.strDrink} />
            )}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{details.strDrink}</div>
                <div className="font-bold text-xl mb-2">{details.strAlcoholic}</div>
                <ul>
                    {ingredientsAndMeasures.map((item, index) => (
                        <li key={index}>{`${item.ingredient} - ${item.measure}`}</li>
                    ))}
                </ul>
                <br />
                <p className="text-gray-700 text-base">{details.strInstructions}</p>
            </div>
        </div>
    );
};


