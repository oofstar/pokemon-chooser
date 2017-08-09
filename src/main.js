import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let pokemon = [
  {
    id: 1,
    name: "Bulbasaur"
  },
  {
    id: 2,
    name: "Ivysaur"
  },
  {
    id: 25,
    name: "Pikachu"
  },
  {
    id: 100,
    name: "Voltorb"
  }
]

ReactDOM.render(
  <App pokemon={pokemon} />,
  document.getElementById('app')
);
