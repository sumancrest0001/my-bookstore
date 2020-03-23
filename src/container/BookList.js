import React from 'react';
import classes from './BookList.module.css';


const bookList = (props) => {
  return (
    <table className={classes.BookList}>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Catagory</th>
      </tr>
      <Book />
    </table>
  );
};

export default bookList;

