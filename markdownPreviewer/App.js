import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import marked from "react-marked";
import initialState from "./initialState";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: initialState
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    const { text } = this.state;
    //const markdown = marked(text, { breaks: true });

    return (
      <div className="container">
        <h2 className="text-center m-4">Markdown Previewer</h2>
        <div className="row">
          <div className="col-6">
            <h6 className="text-center">Please Enter Your Markdown</h6>
            <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange} />
          </div>
          <div className="col-6">
            <h6 className="text-center">See Your Result Below</h6>
            <div className="preview rounded p-2" /*dangerouslySetInnerHTML={{__html: markdown}}*/ id="preview"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
