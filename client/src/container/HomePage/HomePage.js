import React from 'react';
import { connect } from 'react-redux';
import BookSection from '../../components/BookSection/BookSection';
import './HomePage.scss';

const homePage = ({ homepageBooks }) => {
  let renderBooks;
  if (homepageBooks) {
    const {
      newBooks, bestPicks, kidsBooks, usedBooks,
    } = homepageBooks;
    renderBooks = (
      <>
        <BookSection books={newBooks.slice(0, 6)} showLink title="New Arrivals" filteredCategory="brand new" />
        <BookSection books={bestPicks} title="Our Picks" />
        <BookSection books={kidsBooks.slice(0, 4)} showLink title="Books for Kids" filteredCategory="Kids" />
        <BookSection books={usedBooks.slice(0, 6)} showLink title="Used Books" filteredCategory="used" />
      </>
    );
  } else {
    renderBooks = <div>loading</div>;
  }
  return (
    <div className="homepage">
      {renderBooks}
    </div>

  );
};

const mapStateToProps = state => ({
  homepageBooks: state.book.homepageBooks,
});

export default connect(mapStateToProps)(homePage);
