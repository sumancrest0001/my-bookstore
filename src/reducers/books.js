const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ('CREATE_BOOK'):
      return [...state, action.book];

    case ('REMOVE_BOOK'):
      return state.filter(result => result.isbn !== action.book.isbn);
    default:
      return state;
  }
};

export default bookReducer;
