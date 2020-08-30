import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from '../../../components/AdminComponents/Book/Book';

class BookList extends Component {
  booksToBeRendered = () => {
    const {
      deleteBook, availableBooks,
    } = this.props;

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
    return renderBooks;
  }

  render() {
    return (
      <div>
        {this.booksToBeRendered()}
      </div>
    );
  }
}

BookList.propTypes = {
  availableBooks: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookList;
