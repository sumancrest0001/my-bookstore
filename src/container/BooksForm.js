import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import classes from './BooksForm.module.css';

class BookForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: '',
    };
  }

  handleChange = event => {
    if (event.target.id === 'title') {
      this.setState({ title: event.target.value });
    }
    else if (event.target.id === 'category') {
      this.setState({ category: event.target.value });
    }
  };

  handleSubmit = () => {
    const book = { ...this.state, id: Math.random() };
    this.props.addBook(book);
    this.setState({ title: '', category: '' });
  };

  render() {
    const catagories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <div className={classes.Form}>
        <form>
          <h3>Add new to Bookstore</h3>
          <input id="title" placeholder="Enter Book Title" type="text" value={this.state.title} onChange={this.handleChange} required />
          <select id="category" value={this.state.category} onChange={this.handleChange}>
            {
              catagories.map(option => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))
            }
          </select>
          <button name="add" onClick={this.handleSubmit}>ADD</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: (data) => { dispatch(createBook(data)); }
  };
};

export default connect(null, mapDispatchToProps)(BookForm);
