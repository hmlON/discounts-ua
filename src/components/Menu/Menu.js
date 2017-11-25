import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Menu.css';

class Menu extends Component {
  renderLink(shop) {
    return (
      <Link to={"/discounts-ua/" + shop.path}
                className={"NavItem"}
                key={shop.id} >
        {shop.name}
      </Link>
    )
  }

  render() {
    const links = this.props.shops.map(this.renderLink)

    return (
      <aside className="Menu">
        <div className="Brand">Discounts UA</div>
        <nav className="Nav">{links}</nav>
      </aside>
    );
  }
}

export default Menu;
