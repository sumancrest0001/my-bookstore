import React from 'react';
import classes from './BooksForm.module.css';

const bookForm = () => {
  const catagories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const renderOptions = catagories.map(option => (
    <option
      key={option}
      value={option}
    >
      {option}
    </option>
  ));

  return (
    <div className={classes.Form}>
      <form>
        <h3>Add new to Bookstore</h3>
        <input placeholder="Enter Book Title" type="text" required />
        <select>
          {renderOptions}
        </select>
        <button name="add" type="submit">ADD</button>
      </form>
    </div>
  );
};

export default bookForm;
