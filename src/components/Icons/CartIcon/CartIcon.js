import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Cart } from '../../../images/shopping-bag.svg';
import { toggleCartDropdown } from '../../../redux/actions/cart.actions';
import { selectCartItemsCount } from '../../../redux/reducers/cart.selector';
import '../CartIcon.scss';

const cartIcon = ({ toggleCartDropdown, cartItemCount }) => (
  <div className="icon" role="presentation" onClick={toggleCartDropdown}>
    <Cart className="icon__item" />
    <span className="icon__itemcount">{cartItemCount}</span>
  </div>
);

const mapStateToProps = state => ({
  cartItemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
