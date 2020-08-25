import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/reducers/cart.selector';
import './CartDropdown.scss';

const cartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length
          ? (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)))
          : (<span className="cart-message">You have empty cart</span>)
      }

    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(cartDropdown);
