import React from "react"
import "./App.css"

const writtenNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operations = ["division", "multiplication", "subtraction", "addition"]; 
const operationSymbols = ["/", "*", "-", "+"];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lastPressed: undefined,
      storedCalculation: "0",
      operation: undefined
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = event => {
    const { lastPressed, storedCalculation } = this.state;
    const { innerText } = event.target;
  
    switch(innerText) {
      case "AC": {
        this.setState({
          storedCalculation: "0"
        });
        break;
      }
      case "=": {
        // eslint-disable-next-line
        const evaluation = eval(storedCalculation);
        this.setState({
          storedCalculation: evaluation
        });
        break;
      }
      case ".": {
        // eslint-disable-next-line
        const splitFormula = storedCalculation.split(/[\+\-\*\/]/);
        const lastItem = splitFormula.splice(-1)[0];
        if (!lastItem.includes(".")) {
          this.setState({
            storedCalculation: storedCalculation + "."
          })
        }
        break;
      }
      default: {
        let overwriteSymbol = undefined;
        if (operationSymbols.includes(innerText)) {
          if (operationSymbols.includes(lastPressed) && innerText !== "-") {
            const lastNumberIndex = storedCalculation
                                    .split("")
                                    .reverse()
                                    .findIndex(char => char !== " " && numbers.includes(+char));
            overwriteSymbol = storedCalculation.slice(0, storedCalculation.length - lastNumberIndex) + ` ${innerText} `;
          } else {
            overwriteSymbol = `${storedCalculation}${innerText}`;
          }
        } else {
          overwriteSymbol = storedCalculation === "0" ? innerText : (storedCalculation + innerText);
        }
        this.setState({
          storedCalculation: overwriteSymbol
        });
      }
    }
    this.setState({
      lastPressed: innerText
    });
  }

  render() {
    const { storedCalculation } = this.state;

    return (
      <div id="calculator">
        <div className="display" id="display">
          <div className="forumla-screen"></div>
          <div className="output-screen">{storedCalculation}</div>
        </div>
          <button id="clear" onClick={this.handleClick}>AC</button>
          {numbers.map(number => (
            <button className="number-button" id={`${writtenNumbers[number]}`} key={number} onClick={this.handleClick}>{number}</button>
          ))}
          <button className="operation-symbol" id="decimal" onClick={this.handleClick}>.</button>
          {operations.map((operation, numbers) => (
            <button className="operation-symbol" id={`${operation}`} key={operation} onClick={this.handleClick}>{operationSymbols[numbers]}</button>
          ))}
          <button className="operation-symbol" id="equals" onClick={this.handleClick}>=</button>
      </div>
    )
  }
}

export default App
