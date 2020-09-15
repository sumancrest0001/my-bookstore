import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import './BookDetails.scss';
import book1 from '../../images/book1.jpg';
import { bookFilter } from '../../redux/actions/book.actions';

class BookDetails extends Component {
  componentDidMount() {
    const { match, filterSelectedBook, selectedBook } = this.props;
    filterSelectedBook(match.params.id);
    console.log(selectedBook);
    /*     const collectionRef = firestore.collection("books").doc(match.params.id);
        collectionRef.get()
          .then(doc => console.log(doc.data()))
          .catch(error => console.log(error)); */
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (!this.props.selectedBook || (this.props.selectedBook.id !== this.props.match.params.id)) {
      console.log('not rerendered');
      return true;
    }
    else {
      return false;
    }
  }

  render() {
    const { selectedBook, admin } = this.props;

    const addCartDetails = (bookToDisplay) => {
      let cartDetails = null;
      if (!admin) {
        cartDetails = (<div className="book-details__cart">
          <h3 className="book-details__price-title">Book Price</h3>
          <p className="book-details__price">Rs {bookToDisplay.price}</p>
          <CustomButton>Add to Cart</CustomButton>
          <CustomButton>Add to Favorite</CustomButton>
        </div>);
      }
      return cartDetails;
    };

    let elementsToRender = <div>Loading ...</div>;
    if (selectedBook.length > 0) {
      const bookToDisplay = selectedBook[0];
      elementsToRender = (<div className="book-details">
        <img src={bookToDisplay.url} className="book-details__image" alt="book cover" />
        <div className="book-details__head head">
          <h3 className="head__title">{bookToDisplay.title}</h3>
          <p className="head__author">By {bookToDisplay.author}</p>
          <p className="head__publication">Published by: {bookToDisplay.publication}</p>
          <p className="head__status">Book status: {bookToDisplay.status}</p>
        </div>
        {addCartDetails(bookToDisplay)}
        <p className="book-details__description">{bookToDisplay.description}</p>
      </div>);
    }

    return (
      <>
        {elementsToRender}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  filterSelectedBook: bookID => { dispatch(bookFilter(bookID)); },
});

const mapStateToProps = state => ({
  selectedBook: state.book.currentBook,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
