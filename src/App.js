import React, { Component } from "react";
import "./App.css";
import "./sections/BitcoinPrice"
import BitcoinPrice from "./sections/BitcoinPrice";


class App extends Component {
  state = {
    bpi: {},
  };

  componentDidMount(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res => res.json())
    .then(data => {
      this.setState({bpi: data['bpi']})
      this.setState({selected: Object.keys(data['bpi'])[0]})
    })
  }

  render() {
    return (
      <div className="App">
        <BitcoinPrice bpi={this.state.bpi} defaultBPI={this.state.selected}></BitcoinPrice>
      </div>
    );
  }
}


export default App;
