import React, {Component} from 'react';

class Decision extends Component {
		constructor(props) {
  		super(props);
        const Question = this.generateNewQuestion(); 
          this.state = {
 			value1: Question[0],
            value2: Question[1],
            value3: Question[2],
            proposedAnswer: Question[3],
        	};
        }
  
        generateNewQuestion = () => {

          const value1 = Math.floor(Math.random() * 100);
          const value2 = Math.floor(Math.random() * 100);
          const value3 = Math.floor(Math.random() * 100);
          const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
          return[value1, value2, value3, proposedAnswer]  
      	};
		

		updateTheState = (newQuestion) => {
        	this.state(currentState => ({
           	value1: newQuestion[0],
            value2: newQuestion[1],
            value3: newQuestion[2],
            proposedAnswer: newQuestion[3],
            
            }))
          	}

		controlQuestion = event => {
        	const newQuestion = this.generateNewQuestion();
          	this.updateTheState(newQuestion);
          	const answerWasCorrect = this.evaluateTheAnswer(event.target.name);
   			this.props.handleAnswer(answerWasCorrect);
          	
        } 
		
		evaluateTheAnswer = (givenAnswer) => {
        	
          	const {val1, val2, val3, final } = this.props;
			const correctAnswer = val1 + val2 + val3;
			return (
                    (correctAnswer === final && givenAnswer === 'true') ||
                    (correctAnswer !== final && givenAnswer === 'false')
    			  );
        }
	
		render() {
          const {value1, value2, value3, final } = this.props;
          return (
      // without this '(', JS will automatically put a ';' after 'return.'
      <div>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${final}`}</p>
        </div>

        <button onClick={this.handleAnswer} name="true">
          True
        </button>

        <button name="false" onClick={this.handleAnswer}>
          False
        </button>

      </div>
    );
   }

}

export default Decision;