import * as actionTypes from '../actions/actionTypes';
import addItemToCart from '../../utilities/cart.utility';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case actionTypes.ADD_BOOK_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.bookItem),
      };

    default:
      return state;
  }
};

export default cartReducer;
