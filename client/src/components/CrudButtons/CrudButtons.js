import React from 'react';
import './CrudButtons.scss';

const crudButtons = ({ selectedBook, history }) => {
  const removeBook = (id) => {
    console.log(id);
  }

  const editSelectedBookHandler = id => {
    history.push(`/auth/book/edit/${id}`);
  }
  return (
    <div className="Btns">
      <button type="button" id={selectedBook.id} onClick={(event) => removeBook(event.target.id)} className="btn delete">Remove</button>
      <button type="button" className="btn edit" onClick={() => editSelectedBookHandler(selectedBook.id)}>Edit</button>
    </div>
  );
};

export default crudButtons;
