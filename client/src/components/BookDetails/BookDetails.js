import React, { Component } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './BookDetails.scss';
import book1 from '../../images/book1.jpg';
import firestore from '../../firebase/index';

class BookDetails extends Component {
  componentDidMount() {
    const { match } = this.props;
    const collectionRef = firestore.collection("books").doc(match.params.id);
    collectionRef.get()
      .then(doc => console.log(doc.data()))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="book-details">
        <img src={book1} className="book-details__image" alt="book cover" />
        <div className="book-details__head head">
          <h3 className="head__title"> This is title of the book</h3>
          <p className="head__author">By suman shrestha</p>
          <p className="head__publication">Janta Publication</p>
          <p className="head__status">Used</p>
        </div>
        <div className="book-details__cart">
          <h3 className="book-details__price-title">Book Price</h3>
          <p className="book-details__price">Rs 3000</p>
          <CustomButton>Add to Cart</CustomButton>
          <CustomButton>Add to Favorite</CustomButton>
        </div>
        <p className="book-details__description"> This is description for the project.</p>
      </div>
    );
  }
}
export default BookDetails;
