import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi.</h1>
        <Person name="Fred" age="28" />
        <Person name="Manu" age="18">My hobbies: racing</Person>
        <Person name="Angie" age="32" />
      </div>
    );
  }
}

export default App;
