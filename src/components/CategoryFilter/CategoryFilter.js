import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './CategoryFilter.module.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const categoryFilter = ({ bookCategories, categoryHandler }) => {
  const handleFilter = event => { categoryHandler(event.target.value); };
  return (
    <div className={classes.Filter}>
      <NavLink
        to="/auth"
        exact
        className={classes.Navlink}
        activeClassName={classes.active}
      >
        <div className={classes.BookstoreCMS}>Bookstore CMS</div>
      </NavLink>
      <NavLink
        to="/auth/new-book"
        exact
        className={classes.Navlink}
        activeClassName={classes.active}
      >
        <div className={classes.Books}>Add book</div>
      </NavLink>

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
      <NavLink
        to="/logout"
        className={classes.Navlink}
        activeClassName={classes.active}
      >
        Logout
      </NavLink>
    </div>
  );
};
categoryFilter.propTypes = {
  bookCategories: PropTypes.instanceOf(Array).isRequired,
  categoryHandler: PropTypes.func.isRequired,
};

export default categoryFilter;
