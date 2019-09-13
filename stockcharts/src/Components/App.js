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
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})
    
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      exercises[muscles] = [...exercises[muscles], exercise]
      return exercises;
    }, initExercises));
  }

  handleCategorySelect = category => {
    this.setState({
      category,
      exercise: {}
    })
  }

  handleExerciseSelect  = id => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }))
  }
  render(){
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;
    return (
      <div className="App">
        <Nav 
        muscles={muscles}
        onExerciseCreate={this.handleExerciseCreate}/>
        <Panes 
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelect}
          exercise={exercise}
          onDelete={this.handleExerciseDelete}
          />
        <Footer 
        muscles={muscles}
        onSelect={this.handleCategorySelect}
        category={category}
        />
      </div>);
  }
}

export default App;
