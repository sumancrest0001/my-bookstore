import * as actionTypes from '../actions/actionTypes';

const filterBooks = (books, filter) => {
  let filteredBooks;
  if (filter === 'used' || filter === 'brand new') {
    filteredBooks = books.filter(book => book.status === filter);
  } else if (filter === 'All') {
    filteredBooks = books;
  } else {
    filteredBooks = books.filter(book => book.category === filter);
  }
  return filteredBooks;

};

const initialState = {
  books: [],
  homepageBooks: null,
  currentBook: [],
  categoryFilter: 'all',
  filteredBooks: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS:
      return {
        ...state,
        books: action.books,
        homepageBooks: action.arrangedBooks,
        filteredBooks: action.books,
      };
    case actionTypes.FILTER_CATEGORY:
      return {
        ...state,
        filteredBooks: filterBooks(state.books, action.filter),
        categoryFilter: action.filter,
      };
    case actionTypes.BOOK_FILTER:
      return {
        ...state,
        currentBook: state.books.filter(item => item.id === action.bookID),
      };
    default:
      return state;
  }
};


export default bookReducer;
