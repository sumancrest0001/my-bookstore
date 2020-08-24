import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';

const cartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      list of cart-items
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

export default cartDropdown;
