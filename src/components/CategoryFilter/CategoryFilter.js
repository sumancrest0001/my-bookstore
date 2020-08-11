import React from 'react';
import PropTypes from 'prop-types';
import classes from './CategoryFilter.module.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const categoryFilter = ({ bookCategories, categoryHandler }) => {
  const handleFilter = event => { categoryHandler(event.target.value); };
  return (
    <div className={classes.Filter}>
      <div className={classes.BookstoreCMS}>Bookstore CMS</div>
      <div className={classes.Books}>Add book</div>
      <select
        id="category"
        className={classes.Category}
        value="Learning"
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
      <div><i className={`fa fa-user-circle ${classes.ProfilePic}`} /></div>
    </div>
  );
};
categoryFilter.propTypes = {
  bookCategories: PropTypes.instanceOf(Array).isRequired,
  categoryHandler: PropTypes.func.isRequired,
};

export default categoryFilter;
