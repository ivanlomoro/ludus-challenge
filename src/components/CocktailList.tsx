import { useState, useEffect } from "react";
import { useCocktails } from "../hooks/useCocktails";
import { CocktailCard } from "./CocktailCard";
import { toast } from 'react-hot-toast';

interface CocktailListProps {
  ingredient: string;
}

export const CocktailList: React.FC<CocktailListProps> = ({ ingredient }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;

  const { data, isLoading, isError } = useCocktails(ingredient, currentPage, limit);

  useEffect(() => {
    setCurrentPage(1);
  }, [ingredient]);

  useEffect(() => {
    if (isError) {
      toast.error('No cocktails found with that ingredient.');
    }
  }, [isError]);

  useEffect(() => {
    if (data && currentPage > data.totalPages) {
      setCurrentPage(1);
    }
  }, [data, data?.totalPages, currentPage]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);
  

  if (isLoading) return <div className="loader-overlay"><div className="loader"></div></div>;
  if (isError || !data || currentPage > data.totalPages) return null;

  const { cocktails, totalPages } = data;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {cocktails.map(details => (
          <CocktailCard key={details.idDrink} details={details} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setCurrentPage(old => Math.max(old - 1, 1))}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className={`mt-4 mb-6 px-5 py-2 mx-2 text-white font-outfit font-normal md:text-md rounded-3xl ${currentPage === 1 ? 'bg-gray-500' : 'ludus-button'}`}
        >
          Prev
        </button>
        <button
          onClick={() => setCurrentPage(old => old + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Next Page"
          className={`mt-4 mb-6 px-5 py-2 mx-2 text-white font-outfit font-normal md:text-md rounded-3xl ${currentPage >= totalPages ? 'bg-gray-500' : 'ludus-button'}`}
        >
          Next
        </button>
      </div>
    </>
  );
};
