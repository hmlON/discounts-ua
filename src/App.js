import React, { Component } from 'react';
import './App.css';

const shops_api_url = 'https://discounts-ua.herokuapp.com/api/shops'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    fetch(shops_api_url)
      .then(d => d.json())
      .then(d => {
        this.setState({
          shops: d
        })
      })
  }

  render() {
    if (!this.state.shops) return <h3>Loading...</h3>

    return (
      <div className="App">
        <div className="App-header">
          <h3>Welcome to Discounts-UA</h3>
        </div>
        <p className="App-intro">
          <h3>{this.state.shops[0].name}</h3>
        </p>
      </div>
    );
  }
}

export default App;
