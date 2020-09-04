import React from 'react';
import SingleBook from '../SingleBook/SingleBook';
import './BookSection.scss';

const bookSection = ({ books, title }) => (
  <section className="section">
    <h3 className="section__title">{title}</h3>
    <div className="section__books">
      {
        books.map(item => (<SingleBook key={item.id} book={item} />))
      }
    </div>
  </section>
);

export default bookSection;
