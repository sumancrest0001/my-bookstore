const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  book,
});

const filterBooks = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

export { createBook, removeBook, filterBooks };
