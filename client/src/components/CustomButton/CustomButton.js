import React from 'react';
import './CustomButton.scss';


const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button type="button" className={`CustomButton ${isGoogleSignIn ? "GoogleSignIn" : ''}`} {...otherProps} >
      {children}
    </button >
  );
};

export default CustomButton;
