import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { storage, firestore } from '../../../firebase/index';
import { addBook } from '../../../redux/actions/book.actions';
import './BooksForm.scss';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      book: {
        isbn: '',
        title: '',
        description: '',
        category: '',
        author: '',
        publisher: '',
        price: '',
        status: '',
        url: '',
      },
      image: '',
      progress: 0,
    };
  }

  handleChange = event => {
    const { book } = this.state;
    const updatedBook = book;
    updatedBook[event.target.id] = event.target.value;
    this.setState({ book: updatedBook });
  };

  handleFileChange = event => {
    if (event.target.files[0]) {
      this.setState({ image: event.target.files[0] });
    }
  };

  handleSubmit = () => {
    const { image } = this.state;
    const uploadImage = storage.ref(`images/${image.name}`).put(image);
    uploadImage.on('state_changed',
      snapshot => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({ progress });
      },
      error => {
        alert(error);
      },
      () => {
        storage.ref('images').child(image.name).getDownloadURL().then(bookImageUrl => {
          const { book } = this.state;
          const updatedBook = {
            ...book,
            url: bookImageUrl,
            createdAt: new Date(),
          };
          this.setState({ book: updatedBook });
          const collectionRef = firestore.collection('books');
          collectionRef.add(updatedBook);
        });
      });
  };

  render() {
    const { book, progress } = this.state;
    const {
      isbn, title, description, category, author, publisher, price, status,
    } = book;
    const { categories, bookCondition } = this.props;
    return (
      <div className="Form">
        <h3 className="Title">Add new to Bookstore</h3>
        <form>
          <input
            type="number"
            id="isbn"
            className="Input InputFields"
            placeholder="ISBN number"
            value={isbn}
            onChange={this.handleChange}
            required
          />
          <input
            className="Input InputFields Text"
            id="title"
            placeholder="Enter Book Title"
            type="text"
            value={title}
            onChange={this.handleChange}
            required
          />
          <textarea
            id="description"
            rows={5}
            cols={60}
            className="Input Text"
            placeholder="Add short description"
            value={description}
            onChange={this.handleChange}
            required
          />
          <select
            className="Select InputFields Text"
            id="category"
            value={category}
            onChange={this.handleChange}
          >
            {
              categories.map(option => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))
            }
          </select>
          <input
            type="text"
            id="author"
            className="Input InputFields Text"
            placeholder="Author please"
            value={author}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            id="publisher"
            className="Input InputFields Text"
            placeholder="Publisher name"
            value={publisher}
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            step="0.01"
            id="price"
            className="Input InputFields Text"
            placeholder="Enter price"
            value={price}
            onChange={this.handleChange}
            required
          />
          <select
            className="Select InputFields Text"
            id="status"
            value={status}
            onChange={this.handleChange}
          >
            {
              bookCondition.map(option => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))
            }
          </select>
          <progress value={progress} max="100" />
          <input
            type="file"
            onChange={this.handleFileChange}
            required
          />
          <button
            className="Button SaveBtn"
            type="button"
            onClick={this.handleSubmit}
          >
            SAVE BOOK
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: data => { dispatch(addBook(data)); },
});

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
  bookCondition: PropTypes.instanceOf(Array).isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
