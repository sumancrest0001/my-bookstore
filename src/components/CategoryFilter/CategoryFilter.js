import React from 'react';
import PropTypes from 'prop-types';
import classes from './CategoryFilter.module.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const categoryFilter = ({ category, categoryHandler }) => {
  const handleFilter = event => { categoryHandler(event.target.value); };
  return (
    <div className={classes.Filter}>
      <div className={classes.BookstoreCMS}>Bookstore CMS</div>
      <div className={classes.Books}>BOOKS</div>
      <select id="category" className={classes.Category} value="Learning" onChange={handleFilter}>
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
      <div><i className={`fa fa-user-circle ${classes.ProfilePic}`} /></div>
    </div>
  );
};
categoryFilter.propTypes = {
  category: PropTypes.instanceOf(Array).isRequired,
  categoryHandler: PropTypes.func.isRequired,
};

export default categoryFilter;
