import React from "react";
import QuoteAndAuthor from "./QuoteAndAuthor"
import quotes from "./QuotesDatabase";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  randomQuote () {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }

  shuffleQuotes(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while(0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes)
  };

  componentDidMount() {
    window.addEventListener("load", this.handleLoad);
  }

  handleLoad = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes)
  };

  randomColour() {
    const colours = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857"
    ];
    const colourIndex = Math.floor(Math.random() * colours.length);
    return colours[colourIndex];
  }

  render() {
    return (
      <div>
        <QuoteAndAuthor displayColour={this.randomColour} handleClick={this.handleClick} {...this.state}/>
      </div>
    );
  }
}

export default App;
