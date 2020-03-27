import React from 'react';
import PropTypes from 'prop-types';
import classes from './CategoryFilter.module.css';

const categoryFilter = ({ category, categoryHandler }) => {
  const handleFilter = event => { categoryHandler(event.target.value); };
  return (
    <div className={classes.Filter}>
      <p>Select books by category</p>
      <select id="category" value="Learning" onChange={handleFilter}>
        {
          [...category, 'All'].map(option => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))
        }
      </select>
    </div>
  );
};
categoryFilter.propTypes = {
  category: PropTypes.instanceOf(Array).isRequired,
  categoryHandler: PropTypes.func.isRequired,
};

export default categoryFilter;
