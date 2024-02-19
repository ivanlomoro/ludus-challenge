import { ModalDetails } from "./ModalDetails";
import { useCocktailDetails } from "../hooks/useCocktailsDetails";
import { getIngredientsAndMeasures, getLimitedDrinkName } from "../utils/utils";

export interface CocktailDetails {
    [key: `strIngredient${number}`]: string | null; 
    [key: `strMeasure${number}`]: string | null;
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
    const { isModalOpen, toggleModal } = useCocktailDetails();
    const ingredientsAndMeasures = getIngredientsAndMeasures(details);


    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                {details.strDrinkThumb && (
                    <img className="w-full" src={details.strDrinkThumb} alt={details.strDrink} />
                )}
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{getLimitedDrinkName(details.strDrink)}</div>
                    <div className="text-xl">{details.strAlcoholic}</div>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                        onClick={toggleModal}
                    >
                        Más detalles
                    </button>
                </div>
            </div>
            <ModalDetails isOpen={isModalOpen} onClose={toggleModal}>
                <h2 className="font-bold text-xl mb-2">{details.strDrink}</h2>
                <ul>
                    {ingredientsAndMeasures.map((item, index) => (
                        <li key={index}>{`${item.ingredient} - ${item.measure}`}</li>
                    ))}
                </ul>
                <p className="text-gray-700 text-base mt-4">{details.strInstructions}</p>
            </ModalDetails>
        </>
    );
};



