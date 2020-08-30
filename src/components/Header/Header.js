import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import UserIcon from '../Icons/UserIcon/UserIcon';
import FavoriteIcon from '../Icons/FavoriteIcon/FavoriteIcon';
import CartIcon from '../Icons/CartIcon/CartIcon';
import { ReactComponent as Logo } from '../../images/books.svg';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/reducers/cart.selector';

import './Header.scss';

const header = ({ cartDropdownHidden, hideNewBook }) => {
  return (
    <nav className="navbar">
      <Logo className="navbar__logo" />
      <div className="navbar__site-name">BOOK MANDALA</div>
      {
        hideNewBook
          ? (
            <NavLink
              to="/new-book"
              exact
              className="navlink"
            >
              <div className="new-book">Add book</div>
            </NavLink>
          )
          : null
      }
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
}

const mapStateToProps = createStructuredSelector({
  cartDropdownHidden: selectCartHidden,
});

export default connect(mapStateToProps)(header);
