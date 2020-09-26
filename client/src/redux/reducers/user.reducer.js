const INITIAL_STATE = {
  currentUser: null,
  admin: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.user,
        admin: action.admin,
      };
    default:
      return state;
  }
};

export default userReducer;
