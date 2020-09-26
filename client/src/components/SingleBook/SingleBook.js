import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CartButton from '../CartButton/CartButton';
import LikeButton from '../LikeButton/LikeButton';
import { addBookItem } from '../../redux/actions/cart.actions';
import { bookFilter } from '../../redux/actions/book.actions';
import './SingleBook.scss';

const SingleBook = ({ book, addCurrentBook, addBookItem, history }) => {

  const selectedBookHandler = id => {
    addCurrentBook(id);
    history.push(`/shop/book/${id}`);
  };

  return (
    <div className="section__singleBook singleBook">
      <img src={book.url} alt="the book" className="singleBook__image" />
      <div className="singleBook__body">
        <h3 className="singleBook__title" role="presentation" onClick={() => selectedBookHandler(book.id)}>{book.title}</h3>
        <small className="singleBook__author">{book.author}</small>
        <p className="singleBook__price">
          Rs
        {book.price}
        </p>
        <div className="singleBook__buttons">
          <CartButton onClick={() => addBookItem(book)} />
          <LikeButton />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addCurrentBook: bookID => { dispatch(bookFilter(bookID)) },
  addBookItem: bookItem => dispatch(addBookItem(bookItem)),
});

const withRouterSingleBook = withRouter(SingleBook);
export default connect(null, mapDispatchToProps)(withRouterSingleBook);

