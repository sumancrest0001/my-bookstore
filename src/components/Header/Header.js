import React from 'react';
import UserIcon from '../Icons/UserIcon/UserIcon';
import FavoriteIcon from '../Icons/FavoriteIcon/FavoriteIcon';
import CartIcon from '../Icons/CartIcon/CartIcon';
import { ReactComponent as Logo } from '../../images/books.svg';
import './Header.scss';

const header = () => (
  <nav className="navbar">
    <Logo className="navbar__logo" />
    <div className="navbar__site-name">BOOK MANDALA</div>
    <div className="navbar__icons">
      <UserIcon />
      <FavoriteIcon />
      <CartIcon />
    </div>
  </nav>
);

export default header;
