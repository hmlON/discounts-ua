import React, { Component } from 'react';
import './Discount.css';

class Discount extends Component {
  formatPrice(price) {
    return price && price.toFixed(2)
  }

  render() {
    const oldPrice = this.formatPrice(this.props.oldPrice)
    const newPrice = this.formatPrice(this.props.newPrice)
    const shownOnMobileLine = 1 / this.props.width

    return (
      <article className={`Discount Discount--shownOnMobileLine-${shownOnMobileLine}`}>
        <img src={this.props.imageUrl} alt={this.props.name} className="DiscountImage"/>
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
