import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    } else if (event.target.id === 'category') {
      this.setState({ category: event.target.value });
    }
  };

  handleSubmit = () => {
    const { addBook } = this.props;
    const book = { ...this.state, id: Math.random() };
    addBook(book);
    this.setState({ title: '', category: '' });
  };

  render() {
    const { title, category } = this.state;
    const { categories } = this.props;
    return (
      <div className={classes.Form}>
        <form>
          <h3 className={classes.Title}>Add new to Bookstore</h3>
          <input className={[classes.Input, classes.Text].join(' ')} id="title" placeholder="Enter Book Title" type="text" value={title} onChange={this.handleChange} required />
          <select className={[classes.Select, classes.Text].join(' ')} id="category" value={category} onChange={this.handleChange}>
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
          <button className={classes.Button} name="add" type="button" onClick={this.handleSubmit}>ADD</button>
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
};

export default connect(null, mapDispatchToProps)(BookForm);
