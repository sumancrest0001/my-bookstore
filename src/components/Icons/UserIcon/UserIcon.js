import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as User } from '../../../images/stick-man.svg';
import '../CartIcon.scss';

const userIcon = ({ currentUser }) => {
  const componentToRender = currentUser ? (
    <div>
      {currentUser.displayName}
    </div>
  ) : (<User className="icon__item" />);

  return (
    <div>
      {componentToRender}
    </div>
  );
};

const mapStateToProps = user => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(userIcon);
