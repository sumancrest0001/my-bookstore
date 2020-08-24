import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as User } from '../../../images/stick-man.svg';
import '../CartIcon.scss';

const userIcon = ({ currentUser }) => {
  console.log(currentUser);
  const componentToRender = currentUser ? (
    <NavLink to="/logout" exact>Logout</NavLink>
  ) : (<NavLink to="/signin" exact><User className="icon__item" /></NavLink>);

  return (
    <div>
      {componentToRender}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(userIcon);
