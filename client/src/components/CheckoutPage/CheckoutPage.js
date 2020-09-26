import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import { selectCartItems, selectCartTotal } from '../../redux/reducers/cart.selector';
import StripeCheckoutButton from '../StripeButton/StripeButton';
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
    <div className="total">
      <span>Total price:</span>
      {totalPrice}
    </div>
    <div className="credit-card-info">
      <span>*Please use the following credit card info to checkout*</span>
      <br />
      <span>Credit card no: 4242 4242 4242 4242</span>
      <span>Exp: 09/20</span>
      <span>CVC: 123</span>
    </div>
    <StripeCheckoutButton price={totalPrice} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(checkoutPage);
