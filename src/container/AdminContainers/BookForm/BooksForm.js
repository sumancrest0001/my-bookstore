import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../../../actions/index';
import classes from './BooksForm.module.css';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        isbn: '',
        title: '',
        description: '',
        category: '',
        genre: '',
        author: '',
        publisher: '',
        price: '',
        image: '',
        status: '',
      },
    };
  }

  handleChange = event => {
    const { book } = this.state;
    const updatedBook = book;
    updatedBook[event.target.id] = event.target.value;
    this.setState({ book: updatedBook });
  };

  handleSubmit = () => {
    const { addBook } = this.props;
    const { book } = this.state;
    addBook(book);
    console.log(book);
  };

  render() {
    const { book } = this.state;
    const {
      isbn, title, description, category, genre, author, publisher, price, image, status,
    } = book;
    const { categories, bookCondition } = this.props;
    return (
      <div className={classes.Form}>
        <h3 className={classes.Title}>Add new to Bookstore</h3>
        <form>
          <input
            type="number"
            id="isbn"
            className={[classes.Input, classes.InputFields, classes.Text].join(' ')}
            placeholder="ISBN number"
            value={isbn}
            onChange={this.handleChange}
            required
          />
          <input
            className={[classes.Input, classes.InputFields, classes.Text].join(' ')}
            id="title"
            placeholder="Enter Book Title"
            type="text"
            value={title}
            onChange={this.handleChange}
            required
          />
          <input
            type="textarea"
            id="description"
            className={[classes.Input, classes.InputFields, classes.Text].join(' ')}
            placeholder="Add short description"
            value={description}
            onChange={this.handleChange}
            required
          />
          <select
            className={[classes.Select, classes.InputFields, classes.Text].join(' ')}
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
            id="genre"
            className={[classes.Input, classes.InputFields, classes.Text].join(' ')}
            placeholder="Add genre"
            value={genre}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            id="author"
            className={[classes.Input, classes.InputFields, classes.Text].join(' ')}
            placeholder="Author please"
            value={author}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            id="publisher"
            className={[classes.Input, classes.InputFields, classes.Text].join(' ')}
            placeholder="Publishername"
            value={publisher}
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            step="0.01"
            id="price"
            className={[classes.Input, classes.InputFields, classes.Text].join(' ')}
            placeholder="Enter price"
            value={price}
            onChange={this.handleChange}
            required
          />
          <select
            className={[classes.Select, classes.InputFields, classes.Text].join(' ')}
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
          <input
            type="file"
            id="image"
            value={image}
            onChange={this.handleChange}
            required
          />
          <button
            className={[classes.Button, classes.SaveBtn].join(' ')}
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
  addBook: data => { dispatch(createBook(data)); },
});

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
  bookCondition: PropTypes.instanceOf(Array).isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
