import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './BookList.module.css';
import Book from '../components/Book/Book';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import { removeBook, filterBooks } from '../actions/index';

const bookList = ({
  books, deleteBook, categoryFilter, categories,
}) => {
  const handleRemoveBook = book => deleteBook(book);
  const handleFilterChange = event => categoryFilter(event.target.value);
  return (
    <div>
      <CategoryFilter
        categoryHandler={handleFilterChange}
        category={categories}
      />
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
    </div>
  );
};

bookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
  categoryFilter: PropTypes.func.isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: data => { dispatch(removeBook(data)); },
  categoryFilter: category => { dispatch(filterBooks(category)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(bookList);
