import React, { Component } from 'react';
// import DiscountTypeList from './DiscountTypeList';
// import './DiscountType.css';

class DiscountType extends Component {
  render() {
    return (
      <div className="DiscountType">
        <div className="DiscountTypeName">
          {this.props.name}
        </div>
      </div>
    );
  }
}

export default DiscountType;
