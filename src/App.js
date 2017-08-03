import React, { Component } from 'react';
import './App.css';

const shops_api_url = 'https://discounts-ua.herokuapp.com/api/shops'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(shops_api_url)
      .then(response => {
        if (!response.ok) {
          throw Error('Network request failed')
        }
        return response
      })
      .then(data => data.json())
      .then(data => {
        this.setState({
          shops: data
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {
    if (this.state.requestFailed) return <h3>Failed!</h3>
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
