import React from 'react';
import { ReactComponent as Cart } from '../../../images/shopping-bag.svg';
import '../CartIcon.scss';

const cartIcon = () => (
  <div className="icon">
    <Cart className="icon__item" />
    <span className="icon__itemcount">0</span>
  </div>
);

export default cartIcon;
