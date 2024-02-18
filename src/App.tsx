import { useState } from 'react';
import SearchBar from './components/SearchBar';
import './index.css';
import { CocktailList } from './components/CocktailList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <CocktailList ingredient={searchTerm} />
    </>
  );
}

export default App;
