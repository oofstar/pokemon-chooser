import React from 'react';

const Pokemon = (props) => {
  let highlight = "";

  if(props.selected){
    highlight = "yellow"
  }

  let pickPokemon = () => {
    props.selectPokemon(props.id)
  }

  return (
    <li className={highlight} onClick={pickPokemon}>
      {props.name}
    </li>
  )
}

export default Pokemon;
