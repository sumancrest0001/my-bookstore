import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CategoryFilter.scss';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const categoryFilter = ({ bookCategories, categoryHandler }) => {
  const handleFilter = event => { categoryHandler(event.target.value); };
  return (
    <div className="Filter">
      <NavLink
        to="/auth"
        exact
        className="Navlink"
        activeClassName="active"
      >
        <div className="BookstoreCMS">Bookstore CMS</div>
      </NavLink>
      <NavLink
        to="/auth/new-book"
        exact
        className="Navlink"
        activeClassName="active"
      >
        <div className="Books">Add book</div>
      </NavLink>

      <select
        id="category"
        className="Category"
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
      <div><i className="fa fa-user-circle ProfilePic" /></div>
      <NavLink
        to="/logout"
        className="Navlink"
        activeClassName="active"
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
