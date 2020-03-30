import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Decision from './decision';
import Rank from './rank';


//const numQuestions = 0;
//const numCorrect = 0;

class App extends Component {
  	//managing state
  state = {
      numCorrect: 0,
      numQuestions: 0
    };
  
	checkAnswer  =  calculateAnswer => {
  						if (calculateAnswer) {
                        	this.state(currentState => ({
                        			numCorrect:currentState.numCorrect +1 
                              }));
                        	
                          
                        }
  						 	this.state(currentState => ({
                        			numQuestions:currentState.numQuestions +1	    
                              }));
  						}
  						
  
  						
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
       
          <p className="text">
          
			
			<Decision checkAnswer= {this.checkAnswer} />
			<Rank numCorrect = {this.state.numCorrect} numQuestions = {this.state.numQuestions}/>
</p>
			


        </div>
      </div>
    );
  }
}

export default App;
