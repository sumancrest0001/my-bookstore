import React from 'react';
import SingleBook from '../../components/SingleBook/SingleBook';
import './HomePage.scss';

const homePage = ({ availableBooks }) => {
  return (
    <section className="section">
      <h3 className="section__title"> New arrivals</h3>
      <div className="section__books">
        {
          availableBooks.map(item => (<SingleBook key={item.id} book={item} />))
        }
      </div>
    </section>

  );
};


export default homePage;
