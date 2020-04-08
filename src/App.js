import React from 'react';
import Booklist from './container/BookList';
import BookForm from './container/BooksForm';

import classes from './App.module.css';

function App() {
  const category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div className="App">
      <Booklist categories={category} />
      <div className={classes.HorizontalLine} />
      <BookForm categories={category} />
    </div>
  );
}

export default App;
