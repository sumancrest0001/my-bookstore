import React, { Component } from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from './container/HomePage/HomePage';
import AdminMainContainer from './container/AdminContainers/AdminMainContainer/AdminMainContainer';
import Header from './components/Header/Header';
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import Logout from './components/Auth/Logout/Logout';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import BookDetails from './components/BookDetails/BookDetails';
import FilteredBookList from './components/FilteredBookList/FilteredBookList';
import { auth, createUserProfileDocument, firestore } from './firebase/index';
import { setCurrentUser } from './redux/actions/user.actions';
import { getBooks } from './redux/actions/book.actions';
import { updateHomePageStore } from './utilities/utility';
import './App.scss';

class App extends Component {
  unSubscribeFromAuth = null;

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    this.checkCurrentUser();
    this.fetchData();
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
    this.unsubscribeFromSnapShot = null;
  }

  fetchData = async () => {
    const { storeBooks } = this.props;
    const availableBooks = [];
    const booksRef = firestore.collection('books').orderBy('createdAt', 'desc');
    this.unsubscribeFromSnapShot = booksRef.onSnapshot(snapShot => {
      snapShot.forEach(doc => availableBooks.push({ ...doc.data(), id: doc.id }));
      const arrangedBooks = this.categorizeBooks(availableBooks);
      storeBooks(availableBooks, arrangedBooks);
    });

  }

  categorizeBooks = availableBooks => {
    const newBooks = availableBooks.filter(book => book.status !== 'used');
    const kidsBooks = availableBooks.filter(item => item.category === 'Kids');
    const bestPicks = updateHomePageStore(availableBooks);
    const usedBooks = availableBooks.filter(item => item.status === 'used');
    const homepageBooks = {
      newBooks,
      kidsBooks,
      bestPicks,
      usedBooks,
    };
    return homepageBooks;
  };

  checkCurrentUser = () => {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          const result = snapShot.data().email === 'suman.crest0001@gmail.com';
          const currentUser = {
            id: snapShot.id,
            ...snapShot.data(),
          };
          setCurrentUser(currentUser, result);
        });
      } else {
        setCurrentUser(userAuth, false);
      }
    });
  }

  render() {
    const { adminStatus, books } = this.props;
    return (
      <div className="App">
        <Header hideNewBook={adminStatus} />
        <Switch>
          <Route path="/signin" exact component={Signin} />
          <Route path="/register" exact component={Signup} />
          <Route path="/logout" exact component={Logout} />
          {
            adminStatus ? <Route path="/auth" component={AdminMainContainer} /> : null
          }
          <Route path="/" exact render={() => <HomePage availableBooks={books} />} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/shop/book/category/:category" component={FilteredBookList} />
          <Route path="/shop/book/:id" render={props => <BookDetails {...props} />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adminStatus: state.user.admin,
  books: state.book.books,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user, admin) => dispatch(setCurrentUser(user, admin)),
  storeBooks: (books, arrangedBooks) => (dispatch(getBooks(books, arrangedBooks))),
});

App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
