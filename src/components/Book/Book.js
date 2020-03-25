import React from 'react';
import PropTypes from 'prop-types';
import classes from './Book.module.css';

const book = ({ bookItem: { id, title, category } }) => (
  <tr className={classes.TableRow}>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);

book.propTypes = {
  bookItem: PropTypes.instanceOf(Object).isRequired,
};
export default book;
