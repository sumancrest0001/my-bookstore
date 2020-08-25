import React from 'react';
import PropTypes from 'prop-types';
import book1 from '../../../images/book1.jpg';

import './Book.scss';

const book = ({ bookItem, clicked }) => (
  <div className="Book">
    <div className="imageContainer">
      <img src="book1" alt="book name" className="bookImage" />
    </div>
    <div className="LeftSection">
      <div className="Category">{bookItem.category}</div>
      <h3 className="Title">{bookItem.title}</h3>
      <div className="Writer">{bookItem.author}</div>
      <div className="Btns">
        <button type="button" id={bookItem.id} onClick={bookItem => clicked(bookItem)} className="btn delete">Remove</button>
        <button type="button" className="btn show">Show</button>
        <button type="button" className="btn edit">Edit</button>
      </div>
    </div>
  </div>
);

book.propTypes = {
  bookItem: PropTypes.instanceOf(Object).isRequired,
  clicked: PropTypes.func.isRequired,
};
export default book;
