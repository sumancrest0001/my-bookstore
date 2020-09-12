import React from 'react';
import { connect } from 'react-redux';
import { addBookItem } from '../../redux/actions/cart.actions';
import './CartButton.scss';

const cartButton = ({ item, addBookItem }) => (
  <button type="button" className="cart-button" onClick={() => addBookItem(item)}>Add to cart</button>
);

const mapDispatchToProps = dispatch => ({
  addBookItem: bookItem => dispatch(addBookItem(bookItem)),
});

export default connect(null, mapDispatchToProps)(cartButton);
