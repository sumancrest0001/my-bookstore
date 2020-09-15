import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/reducers/cart.selector';
import { toggleCartDropdown } from '../../redux/actions/cart.actions';

import './CartDropdown.scss';

const cartDropdown = ({ cartItems, history, dispatch }) => {
  const onClickHandler = () => {
    history.push('/checkout');
    dispatch(toggleCartDropdown());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length
            ? (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)))
            : (<span className="cart-message">You have empty cart</span>)
        }

      </div>
      <CustomButton onClick={onClickHandler}>Checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(cartDropdown));
