import React from 'react';
import { connect } from 'react-redux';
import image from '../../images/book1.jpg';
import { removeBookItem, addBookItem, decreaseCartItemQuantity } from '../../redux/actions/cart.actions';
import './CheckoutItem.scss';

const checkoutItem = ({
  bookItem, removeBookFromCart, increaseQuantity, decreaseQuantity,
}) => (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt="item" />
      </div>
      <span className="title">{bookItem.title}</span>
      <span className="quantity">
        <div className="arrow" role="presentation" onClick={() => decreaseQuantity(bookItem)}>&#10094;</div>
        <span className="value">{bookItem.quantity}</span>
        <div className="arrow" role="presentation" onClick={() => increaseQuantity(bookItem)}>&#10095;</div>
      </span>
      <span className="price">{bookItem.price}</span>
      <div className="remove-button" role="presentation" onClick={() => removeBookFromCart(bookItem)}>&#10005;</div>
    </div>
  );


const mapDispatchToProps = dispatch => ({
  removeBookFromCart: item => dispatch(removeBookItem(item)),
  increaseQuantity: item => dispatch(addBookItem(item)),
  decreaseQuantity: item => dispatch(decreaseCartItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(checkoutItem);
