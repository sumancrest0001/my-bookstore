import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './BookList.module.css';
import Book from '../components/Book/Book';
import { removeBook } from '../actions/index';

const bookList = ({ books, deleteBook, categories }) => {
  const handleRemoveBook = book => deleteBook(book);

  return (
    <div className={classes.Filter}>
      <p>Select books by category</p>
      <select id="category" value="Learning" onChange={this.handleChange}>
        {
          categories.map(option => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))
        }
      </select>
    </div>
    <table className={classes.BookList}>
      <tbody>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
        {books.map(book => (
          <Book
            key={book.id}
            bookItem={book}
            clicked={() => handleRemoveBook(book)}
          />
        ))}
      </tbody>
    </table>
  );
};

bookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: data => { dispatch(removeBook(data)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(bookList);
