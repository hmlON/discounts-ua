import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
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
    // const shops_api_url = 'https://discounts-ua.herokuapp.com/api/shops'
    // 
    // fetch(shops_api_url)
    //   .then(response => {
    //     if (!response.ok) {
    //       throw Error('Network request failed')
    //     }
    //     return response
    //   })
    //   .then(data => data.json())
    //   .then(data => {
    //     this.setState({
    //       shops: data
    //     })
    //   }, () => {
    //     this.setState({
    //       requestFailed: true
    //     })
    //   })
    this.setState({
      "shops": [
        {
          "id": 1,
          "name":"ATB",
          "path":"atb"
        },
        {
          "id": 2,
          "name":"Silpo",
          "path":"silpo"
        }
      ],
      activeShopId: 1
    })
  }

  render() {
    if (this.state.requestFailed) return <Failed />
    if (!this.state.shops) return <Loading />

    const links = this.state.shops.map((shop) =>
        <Link to={shop.path}
              className={"MenuShop" + (shop.id == this.state.activeShopId ? " MenuShopActive" : "")}>
          {shop.name}
        </Link>
    )
    const routes = this.state.shops.map((shop) =>
      <Route path={`/${shop.path}/`} component={Shop}/>
    )

    return (
      <div className="App">
        <div className="Menu">
          <div className="Brand">Discounts UA</div>
          <div className="MenuShopNames">{links}</div>
        </div>

        <Switch>{routes}</Switch>
      </div>
    );
  }
}

export default App;
