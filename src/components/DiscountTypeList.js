import React, { Component } from 'react';
import DiscountType from './DiscountType';
// import './DiscountTypeList.css';

class DiscountTypeList extends Component {
  render() {
    var discountTypes = this.props.discountTypes.map((discountType) =>
      <DiscountType name={discountType.name}
                    startDate={discountType.active_period.start_date}
                    endDate={discountType.active_period.end_date}
                    discounts={discountType.active_period.discounts} />
    )

    return (
      <div className="DiscountTypeList">
        {discountTypes}
      </div>
    );
  }
}

export default DiscountTypeList;
