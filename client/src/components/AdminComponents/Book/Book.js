import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CrudButtons from '../../CrudButtons/CrudButtons';
import { bookFilter } from '../../../redux/actions/book.actions';
import './Book.scss';


const book = ({ bookItem, history, addCurrentBook }) => {

  const selectedBookHandler = id => {
    addCurrentBook(id);
    history.push(`/auth/book/${id}`);
  }

  return (
    <div className="Book">
      <div className="imageContainer">
        <img src={bookItem.url} alt="book name" className="bookImage" />
      </div>
      <div className="LeftSection">
        <div className="Category">{bookItem.category}</div>
        <h3 className="Title" role="presentation" onClick={() => selectedBookHandler(bookItem.id)}>{bookItem.title}</h3>
        <div className="Writer">{bookItem.author}</div>
        <CrudButtons selectedBook={bookItem} history={history} />
      </div>
    </div>);
};

const mapDispatchToProps = dispatch => ({
  addCurrentBook: bookID => { dispatch(bookFilter(bookID)) },
})

book.propTypes = {
  bookItem: PropTypes.instanceOf(Object).isRequired,
};

const withRouterBook = withRouter(book);
export default connect(null, mapDispatchToProps)(withRouterBook);