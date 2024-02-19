import { useState } from 'react';
import './index.css';
import { CocktailList } from './components/CocktailList';
import { Header } from './components/Header';

function App() {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <CocktailList ingredient={searchTerm} />
    </>
  );
}

export default App;
