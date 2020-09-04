import * as actionTypes from '../actions/actionTypes';

const initialState = {
  books: [],
  homepageBooks: null,
  currentBook: '',
  categoryFilter: 'all',
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS:
      return {
        ...state,
        books: action.books,
        homepageBooks: action.arrangedBooks,
      };
    default:
      return state;
  }
};
export default bookReducer;
