import React, { Component } from 'react';
import DiscountList from './DiscountList';
// import './DiscountType.css';

class DiscountType extends Component {
  formatDate(date) {
    return (new Date(date)).toLocaleDateString()
  }

  render() {
    const startDate = this.formatDate(this.props.startDate)
    const endDate = this.formatDate(this.props.endDate)

    return (
      <div className="DiscountType">
        <div className="DiscountTypeInfo">
          {this.props.name} (from {startDate} to {endDate})
        </div>
        <DiscountList discounts={this.props.discounts} />
      </div>
    );
  }
}

export default DiscountType;
