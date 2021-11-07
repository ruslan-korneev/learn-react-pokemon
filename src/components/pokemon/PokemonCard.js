import React, { Component } from 'react';
import logo from './pokemon_card.png';
export default class PokemonCard extends Component {
    render() {
        return (
            <div className="pokemon-card">
              <img wigth="300px" src={logo}/>
            </div>
        )
    }
}
