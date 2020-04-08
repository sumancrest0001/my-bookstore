import React from 'react';
import PropTypes from 'prop-types';
import classes from './Book.module.css';

const book = ({ bookItem: { id, title, category }, clicked }) => (
  <div className={classes.Book}>
    <div className={classes.LeftSection}>
      <div className={classes.Category}>{category}</div>
      <div className={classes.Title}>{title}</div>
      <div className={classes.Writer}>Writer Name</div>
      <div className={classes.Btns}>
        <button type="button">Comments</button>
        <div className={classes.Separator} />
        <button type="button" id={id} onClick={clicked}>Remove</button>
        <div className={classes.Separator} />
        <button type="button">Edit</button>
      </div>
    </div>
    <div className={classes.Right}>
      <div className={classes.MiddleSection}>
        <p className={classes.Percentage}>60%</p>
        <p className={classes.Status}>Status</p>
      </div>
      <div className={classes.Separator2} />
      <div className={classes.RightSection}>
        <div className={classes.CurrentChapter}>CURRENT CHAPTER</div>
        <div className={classes.Chapter}>chapter you are in</div>
        <div className={classes.UpdateBtn}>UPDATE PROGRESS</div>
      </div>
    </div>
  </div>
);

book.propTypes = {
  bookItem: PropTypes.instanceOf(Object).isRequired,
  clicked: PropTypes.func.isRequired,
};
export default book;
