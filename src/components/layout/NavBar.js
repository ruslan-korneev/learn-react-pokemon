import './NavBar.css';
import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (

          <nav className="navbar">

            <div className="home-border">
              <a className="navbar-home" href="#">Home</a>
            </div>
            <div className="poke-dex-border">
              <a className="axel-poke-dex" href="#">Axel Poke Dex</a>
            </div>
            <div className="poke-list-border">
              <a className="axel-poke-list" href="#">Axel Poke List</a>
            </div>
            <form className="search-border">
              <input className="search" type="text" placeholder="Search" />
            </form>

          </nav>

        )
    }
}
