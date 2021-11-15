import './SearchField.css';
import React, { Component } from 'react'

export default class SearchField extends Component {
    render() {
        return (
            <div className="search-box">
                <button className="btn-search">
                    <i className="fas fa-search"></i>
                </button>
                <input type="text" className="input-search" placeholder="Type to Search..."/>
            </div>
        )
    }
}
