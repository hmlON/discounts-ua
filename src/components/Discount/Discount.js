import React, { Component } from 'react';
import './Discount.css';

class Discount extends Component {
  formatPrice(price) {
    return price.toFixed(2)
  }

  render() {
    const oldPrice = this.formatPrice(this.props.oldPrice)
    const newPrice = this.formatPrice(this.props.newPrice)

    return (
      <article className="Discount">
        <img src={this.props.imageUrlSmall} alt={this.props.name} className="DiscountImage"/>
        <div className="DiscountName">
          {this.props.name}
        </div>
        <div className="DiscountPrices">
          <div className="DiscountOldPrice">{oldPrice}</div>
          <div className="DiscountNewPrice">{newPrice}</div>
        </div>
      </article>
    );
  }
}

export default Discount;
