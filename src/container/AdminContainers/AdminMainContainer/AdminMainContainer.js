import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BooksForm';
import CategoryFilter from '../../../components/CategoryFilter/CategoryFilter';
import { category, bookStatus } from '../../../utilities/utility';
import { removeBook, filterBooks } from '../../../actions/index';

class AdminMainContainer extends Component {
  filteredBooks = () => {
    const { filter, books } = this.props;
    let updatedBooks;
    if (filter === 'All') {
      updatedBooks = books;
    } else {
      updatedBooks = books.filter(book => book.category === filter);
    }
    return updatedBooks;
  };

  render() {
    const { books, deleteBook, categoryFilter } = this.props;
    return (
      <main>
        <CategoryFilter
          bookCategories={category}
          categoryHandler={filteredCategory => categoryFilter(filteredCategory)}
        />
        <BookList
          deleteBook={deleteBook}
          availableBooks={books}
        />
        <BookForm status={bookStatus} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: data => { dispatch(removeBook(data)); },
  categoryFilter: category => { dispatch(filterBooks(category)); },
});


AdminMainContainer.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
  categoryFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminMainContainer);
