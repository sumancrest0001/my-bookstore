import React from 'react';
import image from '../../images/book1.jpg';
import './CheckoutItem.scss';

const checkoutItem = ({ bookItem }) => {
  console.log(bookItem);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt="item" />
      </div>
      <span className="title">{bookItem.title}</span>
      <span className="quantity">{bookItem.quantity}</span>
      <span className="price">{bookItem.price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default checkoutItem;
