import React from 'react';
import CartButton from '../CartButton/CartButton';
import LikeButton from '../LikeButton/LikeButton';

import './SingleBook.scss';

const SingleBook = ({ book }) => {

  const selectedBookHandler = id => {
    addCurrentBook(id);
    history.push(`/auth/book/${id}`);
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
          <CartButton item={book} />
          <LikeButton />
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
