import React from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import SingleBook from '../../components/SingleBook/SingleBook';
import { connect } from 'react-redux';
import './FilteredBookList.scss';

const filteredBookList = ({ filteredBooks, filter }) => {
  return (
    <div className="filtered-books-list">
      <div className="filtered-books-list__header">
        <span className="filtered-books-list__title">{filter} books</span>
        < CategoryFilter className="filtered-books-list__filter" />
      </div>
      <div className="filtered-books-list__list">
        {filteredBooks.map(filteredBook => (<SingleBook key={filteredBook.id} book={filteredBook} />))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  filteredBooks: state.book.filteredBooks,
  filter: state.book.categoryFilter,
});

export default connect(mapStateToProps)(filteredBookList);