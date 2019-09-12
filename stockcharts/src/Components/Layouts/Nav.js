import React, {Component} from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {a:5};
  }

  render(){
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="subtitle1" color="inherit">StockCharts</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}