import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import NavBar from './components/layout/NavBar';
import PokeCard from './components/pokemon/PokeCard';

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
    <div className="all-components">
      <NavBar/>
      <div className="app-container">
        <h1>Pokemon Evolution</h1>
        <div className="all-container">

        {allPokemons.map( (pokemonStats, index) => 
            <PokeCard
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}

        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>
  );
}

export default App;
