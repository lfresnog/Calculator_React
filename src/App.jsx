import React, { Component } from 'react';
import Body from './components/Body'
import Register from './components/Register'
import './components/Styles.css';
import Display from './components/Display'
import { evaluate } from "mathjs";

function number_format(val, decimals){
  val = parseFloat(val);
  return val.toFixed(decimals);
}

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
      let operations = this.state.operations;
      operations.push(this.state.display);
      this.setState({display:`${evaluate(this.state.display)}`});
      this.setState({operations});
      let size = this.state.operations.length;
      this.setState({
        regs: [this.state.operations[size-1],
               this.state.operations[size-2],
               this.state.operations[size-3]]
      });
      this.setState({new:1});
      this.setState({index:0});
      console.log(this.state.regs);
    } catch (error) {
      this.setState({display:`Syntax ERROR`});
    }
    
  }

  onDeleteHandler = (type) => {
    (type==="del")?this.setState({display:this.state.display.slice(0,-1)}):this.setState({display:"0"});
  }

  onComplexHandler = () => {
    this.setState({complex:!this.state.complex});
    console.log(this.state.complex);
  }

  onIndexHandler = (type) => {
    let size = this.state.operations.length;
    let index = this.state.index;

    if(this.state.operations[size-(index)]){
      if(type==="up"){
        index=index-1;
      }
    }
    if(this.state.operations[size-(4+index)]){
      if(type==="down"){
        index=index+1;
      } 
    }

    console.log(`index:${this.state.index}`);
    console.log(`index1:${index}`);
    console.log(`size:${size}`);


    this.setState({
      regs: [this.state.operations[size-(1+index)],
             this.state.operations[size-(2+index)],
             this.state.operations[size-(3+index)]]
    });

    this.setState({index});
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
        {(this.state.complex === true) ? <Register onClick={{onIndex: this.onIndexHandler,onOperation: this.onOperationHandler}} regs = {this.state.regs}/>:null}
        <Display onClick = {{onComplex: this.onComplexHandler}} output = {this.state.display}/>
        <Body onClick={
          {
          onDisplay: this.onDisplayHandler, 
          onEqual: this.onEqualHandler,
          onDelete: this.onDeleteHandler
          }
        } complex = {this.state.complex}/>
      </div>
    );
  }
}

export default App;