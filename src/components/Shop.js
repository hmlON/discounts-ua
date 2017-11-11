import React, { Component } from 'react';
import DiscountTypeList from './DiscountTypeList';
import API from '../utils/api';

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

  render() {
    if (!this.state.discount_types) return <div className="Shop">"Loading..."</div>

    return (
      <div className="Shop">
        <DiscountTypeList discountTypes={this.state.discount_types} />
      </div>
    );
  }
}

export default Shop;
