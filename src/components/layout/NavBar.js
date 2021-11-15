import './NavBar.css';
import SearchField from './SearchField.js'
import React, { Component } from 'react'


export default class NavBar extends Component {
    render() {
        return (
        <div className="nav-bar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Pokedex</a></li>
                <li><a href="#">About Us</a></li>
                <form>
                    <SearchField/>
                </form>
            </ul>
        </div>
        )
    }
}
