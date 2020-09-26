import React from 'react';
import { createStructuredSelector } from 'reselect';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as User } from '../../../images/stick-man.svg';
import { selectCurrentUser } from '../../../redux/reducers/user.selectors';
import '../CartIcon.scss';

const userIcon = ({ currentUser }) => {
  const componentToRender = currentUser ? (
    <NavLink to="/logout" exact>Logout</NavLink>
  ) : (<NavLink to="/signin" exact><User className="icon__item" /></NavLink>);

  return (
    <div className="icon">
      {componentToRender}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(userIcon);
