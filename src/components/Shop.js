import React, { Component } from 'react';
import DiscountTypeList from './DiscountTypeList';

class Shop extends Component {
  render() {
    return (
      <div className="Shop">
        <DiscountTypeList discountTypes={this.props.discount_types} />
      </div>
    );
  }
}

export default Shop;
