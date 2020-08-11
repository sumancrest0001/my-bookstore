import React from 'react';
import PropTypes from 'prop-types';
import book1 from '../../../images/book1.jpg';

import classes from './Book.module.css';

const book = ({ bookItem, clicked }) => (
  <div className={classes.Book}>
    <div className={classes.imageContainer}>
      <img src={book1} alt="book name" className={classes.bookImage} />
    </div>
    <div className={classes.LeftSection}>
      <div className={classes.Category}>{bookItem.category}</div>
      <h3 className={classes.Title}>{bookItem.title}</h3>
      <div className={classes.Writer}>{bookItem.author}</div>
      <div className={classes.Btns}>
        <button type="button" id={bookItem.id} onClick={bookItem => clicked(bookItem)} className={[classes.btn, classes.delete].join(' ')}>Remove</button>
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
