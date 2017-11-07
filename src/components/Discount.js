import React, { Component } from 'react';
// import './Discount.css';

class Discount extends Component {
  render() {
    return (
      <div className="Discount">
        <img src={this.props.imageUrlSmall} alt={this.props.name} className="DiscountImage"/>
        <div className="DiscountName">
          {this.props.name}
        </div>
        <div className="DiscountPrices">
          <div className="DiscountOldPrice">
            {this.props.oldPrice}
          </div>
          <div className="DiscountNewPrice">
            {this.props.newPrice}
          </div>
        </div>
      </div>
    );
  }
}

export default Discount;
