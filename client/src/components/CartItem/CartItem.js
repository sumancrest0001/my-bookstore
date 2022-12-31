import React from 'react';

import './CartItem.scss';

const cartItem = ({ item }) => (
  <div className="cart-item">
    <img src={item.url} className="cart-item__image" alt={item.tittle} />
    <div className="cart-item__details">
      <span className="cart-item__title">{item.title}</span>
      <span className="cart-item__price">
        $
        {item.quantity}
        X $
        {item.price}
      </span>
    </div>
  </div>
);

export default cartItem;
