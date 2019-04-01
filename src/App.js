import React, { Component } from 'react';
import ExerciseForm from './ExerciseForm';
import ExerciseTable from './ExerciseTable';

import "antd/dist/antd.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ExerciseForm/>
      <ExerciseTable/>
      </div>
    );
  }
}

export default App;
