import { useState } from 'react';
import './index.css';
import { CocktailList } from './components/CocktailList';
import { Header } from './components/Header';
import { RandomCocktailButton } from './components/RandomCocktailButton';
import { CocktailCard, CocktailDetails } from './components/CocktailCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [randomCocktail, setRandomCocktail] = useState<CocktailDetails | null>(null);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    setRandomCocktail(null);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <RandomCocktailButton setRandomCocktail={setRandomCocktail} />
      {randomCocktail ? (
      <div className="flex justify-center items-center p-4">
        <div className="sm:max-w-sm md:max-w-64 lg:max-w-64 2xl:max-w-sm">
          <CocktailCard details={randomCocktail} />
        </div>
      </div>
      ) : (
        <CocktailList ingredient={searchTerm} />
      )}
    </>
  );
}

export default App;
