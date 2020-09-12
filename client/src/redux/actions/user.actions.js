import * as actionTypes from './actionTypes';

export const setCurrentUser = (user, admin) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    user,
    admin,
  };
};
