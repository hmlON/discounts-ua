import React, { Component } from 'react';
import DiscountList from './DiscountList';
// import './DiscountType.css';

class DiscountType extends Component {
  render() {
    return (
      <div className="DiscountType">
        <div className="DiscountTypeInfo">
          {this.props.name} (from {this.props.startDate} to {this.props.endDate})
        </div>
        <DiscountList discounts={this.props.discounts} />
      </div>
    );
  }
}

export default DiscountType;
