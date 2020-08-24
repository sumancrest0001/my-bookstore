import React from 'react';
import SingleBook from '../../components/SingleBook/SingleBook';
import { books } from '../../utilities/utility';
import './HomePage.scss';

const homePage = () => (
  <section className="section">
    <h3 className="section__title"> New arrivals</h3>
    <div className="section__books">
      {
        books.map(item => (<SingleBook key={item.id} book={item} />))
      }
    </div>
  </section>

);

export default homePage;
