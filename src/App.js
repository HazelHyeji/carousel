import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import Carousel from './Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>회전목마</h1>
        <Carousel/>
      </div>
    );
  }
}

export default App;
