import SearchBar from './components/SearchBar'
import './index.css'

function App() {

  const handleSearch = (query: string) => {
    console.log(query);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch } />
    </>
  )
}

export default App
