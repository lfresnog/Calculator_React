import React, { Component } from 'react';
import Body from './components/Body'
import './components/Styles.css';
import Display from './components/Display'

class App extends Component {
  state = {
    display:"0"
  }

  onDisplayHandler = (display) => {
    console.log(display);
    if(this.state.display === "0"){
      this.setState({display});
    }else{
      this.setState({display:`${this.state.display}${display}`});
    }
  }

  onEqualHandler = () => {
    this.setState({display:`${eval(this.state.display)}`});
  }

  onDeleteHandler = () => {
    this.setState({display:this.state.display.slice(0,-1)});
  }

  render() {
    return (
      <div className="App">
        <Display output = {this.state.display}/>
        <Body onClick={
          {
          onDisplay: this.onDisplayHandler, 
          onEqual: this.onEqualHandler,
          onDelete: this.onDeleteHandler
          }
        }/>
      </div>
    );
  }
}

export default App;