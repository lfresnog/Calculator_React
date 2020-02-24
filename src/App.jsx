import React, { Component } from 'react';
import Body from './components/Body'
import './App.css';
import Display from './components/Display'

class App extends Component {
  state = {

  }

  onDisplayHandler = (output) => {
    console.log(output);
  }
  render() {
    return (
      <div className="App">
        <Display/>
        <Body onClick={{onDisplay: this.onDisplayHandler}}/>
      </div>
    );
  }
}

export default App;