import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import API from '../../utils/api';
import Loading from '../Loading/Loading';
import './Menu.css';

class Menu extends Component {
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

  renderLink(shop) {
    return (
      <Link to={"/discounts-ua/" + shop.slug}
                className={"NavItem"}
                key={shop.id} >
        {shop.name}
      </Link>
    )
  }

  render() {
    if (this.state.requestFailed) return <div class="Falied">Failed to load Menu!</div>
    if (!this.state.shops) return <Loading />

    const links = this.state.shops.map(this.renderLink)

    return (
      <aside className="Menu">
        <div className="Brand">Discounts UA</div>
        <nav className="Nav">{links}</nav>
      </aside>
    );
  }
}

export default Menu;
