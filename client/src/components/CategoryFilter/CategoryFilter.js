import React from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.scss';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const categoryFilter = ({ bookCategories, categoryHandler }) => {
  const handleFilter = event => { categoryHandler(event.target.value); };
  return (
    <div className="Filter">
      <select
        id="category"
        className="Category"
        onChange={handleFilter}
      >
        {
          [...bookCategories, 'All'].map(option => (
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
  bookCategories: PropTypes.instanceOf(Array).isRequired,
  categoryHandler: PropTypes.func.isRequired,
};

export default categoryFilter;
