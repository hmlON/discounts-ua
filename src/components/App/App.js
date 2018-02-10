import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Shop from '../Shop/Shop';
import Menu from '../Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path={"/discounts-ua/:shop"} component={Shop}/>
          <Route path={"/discounts-ua"} component={Menu}/>
        </Switch>
      </div>
    );
  }
}

export default App;
