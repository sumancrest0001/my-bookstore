import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './App';
import * as serviceWorker from './serviceWorker';


const state = {
  books: [
    {
      id: Math.random(),
      title: 'The Help',
      category: 'History',
    },
    {
      id: Math.random(),
      title: 'Charlotte\'s Web',
      category: 'Kids',
    },
  ],
};
const store = createStore(rootReducer, state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
