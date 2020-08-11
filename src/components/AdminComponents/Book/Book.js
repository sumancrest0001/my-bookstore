import React from 'react';
import PropTypes from 'prop-types';
import book1 from '../../../images/book1.jpg';

import classes from './Book.module.css';

const book = ({ bookItem: { id, title, category }, clicked }) => (
  <div className={classes.Book}>
    <div className={classes.imageContainer}>
      <img src={book1} alt="book name" className={classes.bookImage} />
    </div>
    <div className={classes.LeftSection}>
      <div className={classes.Category}>{category}</div>
      <h3 className={classes.Title}>{title}</h3>
      <div className={classes.Writer}>Writer Name</div>
      <div className={classes.Btns}>
        <button type="button" id={id} onClick={clicked} className={[classes.btn, classes.delete].join(' ')}>Remove</button>
        <button type="button" className={[classes.btn, classes.show].join(' ')}>Show</button>
        <button type="button" className={[classes.btn, classes.edit].join(' ')}>Edit</button>
      </div>
    </div>
  </div>
);

book.propTypes = {
  bookItem: PropTypes.instanceOf(Object).isRequired,
  clicked: PropTypes.func.isRequired,
};
export default book;
