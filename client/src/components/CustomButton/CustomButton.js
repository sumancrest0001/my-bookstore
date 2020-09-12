import React from 'react';
import classes from './CustomButton.module.scss';


const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button type="button" className={[classes.CustomButton, isGoogleSignIn ? classes.GoogleSignIn : ''].join(' ')} {...otherProps} >
      {children}
    </button>
  );
};

export default CustomButton;
