import React from 'react';
import { connect } from 'react-redux';
import BookSection from '../../components/BookSection/BookSection';
//import BookDetails from '../../components/BookDetails/BookDetails';
import './HomePage.scss';

const homePage = ({ homepageBooks }) => {
  let renderBooks;
  if (homepageBooks) {
    console.log(homepageBooks);
    const {
      newBooks, bestPicks, kidsBooks, usedBooks,
    } = homepageBooks;
    renderBooks = (
      <>
        <BookSection books={newBooks.slice(0, 6)} title="New Arrivals" />
        <BookSection books={bestPicks} title="Our Picks" />
        <BookSection books={kidsBooks.slice(0, 4)} title="Books for Kids" />
        <BookSection books={usedBooks.slice(0, 6)} title="Used Books" />
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