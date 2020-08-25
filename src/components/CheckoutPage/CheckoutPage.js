import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import { selectCartItems, selectCartTotal } from '../../redux/reducers/cart.selector';

import './CheckoutPage.scss';

const checkoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Book</span>
      </div>
      <div className="header-block">
        <span>Title</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => (<CheckoutItem key={cartItem.title} bookItem={cartItem} />))
    }
    <div>{totalPrice}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(checkoutPage);
