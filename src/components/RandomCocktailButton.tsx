import { useRandomCocktail } from '../hooks/useRandomCocktail';
import { CocktailDetails } from './CocktailCard';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

interface RandomCocktailButtonProps {
    setRandomCocktail: (cocktail: CocktailDetails | null) => void;
}

export const RandomCocktailButton: React.FC<RandomCocktailButtonProps> = ({ setRandomCocktail }) => {
    const { refetch } = useRandomCocktail();

    const handleClick = async () => {
        const randomCocktailData = await refetch();
        setRandomCocktail(randomCocktailData.data);
    };

    return (
        <div className="flex justify-center items-center">
            <button
                onClick={handleClick}
                className="flex items-center py-2 px-4 mt-2 ludus-button-random text-white font-bold rounded-full"
            >
                <GiPerspectiveDiceSixFacesRandom className="mr-2" size={30} /> 
                Random Cocktail
            </button>
        </div>

    );
};
