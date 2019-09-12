import React, { Component } from 'react';
import '../App.css'
import {Nav, Footer} from "./Layouts/";
import Panes from "./Charts";
import {muscles, exercises} from "../store.js";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      exercises
    }
  }

  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise
      exercises[muscles] = exercises[muscles]
      ?[...exercises[muscles], exercise] : [exercise] 
      return exercises;
    }, {}));
  }

  render(){
    const exercises = this.getExercisesByMuscles();
    return (
      <div className="App">
        <Nav />
        <Panes exercises={exercises}/>
        <Footer muscles={muscles}/>
      </div>);
  }
}

export default App;
