import React from 'react';
import './CartButton.scss';

const cartButton = ({ ...otherProps }) => (
  <button type="button" className="cart-button" {...otherProps} >Add to cart</button>
);

export default cartButton;
