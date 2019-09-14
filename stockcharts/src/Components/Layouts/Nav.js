import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import CreateDialog from '../Charts/Dialog'

export default ({muscles, onExerciseCreate}) =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="subtitle1" color="inherit" style={{flex: 1}}>StockCharts</Typography>
      <CreateDialog 
      muscles={muscles}
      onCreate={onExerciseCreate}/>
    </Toolbar>
  </AppBar>