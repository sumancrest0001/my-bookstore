import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book/Book';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import { removeBook, filterBooks } from '../actions/index';

const bookList = ({
  books, deleteBook, categoryFilter, categories, filter,
}) => {
  const handleRemoveBook = book => deleteBook(book);
  const handleFilterChange = filteredCategory => categoryFilter(filteredCategory);
  const filteredBooks = () => {
    let updatedBooks;
    if (filter === 'All') {
      updatedBooks = books;
    } else {
      updatedBooks = books.filter(book => book.category === filter);
    }
    return updatedBooks;
  };

  const booksFiltered = filteredBooks();
  let renderBooks = <p>Books of this category are not found</p>;
  if (booksFiltered.length >= 0) {
    renderBooks = booksFiltered.map(book => (
      <Book
        key={book.id}
        bookItem={book}
        clicked={() => handleRemoveBook(book)}
      />
    ));
  }

  return (
    <div>
      <CategoryFilter
        categoryHandler={handleFilterChange}
        category={categories}
      />
      {renderBooks}
    </div>
  );
};

bookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
  categoryFilter: PropTypes.func.isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
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
