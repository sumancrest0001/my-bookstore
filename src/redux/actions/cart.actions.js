import * as actionTypes from './actionTypes';

export const toggleCartDropdown = () => ({
  type: actionTypes.TOGGLE_CART_DROPDOWN,
});

export const addBookItem = bookItem => ({
  type: actionTypes.ADD_BOOK_ITEM,
  bookItem,
});
