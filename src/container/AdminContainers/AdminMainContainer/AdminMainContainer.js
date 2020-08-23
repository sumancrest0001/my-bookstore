import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BooksForm';
import CategoryFilter from '../../../components/CategoryFilter/CategoryFilter';
import { category, bookStatus } from '../../../utilities/utility';
import { removeBook, filterBooks } from '../../../redux/actions/index';

const adminMainContainer = props => {
  const {
    books, deleteBook, filter, categoryFilter, adminStatus,
  } = props;

  const filteredBooks = () => {
    let updatedBooks;
    if (filter === 'All') {
      updatedBooks = books;
    } else {
      updatedBooks = books.filter(book => book.category === filter);
    }
    return updatedBooks;
  };

  const renderComponent = adminStatus ? '' : <Redirect to="/" />;
  console.log(adminStatus);
  return (
    <main>
      {renderComponent}
      <CategoryFilter
        bookCategories={category}
        categoryHandler={filteredCategory => categoryFilter(filteredCategory)}
      />
      <Switch>
        <Route path="/auth/new-book" exact render={() => <BookForm bookCondition={bookStatus} categories={category} />} />
        <Route path="/auth" exact render={() => <BookList deleteBook={deleteBook} availableBooks={books} />} />
      </Switch>
    </main>
  );
};


const mapStateToProps = state => ({
  books: state.books,
  adminStatus: state.user.admin,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: data => { dispatch(removeBook(data)); },
  categoryFilter: category => { dispatch(filterBooks(category)); },
});


adminMainContainer.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
  categoryFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(adminMainContainer);
