import React from 'react';
import { Route } from 'react-router-dom';
import SingleBook from '../SingleBook/SingleBook';
import './BookSection.scss';

const bookSection = ({ books, title }) => (
  <section className="section">
    <div className="section__header">
      <span className="section__title">{title}</span>
      <span className="section__link">See all</span>
    </div>
    <div className="section__books">
      {
        books.map(item => (<SingleBook key={item.id} book={item} />))
      }
    </div>
  </section>
);

export default bookSection;
