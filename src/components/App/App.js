import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import API from '../../utils/api';
import Shop from '../Shop/Shop';
import Menu from '../Menu/Menu';
import Loading from '../Loading/Loading';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    API.shops().then(shops => {
      this.setState({
        "shops": shops
      })
    })
  }

  render() {
    if (this.state.requestFailed) return <div class="Falied">Failed!</div>
    if (!this.state.shops) return <Loading />

    return (
      <div className="App">
        <Menu shops={this.state.shops} />

        <Switch>
          <Route path={"/discounts-ua/:shop"} component={Shop}/>
        </Switch>
      </div>
    );
  }
}

export default App;
