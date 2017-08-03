import React, { Component } from 'react';
// import './Discount.css';

class Discount extends Component {
  render() {
    return (
      <div className="Discount">
        <div className="DiscountInfo">
          <img src={this.props.imageUrlSmall} alt={this.props.name} />
          {this.props.name} ({this.props.oldPrice} -> {this.props.newPrice})
        </div>
      </div>
    );
  }
}

export default Discount;
