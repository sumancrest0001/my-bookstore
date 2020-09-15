import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Book.scss';

const book = ({ bookItem, clicked, history }) => {

  const selectedBookHandler = id => {
    history.push(`/auth/books/${id}`);
  }
  return (
    <div className="Book">
      <div className="imageContainer">
        <img src={bookItem.url} alt="book name" className="bookImage" />
      </div>
      <div className="LeftSection">
        <div className="Category">{bookItem.category}</div>
        <h3 className="Title" onClick={() => selectedBookHandler(bookItem.id)}>{bookItem.title}</h3>
        <div className="Writer">{bookItem.author}</div>
        <div className="Btns">
          <button type="button" id={bookItem.id} onClick={bookItem => clicked(bookItem)} className="btn delete">Remove</button>
          <button type="button" className="btn show">Show</button>
          <button type="button" className="btn edit">Edit</button>
        </div>
      </div>
    </div>);
};

book.propTypes = {
  bookItem: PropTypes.instanceOf(Object).isRequired,
  clicked: PropTypes.func.isRequired,
};
export default withRouter(book);
