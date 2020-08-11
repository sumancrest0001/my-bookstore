import React from 'react';
import PropTypes from 'prop-types';
import Book from '../../../components/AdminComponents/Book/Book';

const bookList = ({
  deleteBook, availableBooks,
}) => {
  let renderBooks = <p>Books of this category are not found</p>;
  if (availableBooks.length >= 0) {
    renderBooks = availableBooks.map(book => (
      <Book
        key={book.isbn}
        bookItem={book}
        clicked={deleteBook}
      />
    ));
  }

  return (
    <div>
      {renderBooks}
    </div>
  );
};

bookList.propTypes = {
  availableBooks: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default bookList;
