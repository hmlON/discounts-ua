import React, { Component } from 'react';
import Shop from './Shop';
// import './Shop.css';

class ShopList extends Component {
  render() {
    var shops = this.props.shops.map((shop) => <Shop {...shop} />)

    return (
      <div className="ShopList">
        {shops}
      </div>
    );
  }
}

export default ShopList;
