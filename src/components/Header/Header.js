import React from 'react';
import { connect } from 'react-redux';
import UserIcon from '../Icons/UserIcon/UserIcon';
import FavoriteIcon from '../Icons/FavoriteIcon/FavoriteIcon';
import CartIcon from '../Icons/CartIcon/CartIcon';
import { ReactComponent as Logo } from '../../images/books.svg';
import CartDropdown from '../CartDropdown/CartDropdown';
import './Header.scss';

const header = ({ cartDropdownHidden }) => (
  <nav className="navbar">
    <Logo className="navbar__logo" />
    <div className="navbar__site-name">BOOK MANDALA</div>
    <div className="navbar__icons">
      <UserIcon />
      <FavoriteIcon />
      <CartIcon />
    </div>
    {
      cartDropdownHidden ? null : <CartDropdown />
    }
  </nav>
);

const mapStateToProps = state => ({
  cartDropdownHidden: state.cart.hidden,
});

export default connect(mapStateToProps)(header);
