import React, { Component } from 'react';
import DiscountType from './DiscountType';
// import './DiscountTypeList.css';

class DiscountTypeList extends Component {
  render() {
    var discountTypes = this.props.discountTypes.map((discountType) => <DiscountType {...discountType} />)

    return (
      <div className="DiscountTypeList">
        {discountTypes}
      </div>
    );
  }
}

export default DiscountTypeList;
