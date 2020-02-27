import React, { Component } from 'react';
import Body from './components/Body'
import Register from './components/Register'
import './components/Styles.css';
import Display from './components/Display'

class App extends Component {
  state = {
    operations:[],
    regs:[],
    display:"0",
    complex: false,
    index:0,
    new:0
  }

  onDisplayHandler = (display) => {
    console.log(display);
    if(this.state.display === "0"){
      this.setState({display});
      this.setState({new:0});
    }else{
      this.setState({display:`${this.state.display}${display}`});
      this.setState({new:0});
    }
  }

  onEqualHandler = () => {
    try {
      let size = this.state.operations.length;
      console.log(size);
      let operations = this.state.operations;
      operations.push(this.state.display);
      this.setState({display:`${eval(this.state.display)}`});
      this.setState({operations});
      this.setState({
        regs: [this.state.operations[size-this.state.index],
               this.state.operations[size-1-this.state.index],
               this.state.operations[size-2-this.state.index]]
      });
      this.setState({new:1});
      console.log(this.state.regs);
    } catch (error) {
      this.setState({display:`Syntax ERROR`});
    }
    
  }

  onDeleteHandler = () => {
    if(this.state.display === "Syntax ERROR" || this.state.display === "Infinity" || this.state.display === "undefined" || this.state.new === 1){
      this.setState({display:"0"});
    }else{
      this.setState({display:this.state.display.slice(0,-1)});
    }
  }

  onComplexHandler = () => {
    this.setState({complex:!this.state.complex});
    console.log(this.state.complex);
  }

  onTrigoHandler = (type) => {
    if(type === "sin"){
      this.setState({display:`${Math.sin(this.state.display)}`});
    }
    else if(type === "cos"){
      this.setState({display:`${Math.cos(this.state.display)}`});
    }
    else{
      this.setState({display:`${Math.tan(this.state.display)}`});
    }
  }

  onIndexHandler = (type) => {
    let size = this.state.operations.length;
    if (this.state.index <= size && size >= 0){
      (type==="up")?this.setState({index:this.state.index-1}):this.setState({index:this.state.index+1});
    }

    this.setState({
      regs: [this.state.operations[size-this.state.index],
             this.state.operations[size-1-this.state.index],
             this.state.operations[size-2-this.state.index]]
    });
  }

  onOperationHandler = (operation) => {
    if(this.state.display === "0"){
      this.setState({display:`${eval(operation)}`});
      this.setState({new:0});
    }else{
      this.setState({display:`${this.state.display}${eval(operation)}`});
      this.setState({new:0});
    }
    
  }

  render() {
    return (
      <div className="App">
        <Register onClick={{onIndex: this.onIndexHandler,onOperation: this.onOperationHandler}} regs = {this.state.regs}/>
        <Display output = {this.state.display}/>
        <Body onClick={
          {
          onDisplay: this.onDisplayHandler, 
          onEqual: this.onEqualHandler,
          onDelete: this.onDeleteHandler,
          onComplex: this.onComplexHandler,
          onTrigo: this.onTrigoHandler
          }
        } complex = {this.state.complex}/>
      </div>
    );
  }
}

export default App;