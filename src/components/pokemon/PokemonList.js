import React, { Component } from 'react'
import PokemonCard from './PokemonCard'

export default class PokemonList extends Component {
    render() {
        return (
            <div>

            <div class="album py-5 bg-light">
            <div class="container pokemon-list">
            <div class="row">
                
                <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <PokemonCard/>
                </div>
                </div>

                <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <PokemonCard/>
                </div>
                </div>

                <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <PokemonCard/>
                </div>
                </div>

                <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <PokemonCard/>
                </div>
                </div>

                <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <PokemonCard/>
                </div>
                </div>

                <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <PokemonCard/>
                </div>
                </div>
            </div>
            </div>
            </div>

            </div>
        )
    }
}
