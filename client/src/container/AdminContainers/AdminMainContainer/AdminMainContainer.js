import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BooksForm';
import BookDetails from '../../../components/BookDetails/BookDetails';
import CategoryFilter from '../../../components/CategoryFilter/CategoryFilter';
import { category, bookStatus } from '../../../utilities/utility';
import { removeBook, filterCategory } from '../../../redux/actions/book.actions';

const adminMainContainer = props => {
  const {
    books, categoryFilter
  } = props;
  console.log(books);

  return (
    <main>
      <CategoryFilter
        bookCategories={category}
        categoryHandler={filteredCategory => categoryFilter(filteredCategory)}
      />
      <Switch>
        <Route path="/auth/edit/:id" component={BookForm} />
        <Route path="/auth/new-book" exact render={() => <BookForm bookCondition={bookStatus} categories={category} />} />
        <Route path="/auth" exact render={() => <BookList availableBooks={books} />} />
        <Route path="/auth/book/:id" render={props => <BookDetails admin {...props} />} />
      </Switch>
    </main>
  );
};


const mapStateToProps = state => ({
  books: state.book.filteredBooks,
  adminStatus: state.user.admin,
});

const mapDispatchToProps = dispatch => ({
  categoryFilter: category => { dispatch(filterCategory(category)); },
});


adminMainContainer.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  categoryFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(adminMainContainer);
