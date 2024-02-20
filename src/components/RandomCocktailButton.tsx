import React, { useState } from 'react';
import { useRandomCocktail } from '../hooks/useRandomCocktail';
import { CocktailDetails } from './CocktailCard';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import Confetti from 'react-dom-confetti';
import { config } from '../utils/utils';

interface RandomCocktailButtonProps {
    setRandomCocktail: (cocktail: CocktailDetails | null) => void;
}

export const RandomCocktailButton: React.FC<RandomCocktailButtonProps> = ({ setRandomCocktail }) => {
    const { refetch, isLoading } = useRandomCocktail();
    const [confettiActive, setConfettiActive] = useState(false);

    const handleClick = async () => {
        const randomCocktailData = await refetch();
        setRandomCocktail(randomCocktailData.data);
        setConfettiActive(true);
        setTimeout(() => setConfettiActive(false), 500);
    };

    return (
        <div className="flex justify-center items-center">
            <Confetti active={confettiActive} config={config} />
            <button
                aria-label='Random Cocktail'
                onClick={handleClick}
                className={`flex items-center py-2 px-4 mt-2 ludus-button-random text-white font-bold rounded-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {isLoading ? <div className="loader-overlay">
                    <div className="loader"></div>
                </div> : (
                    <>
                        <GiPerspectiveDiceSixFacesRandom className="mr-2" size={30} />
                        Random Cocktail
                    </>
                )}
            </button>
        </div>
    );
};
