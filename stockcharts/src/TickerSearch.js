import React, { Component } from 'react';
import './App.css';

class TickerSearch extends Component {
  render(){
    return (
      <div className="TickerSearch">
        <input type="text" className="search" />
        <button className="searchButton b blue">Search</button>
      </div>);
  }
}

export default TickerSearch;
