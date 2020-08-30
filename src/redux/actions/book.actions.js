import * as actionTypes from './actionTypes';

export const getBooks = books => ({
  type: actionTypes.GET_BOOKS,
  books,
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
