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

export const filterCategory = filter => ({
  type: actionTypes.FILTER_CATEGORY,
  filter,
});

export const bookFilter = bookID => ({
  type: actionTypes.BOOK_FILTER,
  bookID,
});
