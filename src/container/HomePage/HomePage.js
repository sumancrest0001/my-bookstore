import React from 'react';
import DetailsButton from '../../components/DetailsButton/DetailsButton';
import bookImage from '../../images/book1.jpg';
import LikeButton from '../../components/LikeButton/LikeButton';
import './HomePage.scss';

const homePage = () => (
  <section className="section">
    <h3 className="section__title"> New arrivals</h3>
    <div className="section__books">
      <div className="section__singleBook singleBook">
        <img src={bookImage} alt="the book" className="singleBook__image" />
        <div className="singleBook__body">
          <h3 className="singleBook__title">Title of the book</h3>
          <small className="singleBook__author">Author name</small>
          <p className="singleBook__price">$5</p>
          <div className="singleBook__buttons">
            <DetailsButton />
            <LikeButton />
          </div>
        </div>
      </div>
    </div>
  </section>

);

export default homePage;
