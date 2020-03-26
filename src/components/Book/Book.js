import React from 'react';
import PropTypes from 'prop-types';
import classes from './Book.module.css';

const book = ({ bookItem: { id, title, category }, clicked }) => (
  <tr className={classes.TableRow}>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button id={id} type="submit" onClick={clicked}>Remove Book</button></td>
  </tr>
);

book.propTypes = {
  bookItem: PropTypes.instanceOf(Object).isRequired,
  clicked: PropTypes.func.isRequired,
};
export default book;
