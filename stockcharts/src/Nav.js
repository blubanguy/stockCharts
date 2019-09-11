import React, { Component } from 'react';
import TickerSearch from "./TickerSearch.js";

class Nav extends Component {
  render(){
    return (
      <div className="Nav">
        <nav>
            <a href="/" className="w-third lightest-blue">Charts</a>
            <a href="/" className="w-third lightest-blue">Watch List</a>
            <TickerSearch />
            <a href="/" className="w-third lightest-blue">Profile</a>
    
        </nav>
      </div>);
  }
}

export default Nav;
