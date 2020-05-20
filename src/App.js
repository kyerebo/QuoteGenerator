import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      display: "Click the button to generate a quote!",
    };
  }

  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then((resp) => resp.json())
      .then((data) => this.setState({ quotes: data }));
    console.log(this.state.quotes);
  }

  handleClick() {
    this.setState({
      display: this.state.quotes[
        Math.floor(Math.random() * this.state.quotes.length)
      ].text,
    });
  }
  render() {
    return (
      <div className="App">
        <button className="generate" onClick={() => this.handleClick()}>
          Generate
        </button>
        <div className="quote">{this.state.display}</div>
      </div>
    );
  }
}

export default App;
