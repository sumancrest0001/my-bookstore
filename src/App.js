import React from 'react';
import Booklist from './container/BookList';
import BookForm from './container/BooksForm';

import './App.css';

function App() {
  const category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div className="App">
      <Booklist categories={category} />
      <BookForm categories={category} />
    </div>
  );
}

export default App;
