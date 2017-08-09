import React from 'react';
import PokemonList from './PokemonList';

const App = (props) => {
  return (
    <div>
      <h1>Pokemon Chooser</h1>
      <PokemonList pokemon={props.pokemon}/>
    </div>
  )
}

export default App;
