import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CrudButtons from '../CrudButtons/CrudButtons';
import './BookDetails.scss';
import { bookFilter } from '../../redux/actions/book.actions';
import { addBookItem } from '../../redux/actions/cart.actions';
class BookDetails extends Component {
  componentDidMount() {
    const { match, filterSelectedBook } = this.props;
    filterSelectedBook(match.params.id);
    /*     const collectionRef = firestore.collection("books").doc(match.params.id);
        collectionRef.get()
          .then(doc => console.log(doc.data()))
          .catch(error => console.log(error)); */
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (!this.props.selectedBook || (this.props.selectedBook.id !== this.props.match.params.id)) {
      return true;
    }
    else {
      return false;
    }
  }

  render() {
    const { selectedBook, admin, addBookItem } = this.props;

    const addCartDetails = (bookToDisplay) => {
      let cartDetails = null;
      if (!admin) {
        cartDetails = (<div className="book-details__cart">
          <h3 className="book-details__price-title">Book Price</h3>
          <p className="book-details__price">Rs {bookToDisplay.price}</p>
          <CustomButton onClick={() => addBookItem(bookToDisplay)}>Add to Cart</CustomButton>
          <CustomButton>Add to Favorite</CustomButton>
        </div>);
      }
      return cartDetails;
    };

    const updateDeleteLinks = (bookToDisplay) => {
      const { history } = this.props;
      let links = null;
      if (admin) {
        links = (
          <>
            <div>Price: {bookToDisplay.price}</div>
            <div>
              <CrudButtons selectedBook={bookToDisplay} history={history} />
            </div>
          </>
        );
      }
      return links;
    }

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
          {updateDeleteLinks(bookToDisplay)}
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
  filterSelectedBook: bookID => { dispatch(bookFilter(bookID)) },
  addBookItem: bookItem => dispatch(addBookItem(bookItem)),
});

const mapStateToProps = state => ({
  selectedBook: state.book.currentBook,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
