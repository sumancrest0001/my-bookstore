import React, { Component } from 'react';
import classes from './BooksForm.module.css';

class BookForm extends Component {
  constructor() {
    super();
    this.state = {
      book: {
        title: '',
        category: '',
      },
    };
  }


  render() {
    const catagories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <div className={classes.Form}>
        <form>
          <h3>Add new to Bookstore</h3>
          <input placeholder="Enter Book Title" type="text" required />
          <select>
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
          <button name="add" type="submit">ADD</button>
        </form>
      </div>
    );
  }
}

export default BookForm;
