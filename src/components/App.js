import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import API from '../utils/api';
import Shop from './Shop';
import Loading from './Loading';
import Failed from './Failed';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      activeShopId: null,
    }
  }

  componentDidMount() {
    API.shops().then(shops => {
      this.setState({
        "shops": shops,
        activeShopId: 1
      })
    })
  }

  render() {
    if (this.state.requestFailed) return <Failed />
    if (!this.state.shops) return <Loading />

    const links = this.state.shops.map(shop =>
        <Link to={"/discounts-ua/" + shop.path}
              className={"MenuShop" + (shop.id === this.state.activeShopId ? " MenuShopActive" : "")}>
          {shop.name}
        </Link>
    )

    return (
      <div className="App">
        <div className="Menu">
          <div className="Brand">Discounts UA</div>
          <div className="MenuShopNames">{links}</div>
        </div>

        <Switch>
          <Route path={"/discounts-ua/:shop"} component={Shop}/>
        </Switch>
      </div>
    );
  }
}

export default App;
