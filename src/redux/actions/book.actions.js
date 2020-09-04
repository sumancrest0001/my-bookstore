import * as actionTypes from './actionTypes';

export const getBooks = (books, arrangedBooks) => ({
  type: actionTypes.GET_BOOKS,
  books,
  arrangedBooks,
});

export const removeBook = book => ({
  type: actionTypes.REMOVE_BOOK,
  book,
});

export const addBook = book => ({
  type: actionTypes.ADD_BOOK,
  book,
});

export const setBookFilter = filter => ({
  type: actionTypes.SET_BOOK_FILTER,
  filter,
});
