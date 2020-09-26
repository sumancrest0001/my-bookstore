import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleBook from '../SingleBook/SingleBook';
import { filterCategory } from '../../redux/actions/book.actions';
import './BookSection.scss';

const bookSection = ({ books, title, filteredCategory, filterBooks, showLink, history }) => {
  const handleLinks = () => {
    filterBooks(filteredCategory);
    history.push(`/shop/book/category/${filteredCategory}`);
  }
  return (
    <section className="section">
      <div className="section__header">
        <span className="section__title">{title}</span>
        {
          showLink ? <span className="section__link" onClick={handleLinks}>See all</span> : null
        }
      </div>
      <div className="section__books">
        {
          books.map(item => (<SingleBook key={item.id} book={item} />))
        }
      </div>
    </section>
  );
}

const mapDispatchToProps = dispatch => ({
  filterBooks: bookFilter => dispatch(filterCategory(bookFilter)),
});

export default connect(null, mapDispatchToProps)(withRouter(bookSection));
