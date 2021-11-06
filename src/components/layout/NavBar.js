import './NavBar.css';
import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (

          <nav className="navbar">

            <div className="home-border"></div>
            <div className="poke-dex-border"></div>
            <div className="poke-list-border"></div>

            <form className="search-border">
              <input className="search" type="text" placeholder="Search" />
            </form>

          </nav>

        )
    }
}
