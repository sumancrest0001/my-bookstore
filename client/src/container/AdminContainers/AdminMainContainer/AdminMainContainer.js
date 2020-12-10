import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BooksForm';
import BookDetails from '../../../components/BookDetails/BookDetails';
import { bookStatus, category } from '../../../utilities/utility';

const adminMainContainer = props => {
  const {
    books
  } = props;

  return (
    <main>
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
});

adminMainContainer.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(adminMainContainer);
