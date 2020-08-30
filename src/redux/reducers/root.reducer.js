import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bookReducer from './books.reducer';
import userReducer from './user.reducer';
import cartReducer from './cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  book: bookReducer,
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
