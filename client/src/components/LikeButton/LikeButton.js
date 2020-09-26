import React from 'react';
import loveImage from '../../images/heart.png';
import './LikeButton.scss';

const LikeButton = () => (
  <img src={loveImage} alt="favorite button" className="like-button" />
);

export default LikeButton;
