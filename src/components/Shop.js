import React, { Component } from 'react';
import DiscountTypeList from './DiscountTypeList';
// import './Shop.css';

class Shop extends Component {
  render() {
    return (
      <div className="Shop">
        <div className="ShopName">
          {this.props.name}
        </div>
        <DiscountTypeList discountTypes={this.props.discount_types} />
      </div>
    );
  }
}

export default Shop;
