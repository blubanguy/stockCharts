import React, { Component } from 'react';
import '../App.css'
import {Nav, Footer} from "./Layouts";
import Panes from "./Charts";
import {muscles, exercises} from "../store.js";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      exercises,
      exercise: {}
    }
  }

  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      exercises[muscles] = exercises[muscles]
      ?[...exercises[muscles], exercise] : [exercise] 
      return exercises;
    }, {}));
  }

  handleCategorySelected = category => {
    this.setState({
      category,
      exercise: {}
    })
  }

  handleExerciseSelected  = id => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render(){
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;
    return (
      <div className="App">
        <Nav />
        <Panes 
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
          exercise={exercise}
          />
        <Footer 
        muscles={muscles}
        onSelect={this.handleCategorySelected}
        category={category}
        />
      </div>);
  }
}

export default App;
