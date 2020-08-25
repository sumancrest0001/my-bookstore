import * as actionTypes from './actionTypes';

export const toggleCartDropdown = () => ({
  type: actionTypes.TOGGLE_CART_DROPDOWN,
});

export const addBookItem = bookItem => ({
  type: actionTypes.ADD_CART_ITEM,
  bookItem,
});

export const removeBookItem = bookItem => ({
  type: actionTypes.REMOVE_CART_ITEM,
  bookItem,
});
