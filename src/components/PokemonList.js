import React from 'react';
import Pokemon from './Pokemon'

class PokemonList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPokemonNumber: 100
    }
    this.selectPokemon = this.selectPokemon.bind(this)
  }

  selectPokemon(id) {
    this.setState({selectedPokemonNumber: id})
  }

  render(){
    let selectedPokemonNumber = this.state.selectedPokemonNumber;

    let pokemons;

    pokemons = this.props.pokemon.map((pokemonObject) => {
      let selected = false;

      if(selectedPokemonNumber == pokemonObject.id){
        selected = true;
      }

      return (
        <Pokemon
          key={pokemonObject.id}
          id={pokemonObject.id}
          name={pokemonObject.name}
          selected={selected}
          selectPokemon={this.selectPokemon}
        />
      )
    })

    return (
      <ul>
        {pokemons}
      </ul>
    )
  }
}

export default PokemonList;
