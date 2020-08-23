import React from 'react';
import { ReactComponent as Favorite } from '../../../images/heart.svg';
import '../CartIcon.scss';

const favoriteIcon = () => (
  <div className="icon">
    <Favorite className="icon__item" />
    <span className="icon__itemcount">0</span>
  </div>
);

export default favoriteIcon;
