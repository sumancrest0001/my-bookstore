import * as actionTypes from '../actions/actionTypes';
import { addItemToCart, decreaseQuantityFromCart } from '../../utilities/cart.utility';

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
    case actionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.bookItem),
      };

    case actionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.bookItem.id),
      };

    case actionTypes.DECREASE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseQuantityFromCart(state.cartItems, action.bookItem),
      };

    default:
      return state;
  }
};

export default cartReducer;
