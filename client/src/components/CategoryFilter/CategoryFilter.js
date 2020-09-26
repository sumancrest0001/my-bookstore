import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { category } from '../../utilities/utility';
import { filterCategory } from '../../redux/actions/book.actions';
import './CategoryFilter.scss';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const categoryFilter = ({ categoryFilter }) => {
  const handleFilter = event => {
    categoryFilter(event.target.value);

  };

  return (
    <div className="Filter">
      <select
        id="category"
        className="Category"
        onChange={handleFilter}
      >
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

const mapDispatchToProps = dispatch => ({
  categoryFilter: filteredCategory => { dispatch(filterCategory(filteredCategory)) },
});

categoryFilter.propTypes = {
  bookCategories: PropTypes.instanceOf(Array).isRequired,
  categoryHandler: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(categoryFilter);
