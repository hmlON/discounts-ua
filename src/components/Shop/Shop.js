import React, { Component } from 'react';
import DiscountType from '../DiscountType/DiscountType';
import API from '../../utils/api';
import './Shop.css';

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const path = this.props.match.params.shop
    API.shop(path).then(shop => this.setState({...shop}))
  }

  componentDidUpdate(prevProps) {
    const prevPath = prevProps.match.params.shop
    const newPath = this.props.match.params.shop

    if (prevPath !== newPath) {
      API.shop(newPath).then(shop => this.setState({...shop}))
    }
  }

  renderDiscountType(discountType) {
    return (
      <DiscountType name={discountType.name}
                    startDate={discountType.active_period.start_date}
                    endDate={discountType.active_period.end_date}
                    discounts={discountType.active_period.discounts} />
    )
  }

  render() {
    if (!this.state.discount_types) return <div className="Shop">"Loading..."</div>

    return (
      <div className="Shop">
        {this.state.discount_types.map(this.renderDiscountType)}
      </div>
    );
  }
}

export default Shop;
