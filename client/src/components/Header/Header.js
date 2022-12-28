import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import UserIcon from '../Icons/UserIcon/UserIcon';
import FavoriteIcon from '../Icons/FavoriteIcon/FavoriteIcon';
import CartIcon from '../Icons/CartIcon/CartIcon';
import { ReactComponent as Logo } from '../../images/books.svg';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/reducers/cart.selector';

import './Header.scss';
import { selectCurrentUser } from '../../redux/reducers/user.selectors';

const header = ({ cartDropdownHidden, hideNewBook, loggedInUser }) => {
  console.log("🚀 ~ file: Header.js:16 ~ header ~ loggedInUser", loggedInUser)
  return (
    <nav className="navbar">
      <Logo className="navbar__logo" />
      <Link to="/" className="navbar__dashboard">
        <div className="navbar__site-name">BOOK MANDALA</div>
      </Link>
      {
        hideNewBook
          ? (
            <>
              <NavLink
                to="/auth"
                exact
                className="navlink"
              >
                <div className="new-book">Dashboard</div>
              </NavLink>
              <NavLink
                to="/auth/new-book"
                exact
                className="navlink"
              >
                <div className="new-book">Add book</div>
              </NavLink>
            </>
          )
          : null
      }
      <div className="navbar__icons">
        <UserIcon />
        {loggedInUser && (
          <>
            <FavoriteIcon />
            <CartIcon />
          </>
        )}
      </div>
      {
        cartDropdownHidden ? null : <CartDropdown />
      }
    </nav>
  );
}

const mapStateToProps = createStructuredSelector({
  cartDropdownHidden: selectCartHidden,
  loggedInUser: selectCurrentUser,
});

export default connect(mapStateToProps)(header);
