import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";

function App() {
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState(`${BASE_URL}?limit=1`)

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`${BASE_URL}/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }
  
  useEffect(() => {
    getAllPokemons()
  }, [])
  
  return (
    <div className="app-container">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container">

        {allPokemons.map( (pokemonStats, index) => 
         //   ${index}
            //   pokemonStats.id
            //   pokemonStats.sprites.other.dream_world.front_default
            <h1>
           
              {pokemonStats.name}
              </h1>
              // pokemonStats.types[0].type.name
            )}

        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>
  );
}

export default App;
