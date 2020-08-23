import { combineReducers } from 'redux';
import bookReducer from './books.reducer';
import userReducer from './user.reducer';
import filterReducer from './filter';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
  user: userReducer,
});

export default rootReducer;
