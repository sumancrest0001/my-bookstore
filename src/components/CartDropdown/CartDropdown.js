import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

const cartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))}
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(cartDropdown);
