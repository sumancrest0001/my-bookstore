import React from 'react';
import classes from './Book.module.css';

const book = props => (
  <tr className={classes.TableRow}>
    <td>1</td>
    <td>The Help</td>
    <td>History</td>
  </tr>
);

export default book;
