import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestore } from '../../firebase/index';
import { getBooks } from '../../redux/actions/book.actions';
import SingleBook from '../../components/SingleBook/SingleBook';
import './HomePage.scss';

class HomePage extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { storeBooks } = this.props;
    const booksRef = firestore.collection('books').orderBy('createdAt', 'desc');
    const availableBooks = [];
    booksRef.onSnapshot(snapShot => {
      snapShot.forEach(doc => availableBooks.push({ ...doc.data(), id: doc.id }));
      storeBooks(availableBooks);
    });
  }

  render() {
    const { books } = this.props;
    return (
      <section className="section">
        <h3 className="section__title"> New arrivals</h3>
        <div className="section__books">
          {
            books.map(item => (<SingleBook key={item.id} book={item} />))
          }
        </div>
      </section>

    );
  }
}

const mapStateToProps = state => ({
  books: state.book.books,
});

const mapDispatchToProps = dispatch => ({
  storeBooks: books => (dispatch(getBooks(books))),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
