import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Cart } from '../../../images/shopping-bag.svg';
import { toggleCartDropdown } from '../../../redux/actions/cart.actions';
import '../CartIcon.scss';

const cartIcon = ({ toggleCartDropdown, cartItems }) => (
  <div className="icon" role="presentation" onClick={toggleCartDropdown}>
    <Cart className="icon__item" />
    <span className="icon__itemcount">{cartItems.length}</span>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
