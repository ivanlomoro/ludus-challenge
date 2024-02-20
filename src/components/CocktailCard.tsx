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
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg m-4 relative">
                {details.strDrinkThumb && (
                    <div className="relative">
                        <img className="w-full" src={details.strDrinkThumb} alt={details.strDrink} />
                        <div className="absolute top-3 left-3 bg-primary bg-opacity-90 text-white p-1 rounded-lg font-outfit font-bold">
                            <p className="sm:text-lg md:text-sm lg:text-sm">{details.strAlcoholic}</p>
                        </div>
                    </div>
                )}
                <div className="px-6 py-4">
                    <div className="font-normal font-forum sm:text-lg md:text-sm 2xl:text-lg mb-2">{getLimitedDrinkName(details.strDrink)}</div>
                    <div className="text-center">
                        <button
                            aria-label="See details"
                            className="mt-4 px-5 py-2 ludus-button text-white font-outfit font-normal md:text-md  rounded-3xl"
                            onClick={toggleModal}
                        >
                            See details
                        </button>
                    </div>
                </div>
            </div>
            <ModalDetails isOpen={isModalOpen} onClose={toggleModal}>
                <h2 className="font-forum font-bold text-3xl mb-2 text-white">{details.strDrink}</h2>
                <h3 className="font-forum font-medium text-lg mb-2 text-white">Ingredients</h3>
                <ul className="font-outfit font-thin text-white">
                    {ingredientsAndMeasures.map((item, index) => (
                        <li key={index}>{`• ${item.ingredient} - ${item.measure}`}</li>
                    ))}
                </ul>
                <h3 className="font-forum font-medium text-xl mb-2 mt-4 text-white">Preparation</h3>
                <p className="font-outfit font-thin text-white">{details.strInstructions}</p>
            </ModalDetails>
        </>
    );
};



