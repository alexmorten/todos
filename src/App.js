import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>TODOS</h3>

        </div>
        <Todos/>
      </div>
    );
  }
}

export default App;
