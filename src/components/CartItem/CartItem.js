import React from 'react';
import image from '../../images/book2.jpg';
import './CartItem.scss';

const cartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={image} className='cart-item__image' alt={item.ittle} />
      <div className="cart-item__details">
        <span className="cart-item__title">{item.title}</span>
        <span className="cart-item__price">${item.quantity} X ${item.price}</span>
      </div>
    </div>
  );
};

export default cartItem;
