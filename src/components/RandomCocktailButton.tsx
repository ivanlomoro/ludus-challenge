import React, { useState } from 'react';
import { useRandomCocktail } from '../hooks/useRandomCocktail';
import { CocktailDetails } from './CocktailCard';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import Confetti from 'react-dom-confetti';

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

    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    return (
        <div className="flex justify-center items-center">
            <Confetti active={confettiActive} config={config} />
            <button
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
