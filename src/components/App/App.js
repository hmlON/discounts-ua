import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import API from '../../utils/api';
import Shop from '../Shop/Shop';
import Loading from '../Loading/Loading';

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
    if (this.state.requestFailed) return <div class="Falied">Failed!</div>
    if (!this.state.shops) return <Loading />

    const links = this.state.shops.map(shop =>
          <Link to={"/discounts-ua/" + shop.path}
                className={"MenuItem" + (shop.id === this.state.activeShopId ? " MenuItemActive" : "")}
                key={shop.id} >
            {shop.name}
          </Link>
    )

    return (
      <div className="App">
        <aside className="Menu">
          <div className="Brand">Discounts UA</div>
          <nav className="MenuShopNames">{links}</nav>
        </aside>

        <Switch>
          <Route path={"/discounts-ua/:shop"} component={Shop}/>
        </Switch>
      </div>
    );
  }
}

export default App;
