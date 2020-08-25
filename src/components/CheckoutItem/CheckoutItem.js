import React from 'react';
import { connect } from 'react-redux';
import image from '../../images/book1.jpg';
import { removeBookItem } from '../../redux/actions/cart.actions';
import './CheckoutItem.scss';

const checkoutItem = ({ bookItem, removeBookFromCart }) => {
  console.log(bookItem);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt="item" />
      </div>
      <span className="title">{bookItem.title}</span>
      <span className="quantity">{bookItem.quantity}</span>
      <span className="price">{bookItem.price}</span>
      <div className="remove-button" role="presentation" onClick={() => removeBookFromCart(bookItem)}>&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeBookFromCart: item => dispatch(removeBookItem(item)),
});

export default connect(null, mapDispatchToProps)(checkoutItem);
