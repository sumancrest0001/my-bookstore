import React from 'react';
import Booklist from './container/BookList';
import BookForm from './container/BooksForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <Booklist />
      <BookForm />
    </div>
  );
}

export default App;
