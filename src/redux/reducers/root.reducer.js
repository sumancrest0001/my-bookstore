import { combineReducers } from 'redux';
import bookReducer from './books.reducer';
import userReducer from './user.reducer';
import filterReducer from './filter';
import cartReducer from './cart.reducer';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
