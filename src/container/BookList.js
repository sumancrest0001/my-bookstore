import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './BookList.module.css';
import Book from '../components/Book/Book';

const bookList = ({ books }) => {
  const renderBooks = books.map(book => <Book key={book.id} bookItem={book} />);
  return (
    <table className={classes.BookList}>
      <tbody>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {renderBooks}
      </tbody>
    </table>
  );
};

bookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(bookList);
