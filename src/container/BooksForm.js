import React from 'react';
import classes from './BookForm.module.css';

const bookForm = () => {
  const catagories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div className={classes.Form}>
      <form>
        <h3>Add new to Bookstore</h3>
        <input placeholder="Enter Book Title" type="text" required />
        <select>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <button name="add" type="submit">ADD</button>
      </form>
    </div>
  );
};

export default bookForm;
