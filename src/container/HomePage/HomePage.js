import React from 'react';
import { connect } from 'react-redux';
import BookSection from '../../components/BookSection/BookSection';
import './HomePage.scss';

const homePage = ({ homepageBooks }) => {
  let render;
  if (homepageBooks) {
    const {
      newBooks, bestPicks, kidsBooks, usedBooks,
    } = homepageBooks;
    render = (
      <>
        <BookSection books={newBooks.slice(0, 6)} title="New Arrivals" />
        <BookSection books={bestPicks} title="Our Picks" />
        <BookSection books={kidsBooks.slice(0, 6)} title="Books for Kids" />
        <BookSection books={usedBooks.slice(0, 6)} title="Used Books" />
      </>
    );
  } else {
    render = <div>loading</div>;
  }
  return (
    <div className="homepage">
      {render}
    </div>

  );
};

const mapStateToProps = state => ({
  homepageBooks: state.book.homepageBooks,
});

export default connect(mapStateToProps)(homePage);
