import React, { Component } from 'react';
import Discount from './Discount';
// import './DiscountList.css';

class DiscountList extends Component {
  render() {
    var discounts = this.props.discounts.map((discount) =>
      <Discount name={discount.name}
                oldPrice={discount.price_old}
                newPrice={discount.price_new}
                imageUrl={discount.img_url}
                imageUrlSmall={discount.small_img_url} />
    )

    return (
      <div className="DiscountList">
        {discounts}
      </div>
    );
  }
}

export default DiscountList;
