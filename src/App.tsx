import './index.css'

function App() {


  return (
    <>
      <div className='bg-primary text-cyan-500 m-4'>
        React app
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 m-3">
          <input type="text" placeholder="Buscar..." className="flex-grow outline-none px-2" />
          <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Buscar</button>
        </div>
        <button className="bg-blue-500 text-white custom-border font-bold py-2 px-4 rounded">
          Click me
        </button>
      </div>
    </>
  )
}

export default App
