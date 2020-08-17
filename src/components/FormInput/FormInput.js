import React from 'react';

import classes from './FormInput.module.scss';

const formInput = ({ handleChange, label, ...otherProps }) => (
  <div className={classes.Group}>
    <input className={classes.FormInput} onChange={handleChange} {...otherProps} />
    {
      label
        ? (<label className={[classes.FormInputLabel, otherProps.value.length ? classes.Shrink : ''].join(' ')} >{label}</label>)
        : null
    }
  </div>
);

export default formInput;
